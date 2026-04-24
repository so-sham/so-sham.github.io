"use client"

import { useCallback, useRef, type MouseEvent } from "react"
import { ArrowUpRight, Dumbbell, Utensils } from "lucide-react"

type Portal = {
  eyebrow: string
  title: string
  description: string
  href: string
  Icon: typeof Utensils
  disc: string
}

const portals: Portal[] = [
  {
    eyebrow: "Meal Planner",
    title: "NourishPlan",
    description:
      "Protein-first Indian & international meal plans with AI food scanning.",
    href: "https://so-sham.github.io/meal-planner/",
    Icon: Utensils,
    disc: "from-cyan-400 via-sky-500 to-blue-600",
  },
  {
    eyebrow: "Workout Planner",
    title: "FORGE",
    description:
      "AI celebrity personal trainer. Generate, log, and PR-track your lifts.",
    href: "https://so-sham.github.io/workout-planner/",
    Icon: Dumbbell,
    disc: "from-fuchsia-400 via-purple-500 to-indigo-600",
  },
]

export function ProjectPortals() {
  return (
    <div className="mt-24 grid w-full max-w-3xl grid-cols-1 gap-5 px-4 md:mt-32 md:grid-cols-2 md:gap-6 md:px-0">
      {portals.map((p, i) => (
        <PortalCard key={p.href} portal={p} index={i} />
      ))}
    </div>
  )
}

function PortalCard({ portal, index }: { portal: Portal; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const raf = useRef<number | null>(null)

  const handleMove = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current
    if (!el) return
    if (raf.current) cancelAnimationFrame(raf.current)
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    raf.current = requestAnimationFrame(() => {
      el.style.setProperty("--rx", `${(-y * 8).toFixed(2)}deg`)
      el.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`)
      el.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`)
      el.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`)
    })
  }, [])

  const handleLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    if (raf.current) cancelAnimationFrame(raf.current)
    el.style.setProperty("--rx", "0deg")
    el.style.setProperty("--ry", "0deg")
    el.style.setProperty("--gx", "50%")
    el.style.setProperty("--gy", "50%")
  }, [])

  const { Icon } = portal
  return (
    <a
      ref={ref}
      href={portal.href}
      aria-label={`Open ${portal.title} — ${portal.eyebrow}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="portal-card group relative block focus-visible:outline-none"
      style={{ ["--portal-delay" as string]: `${2.4 + index * 0.2}s` }}
    >
      <div className="portal-card__tilt relative rounded-2xl">
        {/* Animated gradient border (masked) */}
        <div className="portal-border pointer-events-none absolute inset-0 rounded-2xl" aria-hidden />
        {/* Cursor-tracked glow */}
        <div className="portal-glow pointer-events-none absolute inset-0 rounded-2xl" aria-hidden />
        {/* Diagonal sweep on hover */}
        <div className="portal-sweep pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden />

        {/* Content */}
        <div className="relative flex flex-col gap-6 rounded-2xl bg-white/[0.03] p-6 backdrop-blur-xl md:p-7">
          <div className="flex items-start gap-4">
            <div
              className={`portal-disc bg-gradient-to-br ${portal.disc}`}
              aria-hidden
            >
              <Icon className="h-6 w-6 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
            </div>
            <div className="flex-1">
              <p className="text-[10.5px] font-medium uppercase tracking-[0.24em] text-white/45">
                {portal.eyebrow}
              </p>
              <h2 className="mt-1.5 font-sans text-[1.35rem] font-semibold tracking-tight text-white">
                {portal.title}
              </h2>
            </div>
            <ArrowUpRight className="h-5 w-5 text-white/35 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/90" />
          </div>
          <p className="text-[13.5px] leading-[1.7] text-white/60">
            {portal.description}
          </p>
        </div>
      </div>
    </a>
  )
}
