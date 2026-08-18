import Link from "next/link"
import type React from "react"
import { Eyebrow } from "@/components/layout/eyebrow"

export function CaseStudyHero({
  eyebrow,
  backHref,
  backLabel,
  title,
  dek,
  status,
  metadata,
}: {
  eyebrow?: string
  backHref: string
  backLabel: string
  title: React.ReactNode
  dek: React.ReactNode
  status?: string
  metadata: { label: string; value: React.ReactNode }[]
}) {
  return (
    <div className="pt-[120px] pb-16">
      <Link href={backHref} className="link font-mono text-[11px] font-medium tracking-[0.1em] uppercase">
        {backLabel}
      </Link>
      {eyebrow && <Eyebrow n={eyebrow.split(" ")[0]} label={eyebrow.split(" ").slice(1).join(" ")} className="mt-6 mb-4" />}
      <h1 className="mt-4 max-w-[22ch] font-serif text-[clamp(34px,3.8vw,54px)] leading-[1.06] font-light tracking-[-0.022em] text-ink">
        {title}
      </h1>
      <p className="mt-5 max-w-[620px] font-serif text-[19px] leading-[1.5] font-light text-ink-55 italic">{dek}</p>
      {status && (
        <p className="mt-4 font-mono text-[12px] tracking-[0.08em] text-rust uppercase">{status}</p>
      )}
      <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4 border-t border-rule pt-8 sm:grid-cols-4">
        {metadata.map((m) => (
          <div key={m.label}>
            <dt className="font-mono text-[10px] tracking-[0.1em] text-ink-55 uppercase">{m.label}</dt>
            <dd className="mt-1 text-[14px] leading-[1.4] text-ink-80">{m.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
