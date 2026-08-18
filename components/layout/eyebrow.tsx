import { cn } from "@/lib/cn"

export function Eyebrow({
  n,
  label,
  className,
}: {
  n: string
  label: string
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] leading-none font-medium tracking-[0.12em] text-ink-55 uppercase",
        className
      )}
    >
      <span className="text-accent-blue">{n}</span> / {label}
    </p>
  )
}
