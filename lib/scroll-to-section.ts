const MAX_TRIES = 6
const SETTLE_DELAY_MS = 120
const SETTLE_THRESHOLD_PX = 4

function headerOffset() {
  const header = document.querySelector("[data-site-header]")
  const height = header?.getBoundingClientRect().height ?? 0
  return height + 8
}

function settle(id: string, tries: number) {
  const el = document.getElementById(id)
  if (!el) return

  const gap = headerOffset()
  const delta = el.getBoundingClientRect().top - gap
  if (Math.abs(delta) < SETTLE_THRESHOLD_PX || tries >= MAX_TRIES) return

  const scroller = document.scrollingElement ?? document.documentElement
  scroller.scrollTop += delta
  window.setTimeout(() => settle(id, tries + 1), SETTLE_DELAY_MS)
}

/**
 * Scrolls to a section id, offset by the live header height + 8px. Re-measures
 * and nudges up to 6 times (120ms apart) because images/video/collages resolve
 * their heights after the initial scroll, which strands a single scrollIntoView.
 */
export function scrollToSection(id: string) {
  settle(id, 0)
}

/** Same as scrollToSection, but waits for the home page to mount/settle first — used
 * when navigating from a secondary route via a `/#id` link. */
export function scrollToSectionAfterNavigate(id: string) {
  window.setTimeout(() => settle(id, 0), SETTLE_DELAY_MS)
}
