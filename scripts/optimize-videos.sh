#!/bin/bash
# One-off asset pipeline: re-encodes the design handoff's source video clips into
# public/assets/video with clean filenames + poster frames. Re-run manually if
# source clips change; not part of the build. Requires ffmpeg (brew install ffmpeg).
set -euo pipefail

SRC="/Users/shamitha/Downloads/design_handoff_portfolio_site/design/uploads"
OUT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/public/assets/video"
mkdir -p "$OUT"

encode() {
  local src="$1" out="$2"
  echo "=== $out ==="
  ffmpeg -y -i "$SRC/$src" \
    -vf "scale='min(1280,iw)':-2" \
    -c:v libx264 -preset slow -crf 27 -profile:v high -pix_fmt yuv420p \
    -movflags +faststart -an \
    "$OUT/$out.mp4"
  # This ffmpeg build has no libwebp encoder, so grab a JPEG frame and hand it
  # to sharp (already a devDependency) for the WebP conversion.
  ffmpeg -y -i "$OUT/$out.mp4" -vframes 1 -update 1 -q:v 3 "$OUT/$out-poster.jpg"
  node -e "require('sharp')('$OUT/$out-poster.jpg').webp({quality:90}).toFile('$OUT/$out-poster.webp')"
  rm "$OUT/$out-poster.jpg"
}

encode "WhatsApp Video 2026-08-18 at 6.29.22 PM.mp4" "cayman-1"
encode "WhatsApp Video 2026-08-18 at 6.29.08 PM.mp4" "cayman-2"
encode "WhatsApp Video 2026-08-18 at 6.29.41 PM.mp4" "cayman-3"
encode "WhatsApp Video 2026-08-18 at 6.30.43 PM.mp4" "forge-demo"
encode "WhatsApp Video 2026-08-18 at 6.31.02 PM.mp4" "nourishplan-demo"
encode "WhatsApp Video 2026-08-19 at 12.33.15 AM.mp4" "fitness-clip"
encode "whatsapp-video-2026-08-18-at-62732-pm_MiOPkRk6.mp4" "guided-journey-demo"

echo
echo "Done."
du -sh "$OUT"
