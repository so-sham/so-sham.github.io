"use client"

import { useState } from "react"
import { useReveal, RevealProvider, RevealItem } from "@/components/reveal"

const ACCENT1 = "oklch(0.72 0.19 350)"
const ACCENT2 = "oklch(0.62 0.12 264)"

const TIMELINE = [
  {
    period: "Jul 2023 – Present",
    role: "Product Manager",
    org: "Narayana Health, Bangalore",
    color: ACCENT1,
    bullets: [
      "Built the guided service journey (0→1) — Pay Online revenue grew from ₹40L to ₹13.3Cr/month.",
      "Shipped Pulse AI report intelligence: OCR ingestion plus LLM analysis producing plain-language summaries.",
      "Introduced Mixpanel org-wide — event tracking, funnels, retention analysis across records, bookings, subscriptions.",
    ],
  },
  {
    period: "Jul 2023 – Present",
    role: "HCCI — Cayman Islands App & Portal",
    org: "On-ground, Cayman Islands",
    color: ACCENT2,
    bullets: [
      "Originated passkey authentication after spotting SIM/number recycling was breaking account security.",
      "Delivered digital registration, payments, checkups & OTP login — 80% process automation.",
      "Improved login success from 60% to 93–95%, driving 41–65% appointment growth.",
    ],
  },
  {
    period: "Jul 2023 – Present",
    role: "Product Owner, One Health Cayman",
    org: "4-Portal Operations Platform, US & Cayman",
    color: ACCENT1,
    bullets: [
      "Own strategy, workflows, and execution across 4 portals serving 10,000+ members and 100+ employers.",
      "Led VBA and athenahealth integrations automating eligibility, claims, and policy operations.",
      "Scoped the product from scratch: 50+ interviews across American, Caymanian, and European demographics.",
    ],
  },
  {
    period: "Apr 2022 – Jul 2025",
    role: "Product & Growth",
    org: "The Product Folks, Bangalore",
    color: ACCENT2,
    bullets: [
      "Built the AI PM Interview Simulator (0→1) — LLM-powered mock interview tool, adopted across the PM community.",
      "Drove 2× community growth; led GTM for Insurjo (35K registrations) and Ally Product (#2 Product Hunt).",
    ],
  },
  {
    period: "Dec 2025 – Present",
    role: "Independent AI Product Builder",
    org: "sosham.me",
    color: ACCENT1,
    bullets: [
      "AI Nutrition + Workout Planners: LLM-powered meal plans and training programs.",
      "Owned problem discovery, UX, prompt engineering, API integration, and deployment.",
    ],
  },
  {
    period: "Aug 2025 – Feb 2026",
    role: "AI & Operations",
    org: "Xthrive Gym, Bangalore",
    color: ACCENT2,
    bullets: [
      "Built AI fitness reports for 70 paying members — Claude API + ReportLab pipeline.",
      "Streamlined the member onboarding workflow, cutting manual steps for staff.",
    ],
  },
  {
    period: "Jul 2022 – Jul 2023",
    role: "Growth Manager",
    org: "Kampd, Singapore",
    color: ACCENT1,
    bullets: [
      "Grew DAU engagement by 67% through partnerships with TiE Global Summit and Singapore FinTech Festival.",
      "Optimized the Soapbox feature: 30% higher satisfaction, 25% lower churn.",
    ],
  },
]

export function TimelineSection() {
  const [ref, revealed] = useReveal<HTMLDivElement>()
  const [expanded, setExpanded] = useState<Record<number, boolean>>({})

  const toggle = (idx: number) =>
    setExpanded((prev) => ({ ...prev, [idx]: !prev[idx] }))

  return (
    <section
      id="timeline"
      className="relative overflow-hidden bg-[oklch(0.19_0.07_300)] px-6 py-[140px] md:px-12"
    >
      <div
        className="animate-orb-float pointer-events-none absolute h-[340px] w-[340px]"
        style={{ top: "40%", right: "-100px" }}
      >
        <div
          className="h-full w-full rounded-full blur-[45px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.62 0.12 264 / 0.2), transparent 70%)",
          }}
        />
      </div>

      <div className="relative">
        <div className="mb-4 font-mono text-[13px] tracking-[0.14em] text-[oklch(0.62_0.12_264)]">
          PATH SO FAR
        </div>
        <h2
          className="mb-16 font-sans font-extrabold"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          The journey so far
        </h2>
      </div>

      <div ref={ref} className="relative max-w-[800px] pl-8">
        <div
          className="absolute bottom-1.5 top-1.5 w-px"
          style={{ left: "5px", background: "oklch(1 0 0 / 0.12)" }}
        />
        <RevealProvider revealed={revealed}>
          {TIMELINE.map((role, idx) => {
            const isExpanded = !!expanded[idx]
            return (
              <RevealItem key={role.role + idx} index={idx} className="relative mb-6">
                <div
                  className="absolute top-1.5 h-3 w-3 rounded-full"
                  style={{ left: "-32px", background: role.color }}
                />
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full cursor-pointer items-start justify-between gap-4 bg-transparent text-left"
                >
                  <div>
                    <div
                      className="mb-2 font-mono text-xs tracking-[0.06em]"
                      style={{ color: role.color }}
                    >
                      {role.period}
                    </div>
                    <h3 className="mb-1 font-sans text-[1.3rem] font-bold">
                      {role.role}
                    </h3>
                    <div className="font-sans text-[0.92rem] text-[oklch(0.68_0.03_300)]">
                      {role.org}
                    </div>
                  </div>
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-lg"
                    style={{ color: role.color, borderColor: role.color }}
                  >
                    {isExpanded ? "−" : "+"}
                  </span>
                </button>
                {isExpanded && (
                  <ul className="mt-4 list-disc pl-5 font-sans text-[0.94rem] leading-[1.7] text-[oklch(0.78_0.03_300)]">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </RevealItem>
            )
          })}
          <RevealItem
            index={TIMELINE.length}
            className="relative font-sans text-[0.88rem] leading-[1.6] text-[oklch(0.6_0.03_300)]"
          >
            <div
              className="absolute top-1.5 h-3 w-3 rounded-full"
              style={{ left: "-32px", background: "oklch(0.55 0.03 300)" }}
            />
            B.E. Civil Engineering, Sir M. Visvesvaraya Institute of
            Technology (2018–2022) · Chief Product Operations Officer,
            AIESEC — led a 60-member international team to 50% market share
            growth.
          </RevealItem>
        </RevealProvider>
      </div>
    </section>
  )
}
