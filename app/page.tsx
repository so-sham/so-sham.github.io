import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { HashScrollHandler } from "@/components/hash-scroll-handler"
import { Statement } from "@/components/sections/statement"
import { Journey } from "@/components/sections/journey"
import { Work } from "@/components/sections/work"
import { Shipped } from "@/components/sections/shipped"
import { Building } from "@/components/sections/building"
import { OutsideJob } from "@/components/sections/outside-job"
import { Me } from "@/components/sections/me"
import { OutsideWork } from "@/components/sections/outside-work"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <HashScrollHandler />
      <SiteHeader />
      <main>
        <Statement />
        <Journey />
        <Work />
        <Shipped />
        <Building />
        <OutsideJob />
        <Me />
        <OutsideWork />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
