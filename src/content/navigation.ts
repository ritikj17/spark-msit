import type { NavigationConfig } from "./types";

export const navigation: NavigationConfig = {
  items: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Events", href: "/events" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Join SPARK", href: "/contact" },
};