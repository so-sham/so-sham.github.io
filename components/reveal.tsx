"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/cn"

/**
 * Fades + rises an element into place the first time it enters the viewport,
 * then stops observing. Skips straight to revealed under prefers-reduced-motion
 * (the CSS override in globals.css also forces this, this just avoids the
 * pointless observer setup). `index` staggers a delay for grouped items;
 * `block` uses the slightly larger translateY used for single-block reveals.
 */
export function Reveal({
  as: Tag = "div",
  index = 0,
  block = false,
  className,
  children,
  ...props
}: {
  as?: React.ElementType
  index?: number
  block?: boolean
  className?: string
  children: React.ReactNode
  [key: string]: unknown
}) {
  const ref = useRef<HTMLElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setRevealed(true)
      return
    }
    const el = ref.current
    if (!el) return

    const timer = window.setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(el)
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
      )
      observer.observe(el)
    }, 30)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <Tag
      ref={ref}
      className={cn(block ? "reveal-block" : "reveal-item", revealed && "is-revealed", className)}
      style={{ transitionDelay: `${index * 80}ms` }}
      {...props}
    >
      {children}
    </Tag>
  )
}

/** The vertical spine line on the journey timeline: scales in from the top. */
export function RevealSpine({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduced) {
      setRevealed(true)
      return
    }
    const el = ref.current
    if (!el) return

    const timer = window.setTimeout(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(el)
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.04 }
      )
      observer.observe(el)
    }, 30)

    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div
      ref={ref}
      data-spine
      className={cn("reveal-spine", revealed && "is-revealed", className)}
      style={{ transitionDelay: "120ms" }}
    />
  )
}
