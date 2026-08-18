import type React from "react"
import { cn } from "@/lib/cn"
import { Container } from "@/components/layout/container"

/** A home-page or case-study section: the 1180px content column, optionally
 * sitting on the alternating paper-band background (full-bleed via the
 * `.band` box-shadow/clip-path trick). */
export function Section({
  id,
  band = false,
  border,
  className,
  children,
}: {
  id?: string
  band?: boolean
  border?: "top" | "bottom" | "both"
  className?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-28",
        band && "band",
        (border === "top" || border === "both") && "border-t border-rule",
        (border === "bottom" || border === "both") && "border-b border-rule",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  )
}
