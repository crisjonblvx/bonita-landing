import { HeroSection } from "@/components/hero-section"
import { ValueProps } from "@/components/value-props"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <main>
        <HeroSection />
        <ValueProps />
      </main>
      <SiteFooter />
    </>
  )
}
