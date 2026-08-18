export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-mono text-[17px] leading-[1.2] font-medium text-ink">{value}</div>
      <div className="mt-1 text-[13px] leading-[1.4] text-ink-55">{label}</div>
    </div>
  )
}
