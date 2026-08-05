"use client"

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react"

const RevealContext = createContext(false)

export function useReveal<T extends HTMLElement>(): [RefObject<T | null>, boolean] {
  const ref = useRef<T | null>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return [ref, revealed]
}

export function RevealProvider({
  revealed,
  children,
}: {
  revealed: boolean
  children: ReactNode
}) {
  return (
    <RevealContext.Provider value={revealed}>{children}</RevealContext.Provider>
  )
}

export function RevealItem({
  children,
  index = 0,
  className = "",
}: {
  children: ReactNode
  index?: number
  className?: string
}) {
  const revealed = useContext(RevealContext)
  return (
    <div
      className={`reveal ${revealed ? "is-revealed" : ""} ${className}`}
      style={{ ["--reveal-delay" as string]: `${index * 90}ms` }}
    >
      {children}
    </div>
  )
}
