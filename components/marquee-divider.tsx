const SPEED_CLASS = {
  fast: "animate-marquee",
  reverse: "animate-marquee-reverse",
  slow: "animate-marquee-slow",
} as const

export function MarqueeDivider({
  text,
  color,
  speed = "fast",
  tilt = "-1deg",
}: {
  text: string
  color: string
  speed?: keyof typeof SPEED_CLASS
  tilt?: string
}) {
  return (
    <div
      className="relative z-[2] my-[-12px] overflow-hidden border-y border-white/[0.08] bg-[oklch(0.16_0.06_300)] py-[18px]"
      style={{ transform: `rotate(${tilt})` }}
    >
      <div className={`flex w-max gap-10 ${SPEED_CLASS[speed]}`}>
        <span
          className="whitespace-nowrap font-mono text-sm tracking-[0.1em]"
          style={{ color }}
        >
          {text}
        </span>
        <span
          aria-hidden
          className="whitespace-nowrap font-mono text-sm tracking-[0.1em]"
          style={{ color }}
        >
          {text}
        </span>
      </div>
    </div>
  )
}
