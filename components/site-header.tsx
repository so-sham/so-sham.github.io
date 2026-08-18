"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/cn"
import { scrollToSection } from "@/lib/scroll-to-section"

const SECTION_LINKS = [
  { n: "01", label: "Statement", id: "sec-statement" },
  { n: "02", label: "Journey", id: "sec-journey" },
  { n: "03", label: "Work", id: "sec-work" },
  { n: "04", label: "Outside the job", id: "sec-outside-job" },
  { n: "05", label: "Contact", id: "sec-contact" },
] as const

const CV_HREF = "/assets/Shamitha-Gowda-Resume.pdf"

export function SiteHeader() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [progressPct, setProgressPct] = useState(0)
  const rafPending = useRef(false)

  useEffect(() => {
    const onScroll = () => {
      if (rafPending.current) return
      rafPending.current = true
      window.requestAnimationFrame(() => {
        rafPending.current = false
        const max = document.documentElement.scrollHeight - window.innerHeight
        const next = max > 40 ? Math.min(100, (window.scrollY / max) * 100) : 0
        setProgressPct((prev) => (Math.abs(next - prev) > 0.4 ? next : prev))
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  function handleSectionClick(e: React.MouseEvent, id: string) {
    if (isHome) {
      e.preventDefault()
      scrollToSection(id)
    }
    // else: let the Link navigate to `/#id` — the home page picks up the hash on mount
  }

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[60] h-0.5 bg-accent-blue transition-[width] duration-100"
        style={{ width: `${progressPct}%` }}
      />
      <header
        data-site-header
        className="sticky top-0 z-50 border-b border-rule bg-paper/93 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1180px] items-baseline justify-between gap-6 px-10 py-[18px]">
          <Link
            href="/"
            className="font-serif text-[19px] leading-none tracking-[-0.01em] text-ink"
          >
            Shamitha Gowda
          </Link>
          <nav className="flex flex-wrap justify-end gap-x-6 gap-y-2 font-mono text-[11px] leading-[1.4] font-medium tracking-[0.1em] uppercase">
            {SECTION_LINKS.map(({ n, label, id }) => (
              <Link
                key={id}
                href={`/#${id}`}
                onClick={(e) => handleSectionClick(e, id)}
                className="nav-link"
              >
                <span className="text-ink-35">{n}</span> <span className="text-ink">{label}</span>
              </Link>
            ))}
            <Link
              href="/about"
              className={cn(
                "nav-link border-b-2 pb-0.5 text-ink",
                pathname === "/about" ? "border-accent-blue" : "border-transparent"
              )}
            >
              About
            </Link>
            <a
              href={CV_HREF}
              download="Shamitha-Gowda-Resume.pdf"
              className="nav-link border-b border-accent-blue-tint pb-0.5 text-accent-blue"
            >
              CV ↓
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
