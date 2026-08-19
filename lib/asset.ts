import manifest from "./asset-manifest.json"

const FINGERPRINTS: Record<string, string> = manifest

/**
 * Resolve a `/assets/...` path to its content-addressed URL.
 *
 * GitHub Pages serves everything with a fixed `cache-control: max-age=600` and
 * gives a repo no way to change that (no `_headers` file, no server runtime on
 * a static export). So instead of tuning a TTL we make the URL itself safe to
 * cache forever: the filename carries a hash of the file's bytes, produced at
 * build time by `scripts/fingerprint-assets.mjs`. Same bytes, same URL; edit
 * an image and its URL changes, which no cache can serve a stale copy of.
 *
 * Every `<img>`/`<video>` on the site renders through FillImg, AutoVideo,
 * PkMarquee or XrFlip, and all four call this — so a newly added asset is
 * fingerprinted automatically without the call site doing anything. Only
 * direct `<a href>` links (the CV) need to call it by hand.
 *
 * In development the manifest is bypassed: the hashed copies only exist in
 * `out/` after a build, while `next dev` serves `public/` under the real
 * filenames.
 */
export function asset(src: string): string {
  if (process.env.NODE_ENV !== "production") return src

  const fingerprinted = FINGERPRINTS[src]
  if (fingerprinted) return fingerprinted

  // Not in the manifest — the file is missing from public/assets, or the path
  // has a typo. Fall back to the literal path (which still ships, un-hashed)
  // rather than breaking the page, but make the miss visible in the build log.
  console.warn(`[asset] no fingerprint for "${src}" — serving un-versioned path`)
  return src
}
