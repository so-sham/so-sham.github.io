import { asset } from "@/lib/asset"
import { cn } from "@/lib/cn"

/** Horizontal marquee rail: the image set duplicated once, animated exactly
 * -50% so the loop is seamless (pkSlide keyframe in globals.css). */
export function PkMarquee({
  images,
  fast = false,
  className,
}: {
  images: { src: string; alt: string }[]
  fast?: boolean
  className?: string
}) {
  const doubled = [...images, ...images]

  return (
    <div className={cn("h-full overflow-hidden bg-white", className)}>
      <div className={cn("pk-track h-full", fast ? "pk-track--fast gap-3" : "gap-3.5")}>
        {doubled.map((img, i) => (
          <img
            key={i}
            src={asset(img.src)}
            alt={i < images.length ? img.alt : ""}
            aria-hidden={i >= images.length}
            loading="lazy"
            decoding="async"
            className="h-full w-auto border border-rule-warm"
          />
        ))}
      </div>
    </div>
  )
}
