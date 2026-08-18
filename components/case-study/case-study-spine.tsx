"use client"

import { scrollToSection } from "@/lib/scroll-to-section"

export function CaseStudySpine({
  items,
  footerNote,
}: {
  items: { n: string; label: string; id: string }[]
  footerNote?: string
}) {
  return (
    <div className="sticky top-24 hidden self-start md:block">
      <nav className="space-y-3 border-l border-rule pl-5">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(item.id)
            }}
            className="nav-link block font-mono text-[11px] leading-[1.4] font-medium tracking-[0.05em] text-ink-55 uppercase"
          >
            <span className="text-ink-35">{item.n}</span> <span>{item.label}</span>
          </a>
        ))}
      </nav>
      {footerNote && <p className="mt-6 max-w-[180px] text-[12px] leading-[1.4] text-ink-35 italic">{footerNote}</p>}
    </div>
  )
}
