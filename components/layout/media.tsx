import type React from "react"
import { asset } from "@/lib/asset"
import { cn } from "@/lib/cn"

/** Fixed aspect-ratio box for images/video, with the media absolutely
 * positioned at inset:0 per the design's layout spec. */
export function Media({
  ratio,
  className,
  style,
  children,
}: {
  ratio: string
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}) {
  return (
    <div
      className={cn("relative min-w-0 overflow-hidden", className)}
      style={{ aspectRatio: ratio, ...style }}
    >
      {children}
    </div>
  )
}

/**
 * `priority` marks the one above-the-fold image (the home hero portrait), which
 * loads eagerly. Everything else defers to `loading="lazy"`, which also stops
 * React from emitting a `<link rel="preload" as="image">` for it — without
 * that, all ~35 images on the home page were preloaded into the initial request
 * wave and starved the webfonts the LCP text waits on.
 *
 * Deliberately no `fetchpriority="high"` on the hero: measured against a built
 * export it pulled 85 KB into the high-priority set ahead of the fonts and cost
 * ~350 ms of mobile LCP, and Chrome promotes an eager in-viewport image on its
 * own once layout lands.
 */
export function FillImg({
  src,
  alt,
  fit = "cover",
  position,
  priority = false,
  className,
}: {
  src: string
  alt: string
  fit?: "cover" | "contain"
  position?: string
  priority?: boolean
  className?: string
}) {
  return (
    <img
      src={asset(src)}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "sync" : "async"}
      className={cn(
        "absolute inset-0 h-full w-full",
        fit === "cover" ? "object-cover" : "object-contain",
        className
      )}
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
