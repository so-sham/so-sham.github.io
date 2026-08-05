"use client"

import { useEffect, useRef, useState } from "react"
import { useReveal, RevealProvider, RevealItem } from "@/components/reveal"

const ACCENT1 = "oklch(0.72 0.19 350)"
const ACCENT2 = "oklch(0.62 0.12 264)"

type Stat = {
  id: string
  to: number
  decimals: number
  suffix: string
  label: string
  detail: string
  color: string
}

const STATS: Stat[] = [
  { id: "installs", to: 3.67, decimals: 2, suffix: "M", label: "App installs, NH Care", detail: "1.64M → 3.67M in three years (+124%)", color: ACCENT1 },
  { id: "revenue", to: 3, decimals: 0, suffix: "×", label: "Digital revenue growth", detail: "₹4.4Cr → ₹13.6Cr / month", color: ACCENT2 },
  { id: "interviews", to: 150, decimals: 0, suffix: "+", label: "User interviews conducted", detail: "10+ nationalities across India, Cayman, US", color: ACCENT1 },
  { id: "experiments", to: 20, decimals: 0, suffix: "+", label: "Funnel experiments run", detail: "Mixpanel introduced org-wide", color: ACCENT2 },
  { id: "automation", to: 80, decimals: 0, suffix: "%", label: "Process automation, Cayman", detail: "Digital payments: near-zero → $50K+/month", color: ACCENT1 },
]

const CIRCUMFERENCE = 2 * Math.PI * 30
const ease = (t: number) => 1 - Math.pow(1 - t, 3)

function StatRing({ stat, delay }: { stat: Stat; delay: number }) {
  const [progress, setProgress] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (started.current) return
    started.current = true
    const timeout = setTimeout(() => {
      const duration = 1400
      const start = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - start) / duration)
        setProgress(ease(p))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, delay)
    return () => clearTimeout(timeout)
  }, [delay])

  const value = stat.to * progress
  const display = value.toFixed(stat.decimals) + stat.suffix

  return (
    <div className="flex items-center gap-4.5">
      <svg
        width="64"
        height="64"
        viewBox="0 0 72 72"
        className="shrink-0"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="36"
          cy="36"
          r="30"
          fill="none"
          stroke="oklch(1 0 0 / 0.1)"
          strokeWidth="4"
        />
        <circle
          cx="36"
          cy="36"
          r="30"
          fill="none"
          stroke={stat.color}
          strokeWidth="4"
          strokeLinecap="round"
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: CIRCUMFERENCE * (1 - progress),
            transition: "stroke-dashoffset 200ms linear",
          }}
        />
      </svg>
      <div>
        <div
          className="mb-2 font-mono font-bold"
          style={{ color: stat.color, fontSize: "clamp(2rem, 4vw, 2.7rem)" }}
        >
          {display}
        </div>
        <div className="mb-1 font-sans text-base font-bold">{stat.label}</div>
        <div className="font-sans text-[0.86rem] leading-[1.5] text-[oklch(0.68_0.03_300)]">
          {stat.detail}
        </div>
      </div>
    </div>
  )
}

export function ImpactSection() {
  const [ref, revealed] = useReveal<HTMLElement>()

  return (
    <section
      id="impact"
      ref={ref}
      className="relative overflow-hidden bg-[oklch(0.22_0.08_300)] px-6 py-[140px] md:px-12"
    >
      <div
        className="animate-orb-float pointer-events-none absolute h-[460px] w-[460px]"
        style={{
          top: "-140px",
          right: "-120px",
        }}
      >
        <div
          className="h-full w-full rounded-full blur-[50px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.72 0.19 350 / 0.28), transparent 70%)",
          }}
        />
      </div>
      <div
        className="animate-orb-float-reverse pointer-events-none absolute h-80 w-80"
        style={{ bottom: "-100px", left: "-80px" }}
      >
        <div
          className="h-full w-full rounded-full blur-[50px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.62 0.12 264 / 0.22), transparent 70%)",
          }}
        />
      </div>

      <div className="relative">
        <div className="mb-4 font-mono text-[13px] tracking-[0.14em] text-[oklch(0.72_0.19_350)]">
          THE NUMBERS
        </div>
        <h2
          className="mb-14 font-sans font-extrabold"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Impact, by the numbers
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(240px,1fr))]">
        <RevealProvider revealed={revealed}>
          {STATS.map((stat, idx) => (
            <RevealItem key={stat.id} index={idx}>
              <StatRing stat={stat} delay={idx * 120} />
            </RevealItem>
          ))}
        </RevealProvider>
      </div>
    </section>
  )
}
