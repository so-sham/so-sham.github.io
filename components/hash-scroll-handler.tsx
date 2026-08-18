"use client"

import { useEffect } from "react"
import { scrollToSectionAfterNavigate } from "@/lib/scroll-to-section"

/** Picks up `/#sec-id` links that navigated here from a secondary route. */
export function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash) scrollToSectionAfterNavigate(hash)
  }, [])

  return null
}
