"use client"

import { useState } from "react"
import { cn } from "@/lib/cn"

type Tab = "identity" | "authentication" | "risk"

const TABS: { id: Tab; label: string }[] = [
  { id: "identity", label: "Identity" },
  { id: "authentication", label: "Authentication" },
  { id: "risk", label: "Risk" },
]

export function ProductMapTabs({ artifactHref }: { artifactHref: string }) {
  const [tab, setTab] = useState<Tab>("identity")

  return (
    <div className="my-8 max-w-[600px] border border-rule-warm">
      <div className="flex items-center justify-between gap-4 border-b border-rule-warm bg-accent-blue px-5 py-3">
        <p className="font-mono text-[12px] font-medium tracking-[0.05em] text-paper uppercase">The product map</p>
        <a
          href={artifactHref}
          target="_blank"
          rel="noopener"
          className="font-mono text-[11px] tracking-[0.05em] text-paper underline underline-offset-2"
        >
          Full artifact ↗
        </a>
      </div>

      <div className="flex border-b border-rule-warm">
        {TABS.map((t) => {
          const active = t.id === tab
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "border-b-2 px-5 py-3 font-mono text-[11px] font-medium tracking-[0.05em] uppercase transition-colors",
                active ? "border-accent-blue bg-paper-tint text-ink" : "border-transparent text-ink-55"
              )}
            >
              {t.label}
            </button>
          )
        })}
      </div>

      <div key={tab} className="fade-up p-5">
        {tab === "identity" && (
          <>
            <p className="text-[15px] leading-[1.55] text-ink-80">
              Who is this patient? One permanent record, with everything else hanging off it.
            </p>
            <MiniTable
              rows={[
                ["patient_id", "Permanent. What records belong to, and what a passkey is bound to."],
                ["Mobile · email", "Contact methods, replaceable, recyclable, sometimes shared."],
                ["Profiles", "Every family member keeps own patient_id, app shows selector."],
              ]}
            />
          </>
        )}
        {tab === "authentication" && (
          <>
            <p className="text-[15px] leading-[1.55] text-ink-80">
              Can they prove access? Three mechanisms, three separate jobs.
            </p>
            <MiniTable
              rows={[
                ["OTP", "Proves contact-method control, permanent, no deprecation date."],
                ["Layer 2", "Proves patient identity, name + DOB."],
                ["Passkey", "Trusted device access, one active passkey, new device revokes old."],
              ]}
            />
          </>
        )}
        {tab === "risk" && (
          <>
            <p className="text-[15px] leading-[1.55] text-ink-80">
              Should we ask for more proof right now? The state machine, written before the screens.
            </p>
            <MiniTable
              rows={[
                ["Known device / recent activity / same country", "Low risk, stay invisible."],
                ["New device / new country / long inactivity", "Layer 2."],
                ["Failed verification", "No record access, blank account."],
                ["Verified new device", "Create passkey, revoke old."],
                ["Portal session", "Never trusted, re-evaluated every session."],
              ]}
            />
          </>
        )}
      </div>
    </div>
  )
}

function MiniTable({ rows }: { rows: [string, string][] }) {
  return (
    <div className="mt-4 divide-y divide-rule-warm border-t border-rule-warm">
      {rows.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[1fr_1.6fr] gap-4 py-3">
          <p className="font-mono text-[11px] font-medium text-ink">{k}</p>
          <p className="text-[13px] leading-[1.5] text-ink-80">{v}</p>
        </div>
      ))}
    </div>
  )
}
