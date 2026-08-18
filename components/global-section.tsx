"use client"

import { useReveal, RevealProvider, RevealItem } from "@/components/reveal"

const GEO = [
  { city: "Bangalore, India", org: "NH Care · 4 verticals", detail: "3.67M installs, 50+ cross-functional team across eng, design, QA, ops." },
  { city: "Cayman Islands", org: "HCCI · On-ground", detail: "80% process automation, digital payments from near-zero to $50K+/month." },
  { city: "US & Cayman", org: "One Health · 4 portals", detail: "10,000+ members, 100+ employers, 75 facilities, 50+ US providers." },
  { city: "Singapore", org: "Kampd · Growth", detail: "67% DAU growth, partnerships with TiE Global Summit and Singapore FinTech Festival." },
  { city: "Greece", org: "Underway", detail: "New chapter taking shape — more soon." },
]

export function GlobalSection() {
  const [ref, revealed] = useReveal<HTMLDivElement>()

  return (
    <section
      id="global"
      className="relative overflow-hidden bg-[oklch(0.19_0.07_300)] px-6 py-[140px] md:px-12"
    >
      <div
        className="animate-orb-float pointer-events-none absolute h-[380px] w-[380px]"
        style={{ top: "-80px", left: "-100px" }}
      >
        <div
          className="h-full w-full rounded-full blur-[45px]"
          style={{
            background:
              "radial-gradient(circle, oklch(0.62 0.12 264 / 0.25), transparent 70%)",
          }}
        />
      </div>

      <div className="relative">
        <div className="mb-4 font-mono text-[13px] tracking-[0.14em] text-[oklch(0.62_0.12_264)]">
          0→1 ACROSS BORDERS
        </div>
        <h2
          className="mb-[18px] font-sans font-extrabold"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          Five geographies, one playbook
        </h2>
        <p className="mb-16 max-w-[640px] font-sans text-[1.05rem] leading-[1.6] text-[oklch(0.78_0.03_300)]">
          Scoped products from scratch in foreign markets: 150+ user
          interviews across 10+ nationalities, on the ground in Bangalore,
          the Cayman Islands, and the US.
        </p>
      </div>

      <div ref={ref} className="relative">
        <div
          className="absolute top-2 hidden h-px overflow-visible md:block"
          style={{
            left: "calc(10% - 9.6px)",
            right: "calc(10% - 9.6px)",
            background: "oklch(0.62 0.12 264 / 0.4)",
            transform: revealed ? "scaleX(1)" : "scaleX(0)",
            transformOrigin: "left",
            transition: "transform 1100ms ease 200ms",
          }}
        >
          <div
            className="animate-travel-dot absolute top-[-3px] h-[7px] w-[7px] rounded-full"
            style={{
              background: "oklch(0.72 0.19 350)",
              boxShadow: "0 0 10px 2px oklch(0.72 0.19 350 / 0.7)",
            }}
          />
        </div>
        <div className="grid grid-cols-2 gap-7 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          <RevealProvider revealed={revealed}>
            {GEO.map((place, idx) => (
              <RevealItem key={place.city} index={idx} className="text-left">
                <div
                  className="animate-dot-pulse mb-5 h-4 w-4 rounded-full md:mx-auto"
                  style={{ background: "oklch(0.62 0.12 264)" }}
                />
                <div className="mb-2 font-sans text-[1.2rem] font-bold">
                  {place.city}
                </div>
                <div className="mb-2.5 font-mono text-xs text-[oklch(0.62_0.12_264)]">
                  {place.org}
                </div>
                <div className="font-sans text-[0.92rem] leading-[1.55] text-[oklch(0.7_0.03_300)]">
                  {place.detail}
                </div>
              </RevealItem>
            ))}
          </RevealProvider>
        </div>
      </div>
    </section>
  )
}
