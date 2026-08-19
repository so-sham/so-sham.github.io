#!/usr/bin/env node
/**
 * Content-hash fingerprinting for everything under `public/assets/`.
 *
 * Why this exists: GitHub Pages serves every file with a fixed
 * `cache-control: max-age=600` and offers no repo-level way to override
 * response headers (no `_headers` file, no server runtime on a static export).
 * The only lever left is the URL itself — so each asset is also published under
 * a content-addressed name (`hero-portrait.<sha256-10>.webp`). Identical bytes
 * always produce the identical URL, and changed bytes produce a brand-new URL
 * that no cache anywhere can have seen before. Staleness becomes structurally
 * impossible regardless of what TTL the host applies.
 *
 * Two phases, both wired to npm lifecycle scripts so a plain `npm run build`
 * (including the one in .github/workflows/deploy.yml) gets them for free:
 *
 *   prebuild   `node scripts/fingerprint-assets.mjs`
 *              Hashes public/assets/** and writes lib/asset-manifest.json,
 *              which `asset()` reads while Next renders the static HTML.
 *
 *   postbuild  `node scripts/fingerprint-assets.mjs --emit`
 *              Copies each out/assets/<name> to out/assets/<name>.<hash>.<ext>
 *              so the fingerprinted URLs in that HTML actually resolve.
 *
 * The original un-hashed files are deliberately left in place alongside the
 * hashed ones: inbound links people already have (a resume PDF shared on
 * LinkedIn, say) must keep working. They simply keep the host's default TTL.
 *
 * This step sits downstream of scripts/optimize-images.mjs and
 * scripts/optimize-videos.sh — it hashes whatever those leave in public/assets,
 * and never generates or transforms media itself.
 */

import { createHash } from "node:crypto"
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  writeFileSync,
} from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const PUBLIC_ASSETS = path.join(ROOT, "public", "assets")
const OUT_DIR = path.join(ROOT, "out")
const MANIFEST_PATH = path.join(ROOT, "lib", "asset-manifest.json")

/** 10 hex chars of sha256 — 40 bits, ample for a few dozen files. */
const HASH_LENGTH = 10

/** Recursively collect files under `dir`, skipping dotfiles (.DS_Store etc). */
function walk(dir) {
  const found = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue
    const abs = path.join(dir, entry.name)
    if (entry.isDirectory()) found.push(...walk(abs))
    else if (entry.isFile()) found.push(abs)
  }
  return found
}

/** `img/hero.webp` + `a1b2c3d4e5` -> `img/hero.a1b2c3d4e5.webp` */
function withHash(relPath, hash) {
  const ext = path.extname(relPath)
  const stem = ext ? relPath.slice(0, -ext.length) : relPath
  return `${stem}.${hash}${ext}`
}

/**
 * Hash every asset and write the manifest. Keys are sorted so the file is
 * byte-for-byte reproducible and only changes when asset contents change.
 */
function writeManifest() {
  if (!existsSync(PUBLIC_ASSETS)) {
    throw new Error(`No assets directory at ${PUBLIC_ASSETS}`)
  }

  const manifest = {}
  for (const abs of walk(PUBLIC_ASSETS).sort()) {
    const rel = path.relative(PUBLIC_ASSETS, abs).split(path.sep).join("/")
    const hash = createHash("sha256")
      .update(readFileSync(abs))
      .digest("hex")
      .slice(0, HASH_LENGTH)
    manifest[`/assets/${rel}`] = `/assets/${withHash(rel, hash)}`
  }

  const entries = Object.keys(manifest)
  if (entries.length === 0) {
    throw new Error(`No assets found under ${PUBLIC_ASSETS}`)
  }

  writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`)
  console.log(`[fingerprint] hashed ${entries.length} assets -> lib/asset-manifest.json`)
}

/**
 * Publish the hashed copies into `out/`. Runs after `next build`, which has by
 * then copied `public/` into `out/` under the original names.
 */
function emitHashedCopies() {
  if (!existsSync(OUT_DIR)) {
    throw new Error(`No build output at ${OUT_DIR} — run \`next build\` first`)
  }
  if (!existsSync(MANIFEST_PATH)) {
    throw new Error(`No manifest at ${MANIFEST_PATH} — run this script without --emit first`)
  }

  const manifest = JSON.parse(readFileSync(MANIFEST_PATH, "utf8"))
  const missing = []
  let copied = 0

  for (const [original, hashed] of Object.entries(manifest)) {
    const from = path.join(OUT_DIR, original.replace(/^\//, ""))
    const to = path.join(OUT_DIR, hashed.replace(/^\//, ""))

    if (!existsSync(from)) {
      missing.push(original)
      continue
    }

    mkdirSync(path.dirname(to), { recursive: true })
    copyFileSync(from, to)
    copied++
  }

  // A miss here means the HTML references a fingerprinted URL that will 404,
  // so fail the build rather than ship a broken page.
  if (missing.length > 0) {
    throw new Error(
      `[fingerprint] ${missing.length} manifest asset(s) missing from out/:\n  ${missing.join("\n  ")}`
    )
  }

  console.log(`[fingerprint] emitted ${copied} fingerprinted copies into out/assets`)
}

if (process.argv.includes("--emit")) emitHashedCopies()
else writeManifest()
