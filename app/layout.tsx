import type React from "react"
import type { Metadata } from "next"
import { Archivo, Fragment_Mono } from "next/font/google"
import "./globals.css"

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
})

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  variable: "--font-fragment-mono",
  weight: ["400"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sham's digital home",
  description:
    "Good products solve problems. Great products change behaviour. I build both.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${fragmentMono.variable}`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' fontSize='75'>💜</text></svg>"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
