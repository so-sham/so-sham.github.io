import type React from "react"
import { cn } from "@/lib/cn"

export function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={cn("mx-auto max-w-[1180px] px-10", className)}>
      {children}
    </div>
  )
}
