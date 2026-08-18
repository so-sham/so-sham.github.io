// One-off asset pipeline: reads source PNG/JPEGs from the design handoff (and one
// user-supplied photo), resizes + re-encodes them to WebP into public/assets/img.
// Re-run manually if source assets change; not part of the build.
import sharp from "sharp"
import { mkdir } from "node:fs/promises"
import path from "node:path"

const SRC_DIR = "/Users/shamitha/Downloads/design_handoff_portfolio_site/design/img"
const OUT_DIR = path.resolve(import.meta.dirname, "../public/assets/img")

// tier = { maxWidth, quality } — maxWidth is a cap, never upscales past native size.
const TIERS = {
  hero: { maxWidth: 1000, quality: 90 },
  large: { maxWidth: 900, quality: 78 },
  medium: { maxWidth: 700, quality: 72 },
  small: { maxWidth: 320, quality: 65 },
}

// filename (no ext, source dir) -> tier. Source extension is auto-detected.
const MANIFEST = {
  // hero — compress as little as possible
  "hero-portrait": "hero",

  // large — full-bleed collages / wide card media, ~2x rendered width
  "banashankari-collage": "large",
  "pulse-collage-wide": "large",
  "pulse-collage": "large",
  "tpf-collage-wide": "large",
  "wai-collage-wide": "large",
  "wip-collage-wide": "large",
  "dance-collage-home": "large",
  "about-portrait-collage": "large",
  "opd-journey-collage": "large",
  "aiesec-collage-v2": "large",
  "eventops-collage": "large",
  "xthrive-group": "large",
  "me-speaking-square": "large",
  "books-library-collage": "large",

  // medium — card-grid images
  "arya-landing": "medium",
  "leanon-hero": "medium",
  "pk-1": "medium",
  "pk-2": "medium",
  "pk-3": "medium",
  "pk-4": "medium",
  "prep-1": "medium",
  "prep-2": "medium",
  "prep-3": "medium",
  "prep-4": "medium",
  "prep-5": "medium",
  "prep-6": "medium",
  "xthrive-1": "medium",
  "xthrive-2": "medium",
  "xthrive-3": "medium",
  "xthrive-4": "medium",
  "xthrive-5": "medium",
  "xthrive-6": "medium",
  "xthrive-7": "medium",
  "xthrive-8": "medium",
  "xthrive-9": "medium",
  "xthrive-10": "medium",
  "xthrive-11": "medium",
  "opd-1732519222130": "medium",
  "dance-collage-tile": "medium",
  "tpf-team-backdrop": "medium",
  "tpf-podcast-cpo": "medium",
  "tpf-group-2023": "medium",
  "tpf-volunteers": "medium",

  // small — book covers, smallest on-page footprint
  "cover-sapiens": "small",
  "cover-palace": "small",
  "cover-coffee": "small",
}

// extra assets not sourced from design/img
const EXTRA = [
  {
    src: "/Users/shamitha/Downloads/WhatsApp Image 2026-08-18 at 12.40.35 PM.jpeg",
    out: "invisible-blr",
    tier: "medium",
  },
]

async function findSourceFile(base) {
  const exts = [".png", ".jpg", ".jpeg"]
  for (const ext of exts) {
    const p = path.join(SRC_DIR, base + ext)
    try {
      await sharp(p).metadata()
      return p
    } catch {
      // try next extension
    }
  }
  throw new Error(`No source file found for ${base}`)
}

async function processOne(srcPath, outBase, tierName) {
  const tier = TIERS[tierName]
  const img = sharp(srcPath)
  const meta = await img.metadata()
  const targetWidth = Math.min(tier.maxWidth, meta.width)
  const outPath = path.join(OUT_DIR, `${outBase}.webp`)

  await img
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ quality: tier.quality })
    .toFile(outPath)

  const outMeta = await sharp(outPath).metadata()
  console.log(
    `${outBase}.webp  ${meta.width}x${meta.height} -> ${outMeta.width}x${outMeta.height}  q${tier.quality}  (${tierName})`
  )
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })

  for (const [base, tierName] of Object.entries(MANIFEST)) {
    const srcPath = await findSourceFile(base)
    await processOne(srcPath, base, tierName)
  }

  for (const { src, out, tier } of EXTRA) {
    await processOne(src, out, tier)
  }

  console.log("\nDone.")
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
