"use client"

import { useState } from "react"
import Link from "next/link"
import { Eyebrow } from "@/components/layout/eyebrow"
import { Section } from "@/components/layout/section"
import { Media, FillImg } from "@/components/layout/media"
import { Reveal } from "@/components/reveal"
import { StatTile } from "@/components/layout/stat-tile"
import { AutoVideo } from "@/components/media/auto-video"
import { cn } from "@/lib/cn"

type Tab = "books" | "fitness" | "dance"

const TABS: { id: Tab; label: string }[] = [
  { id: "books", label: "Books" },
  { id: "fitness", label: "Fitness" },
  { id: "dance", label: "Dance" },
]

const BOOKS = [
  {
    src: "/assets/img/cover-sapiens.webp",
    title: "Sapiens",
    take: "Humans became powerful because we can cooperate around things that exist only in our collective imagination — money, religion, brands.",
  },
  {
    src: "/assets/img/cover-palace.webp",
    title: "The Palace of Illusions",
    take: "The Mahabharata from Draupadi's point of view. The one-dimensional women of the myths turn out to be complex humans.",
  },
  {
    src: "/assets/img/cover-coffee.webp",
    title: "Before the Coffee Gets Cold",
    take: "A small café in Japan where you can time travel. Everyone regrets; everyone wants to go back just to feel the same thing again.",
  },
]

export function OutsideWork() {
  const [tab, setTab] = useState<Tab>("books")

  return (
    <Section id="sec-outside-work" band>
      <Reveal className="mb-14 flex items-baseline justify-between gap-6">
        <Eyebrow n="08" label="Outside work" />
        <Link href="/about" className="link shrink-0 font-mono text-[11px] font-medium tracking-[0.1em] uppercase">
          More on the about page →
        </Link>
      </Reveal>

      <div className="grid gap-10 md:grid-cols-[180px_1fr]">
        <Reveal>
          <div className="flex flex-row gap-4 md:flex-col md:gap-0">
            {TABS.map((t) => {
              const active = t.id === tab
              return (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    "border-l-2 py-2 pl-4 text-left font-mono text-[11px] font-medium tracking-[0.1em] uppercase transition-colors",
                    active ? "border-rust text-ink" : "border-rule-warm text-ink-35"
                  )}
                >
                  {t.label}
                </button>
              )
            })}
          </div>
          <p className="mt-6 hidden max-w-[160px] text-[13px] leading-[1.5] text-ink-55 md:block">
            Three things that keep the product instinct honest.
          </p>
        </Reveal>

        <div key={tab} className="fade-up">
          {tab === "fitness" && (
            <div className="grid gap-10 md:grid-cols-2">
              <Media ratio="3/2" className="bg-[#111]">
                <AutoVideo src="/assets/video/fitness-clip.mp4" poster="/assets/video/fitness-clip-poster.webp" rate={1.5} />
              </Media>
              <div>
                <p className="font-mono text-[11px] tracking-[0.08em] text-ink-55 uppercase">
                  Pursuing CASM · 5–6 years
                </p>
                <p className="mt-4 text-[16px] leading-[1.6] text-ink-80">
                  I have been into fitness for five or six years. I got into it more seriously{" "}
                  <span className="em-underline">during grief after my father&rsquo;s death</span>,
                  and since coming out of that I have been trying to keep it up in a non-stress
                  environment. Six months working as a fitness coach, and I&rsquo;m currently
                  working through the CASM coursework that&rsquo;s teaching me most of what I know.
                </p>
                <p className="mt-3 text-[16px] leading-[1.6] text-ink-80">
                  It is also where the AI reports came from — the coaching problem arrived first,
                  the product second.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-rule-warm pt-5">
                  <StatTile value="5–6 yrs" label="Training" />
                  <StatTile value="6 mo" label="As a coach" />
                  <StatTile value="CASM" label="In progress" />
                </div>
              </div>
            </div>
          )}

          {tab === "dance" && (
            <div className="grid gap-10 md:grid-cols-2">
              <Media ratio="3/2" className="bg-paper-tint">
                <FillImg
                  src="/assets/img/dance-collage-home.webp"
                  alt="Bharatanatyam and folk performances — on stage and backstage"
                />
              </Media>
              <div>
                <p className="font-mono text-[11px] tracking-[0.08em] text-ink-55 uppercase">
                  Bharatanatyam · certified senior dancer
                </p>
                <p className="mt-4 text-[16px] leading-[1.6] text-ink-80">
                  <span className="em-underline">They say art speaks louder than words</span>. I
                  was a Bharatanatyam dancer for about ten years — multiple performances, awards,
                  three exams, certified as a senior dancer.
                </p>
                <p className="mt-3 text-[16px] leading-[1.6] text-ink-80">
                  I hit a pause after my college era and always yearn to restart. The discipline and
                  the creativity it brought stay with you.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 border-t border-rule-warm pt-5">
                  <StatTile value="~10 yrs" label="Trained" />
                  <StatTile value="3" label="Exams passed" />
                  <StatTile value="Senior" label="Certified level" />
                </div>
              </div>
            </div>
          )}

          {tab === "books" && (
            <div className="grid gap-10 md:grid-cols-[0.42fr_1.58fr]">
              <Media ratio="3/4" className="bg-paper-tint">
                <FillImg src="/assets/img/books-library-collage.webp" alt="My shelves, and reading at a café" />
              </Media>
              <div>
                <p className="text-[16px] leading-[1.6] text-ink-80">
                  Reading so many books growing up shaped me as a person. The superpower it gave me
                  is{" "}
                  <span className="em-underline">
                    being able to put myself in someone else&rsquo;s shoes
                  </span>{" "}
                  — read enough points of view and empathy stops being effort.
                </p>
                <div className="mt-6 space-y-5">
                  {BOOKS.map((book) => (
                    <div key={book.title} className="flex gap-4">
                      <Media ratio="2/3" className="w-[70px] shrink-0 bg-paper-tint">
                        <FillImg src={book.src} alt={`${book.title} cover`} />
                      </Media>
                      <div>
                        <h4 className="font-serif text-[16px] font-normal text-ink">{book.title}</h4>
                        <p className="mt-1 text-[14px] leading-[1.55] text-ink-80">{book.take}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/about" className="link mt-6 inline-block text-[14px] font-medium">
                  The full list →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  )
}
