"use client"

import { useEffect, useRef } from "react"
import { asset } from "@/lib/asset"
import { cn } from "@/lib/cn"

type AutoVideoProps = {
  src: string
  poster?: string
  rate?: number
  loop?: boolean
  playlist?: string[]
  fit?: "cover" | "contain"
  className?: string
}

/**
 * Autoplaying, always-muted background video: plays while in view (±120px
 * viewport margin), pauses out of view, and — for the one 3-clip Cayman
 * playlist — advances to the next clip on `ended`. Mute/rate must be set
 * imperatively (framework-rendered boolean attributes don't reliably reach
 * the DOM element, and playbackRate resets whenever a new src loads).
 */
export function AutoVideo({
  src,
  poster,
  rate = 1,
  loop = true,
  playlist,
  fit = "cover",
  className,
}: AutoVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Resolved together so the `ended` handler below can still find the current
  // clip in the playlist by string identity — `src` and every `playlist` entry
  // must be fingerprinted the same way or `indexOf` stops matching.
  const srcUrl = asset(src)
  const posterUrl = poster ? asset(poster) : undefined
  const playlistUrls = playlist?.map((clip) => asset(clip))

  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const hasPlaylist = !!playlistUrls?.length

    const prime = () => {
      v.muted = true
      v.defaultMuted = true
      v.volume = 0
      v.loop = hasPlaylist ? false : loop
      v.playbackRate = rate
    }

    prime()

    const onLoadedData = () => prime()

    const onEnded = () => {
      if (!hasPlaylist || !playlistUrls) return
      const idx = Math.max(0, playlistUrls.indexOf(v.getAttribute("src") ?? ""))
      const next = playlistUrls[(idx + 1) % playlistUrls.length]
      v.src = next
      v.load()
      prime()
      v.play().catch(() => {})
    }

    v.addEventListener("loadeddata", onLoadedData)
    v.addEventListener("ended", onEnded)

    // The element ships with preload="none" and no `poster` attribute, so none
    // of the home page's six background clips pull bytes during the initial
    // load — that was ~205 KB of video metadata plus ~125 KB of poster frames
    // competing with the fonts and the hero image. This wider observer attaches
    // the poster and flips the clip to preload="auto" a long way (800px) before
    // it reaches the play threshold below, so both land well out of sight.
    const prewarm = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        if (posterUrl && !v.poster) v.poster = posterUrl
        if (v.preload !== "auto") {
          v.preload = "auto"
          v.load()
        }
        prewarm.disconnect()
      },
      { rootMargin: "800px 0px 800px 0px", threshold: 0 }
    )
    prewarm.observe(v)

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          prime()
          v.play().catch(() => {})
        } else {
          v.pause()
        }
      },
      { rootMargin: "120px 0px 120px 0px", threshold: 0 }
    )
    observer.observe(v)

    return () => {
      v.removeEventListener("loadeddata", onLoadedData)
      v.removeEventListener("ended", onEnded)
      prewarm.disconnect()
      observer.disconnect()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <video
      ref={videoRef}
      src={srcUrl}
      muted
      playsInline
      preload="none"
      className={cn(
        "absolute inset-0 h-full w-full",
        fit === "cover" ? "object-cover" : "object-contain",
        className
      )}
    />
  )
}
