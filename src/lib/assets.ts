/*
 * SPARK placeholder asset system.
 *
 * Content data references assets by placeholder token, e.g. "[SPARK-LOGO]",
 * "[SPARK-EVENT-01-COVER]", "[SPARK-RESEARCH-HEAD-PHOTO]".
 *
 * To drop in a real asset:
 *   1. Place the file under public/assets/<area>/...
 *   2. Point its token to the public path in PLACEHOLDER_TO_PATH below.
 *
 * Tokens that still map to `null` render a branded <Placeholder> instead of a
 * broken image. Real people are never AI-generated or invented.
 */

export type AssetToken = string;

const PLACEHOLDER_TO_PATH: Record<string, string | null> = {
  // Brand
  "[SPARK-LOGO]": "/assets/brand/spark-logo.jpg",
  "[SPARK-CAMPUS]": null,
  "[SPARK-TEAM-HERO-VISUAL]": null,

  // Faculty
  "[SPARK-FACULTY-PHOTO]": null,

  // Executive panel 2026-2027
  "[SPARK-CORE-2026-2027-PRESIDENT-PHOTO]": null,
  "[SPARK-CORE-2026-2027-VICE-PRESIDENT-PHOTO]": null,
  "[SPARK-CORE-2026-2027-GENERAL-SECRETARY-PHOTO]": null,

  // Departments
  "[SPARK-RESEARCH-HEAD-PHOTO]": null,
  "[SPARK-RESEARCH-DEPUTY-HEAD-PHOTO]": null,
  "[SPARK-RESEARCH-COORDINATOR-PHOTO]": null,
  "[SPARK-PUBLICATION-HEAD-PHOTO]": null,
  "[SPARK-WORKSHOP-HEAD-PHOTO]": null,
  "[SPARK-WORKSHOP-DEPUTY-HEAD-PHOTO]": null,
  "[SPARK-TECH-HEAD-PHOTO]": null,
  "[SPARK-TECH-DEPUTY-HEAD-PHOTO]": null,
  "[SPARK-PR-HEAD-PHOTO]": null,
  "[SPARK-PR-DEPUTY-HEAD-PHOTO]": null,
  "[SPARK-EVENT-MGMT-HEAD-PHOTO]": null,
  "[SPARK-EVENT-MGMT-DEPUTY-HEAD-PHOTO]": null,
  "[SPARK-DESIGN-HEAD-PHOTO]": null,
  "[SPARK-DESIGN-DEPUTY-HEAD-PHOTO]": null,

  // Events
  "[SPARK-EVENT-01-COVER]": null,
  "[SPARK-EVENT-01-GALLERY-01]": null,
  "[SPARK-EVENT-01-GALLERY-02]": null,
  "[SPARK-EVENT-02-COVER]": null,
  "[SPARK-EVENT-02-GALLERY-01]": null,
  "[SPARK-EVENT-03-COVER]": null,
  "[SPARK-EVENT-03-GALLERY-01]": null,
  "[SPARK-EVENT-03-GALLERY-02]": null,
};

export function isAssetToken(src: string): boolean {
  return /^\[SPARK-/.test(src);
}

/**
 * Resolves an asset source. Non-token paths pass through unchanged.
 * Token sources resolve to a public path once mapped, otherwise `null`
 * (meaning: render the branded placeholder).
 */
export function resolveAsset(src: string): string | null {
  if (!isAssetToken(src)) return src;
  return PLACEHOLDER_TO_PATH[src] ?? null;
}

/** Lists tokens that are still awaiting a real asset. */
export function pendingAssets(): string[] {
  return Object.entries(PLACEHOLDER_TO_PATH)
    .filter(([, path]) => path === null)
    .map(([token]) => token);
}