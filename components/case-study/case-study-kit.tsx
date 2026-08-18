import type React from "react"
import { cn } from "@/lib/cn"

export function CsHeading({ n, id, children }: { n: string; id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 mb-5 flex items-baseline gap-3">
      <span className="font-mono text-[13px] font-medium text-ink-35">{n}</span>
      <span className="font-serif text-[24px] leading-[1.2] font-light text-ink">{children}</span>
    </h2>
  )
}

export function CsPara({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("mt-4 max-w-[565px] text-[16px] leading-[1.6] text-ink-80", className)}>{children}</p>
}

export function CsFigure({
  children,
  caption,
}: {
  children: React.ReactNode
  caption: React.ReactNode
}) {
  return (
    <figure className="my-8">
      {children}
      <figcaption className="mt-3 text-[13px] leading-[1.4] text-ink-55">{caption}</figcaption>
    </figure>
  )
}

export function CsBlockquote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="my-8 max-w-[565px] border-l-2 border-accent-blue pl-6 font-serif text-[20px] leading-[1.4] font-light text-ink italic">
      {children}
    </blockquote>
  )
}

export function CsStatRow({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <div className="my-8 grid grid-cols-2 gap-6 border-y border-rule-warm py-6 sm:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label}>
          <div className="font-mono text-[19px] leading-[1.2] font-medium text-ink">{s.value}</div>
          <div className="mt-1 text-[13px] leading-[1.4] text-ink-55">{s.label}</div>
        </div>
      ))}
    </div>
  )
}

export function CsTable({
  caption,
  columns,
  rows,
}: {
  caption?: string
  columns: string[]
  rows: React.ReactNode[][]
}) {
  return (
    <div className="my-8 max-w-[600px] overflow-x-auto border border-rule-warm">
      {caption && (
        <p className="border-b border-rule-warm bg-paper-tint px-4 py-2 font-mono text-[11px] tracking-[0.05em] text-ink-55 uppercase">
          {caption}
        </p>
      )}
      <table className="w-full border-collapse text-[14px]">
        <thead>
          <tr>
            {columns.map((c) => (
              <th
                key={c}
                className="border-b border-rule-warm px-4 py-2 text-left font-mono text-[10px] tracking-[0.05em] text-ink-55 uppercase"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-rule-warm last:border-b-0">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 align-top leading-[1.5] text-ink-80">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CsCallout({
  title,
  link,
  children,
}: {
  title: string
  link?: { label: string; href: string }
  children: React.ReactNode
}) {
  return (
    <div className="my-8 border border-rule-warm">
      <div className="flex items-center justify-between gap-4 border-b border-rule-warm bg-accent-blue px-5 py-3">
        <p className="font-mono text-[12px] font-medium tracking-[0.05em] text-paper uppercase">{title}</p>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener"
            className="font-mono text-[11px] tracking-[0.05em] text-paper underline underline-offset-2"
          >
            {link.label}
          </a>
        )}
      </div>
      <div className="p-5">{children}</div>
    </div>
  )
}

export function CsOrderedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="my-4 max-w-[565px] list-decimal space-y-2 pl-5 text-[16px] leading-[1.6] text-ink-80">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  )
}
