import type React from "react"
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

export function FillImg({
  src,
  alt,
  fit = "cover",
  position,
  className,
}: {
  src: string
  alt: string
  fit?: "cover" | "contain"
  position?: string
  className?: string
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "absolute inset-0 h-full w-full",
        fit === "cover" ? "object-cover" : "object-contain",
        className
      )}
      style={position ? { objectPosition: position } : undefined}
    />
  )
}
