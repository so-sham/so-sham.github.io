import { cn } from "@/lib/cn"

/** 11-page report flip: all pages stacked absolutely, each visible for ~8.2%
 * of a 16.5s loop via a staggered negative animation-delay (xrPage keyframe
 * in globals.css), so exactly one page shows at a time. */
export function XrFlip({
  images,
  alt,
  className,
}: {
  images: string[]
  alt: string
  className?: string
}) {
  const step = 16.5 / images.length

  return (
    <div className={cn("relative h-full w-full bg-paper-tint", className)}>
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={i === 0 ? alt : ""}
          className="xr-page h-full w-full object-contain"
          style={{ animationDelay: `-${(i * step).toFixed(2)}s` }}
        />
      ))}
    </div>
  )
}
