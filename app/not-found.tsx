"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function NotFound() {
  useEffect(() => {
    window.location.replace("/")
  }, [])

  return (
    <main className="flex min-h-screen items-center justify-center bg-paper px-10">
      <p className="font-serif text-[19px] text-ink-55">
        Redirecting to{" "}
        <Link href="/" className="link">
          the home page
        </Link>
        …
      </p>
    </main>
  )
}
