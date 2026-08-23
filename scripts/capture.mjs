/* Device-emulated screenshots + overflow probe via raw CDP (no deps). */
import { spawn } from "node:child_process";
import { writeFileSync, mkdirSync } from "node:fs";

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const PORT = 9223;
const URL_BASE = process.argv[2] ?? "http://localhost:3000";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const chrome = spawn(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--hide-scrollbars",
  `--remote-debugging-port=${PORT}`,
  "--user-data-dir=C:\\Users\\bravo\\AppData\\Local\\Temp\\opencode\\cdp-profile",
  "--no-first-run",
  "about:blank",
]);
chrome.on("error", (e) => { console.error("CHROME SPAWN FAIL", e); process.exit(1); });

async function waitForDevtools() {
  for (let i = 0; i < 40; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(250);
  }
  throw new Error("devtools endpoint never appeared");
}

const wsUrl = await waitForDevtools();
const ws = new WebSocket(wsUrl);
await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });

let id = 0;
const pending = new Map();
ws.onmessage = (ev) => {
  const msg = JSON.parse(ev.data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  }
};
function send(method, params = {}) {
  return new Promise((resolve) => {
    const mid = ++id;
    pending.set(mid, resolve);
    ws.send(JSON.stringify({ id: mid, method, params }));
  });
}

await send("Page.enable");

const shots = [
  { name: "desktop-1440x900", w: 1440, h: 900, mobile: false },
  { name: "laptop-1280x800", w: 1280, h: 800, mobile: false },
  { name: "tablet-768x1024", w: 768, h: 1024, mobile: true },
  { name: "mobile-412x915", w: 412, h: 915, mobile: true },
  { name: "mobile-390x844", w: 390, h: 844, mobile: true },
];

mkdirSync("screenshots", { recursive: true });

for (const s of shots) {
  await send("Emulation.setDeviceMetricsOverride", {
    width: s.w,
    height: s.h,
    deviceScaleFactor: 1,
    mobile: s.mobile,
  });
  await send("Page.navigate", { url: URL_BASE });
  await sleep(7000); // hydrate + lazy 3D settle

  const evalRes = await send("Runtime.evaluate", {
    expression: `JSON.stringify({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      docScrollW: document.documentElement.scrollWidth,
      bodyScrollW: document.body.scrollWidth,
      h1: !!document.querySelector("h1"),
      eyebrow: document.body.innerText.includes("STUDENT PLATFORM"),
      cta: document.body.innerText.includes("Explore SPARK"),
      burgerVisible: (() => { const b = document.querySelector('button[aria-controls="mobile-nav"]'); if (!b) return false; const r = b.getBoundingClientRect(); return r.width > 0 && r.right <= window.innerWidth; })(),
    })`,
    returnByValue: true,
  });
  console.log(s.name, evalRes.result?.result?.value ?? "EVAL-FAIL");

  const shot = await send("Page.captureScreenshot", { format: "png" });
  if (shot.result?.data) {
    writeFileSync(`screenshots/${s.name}.png`, Buffer.from(shot.result.data, "base64"));
    console.log(`${s.name} saved`);
  } else {
    console.error(`${s.name} CAPTURE FAIL`, JSON.stringify(shot).slice(0, 200));
  }
}

ws.close();
chrome.kill();
process.exit(0);
