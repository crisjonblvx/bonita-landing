import type { Metadata } from "next"
import { ButterflyIcon } from "@/components/butterfly-icon"
import { SiteHeader } from "@/components/site-header"
import { PricingCards } from "@/components/pricing-cards"
import { CreditExplainer } from "@/components/credit-explainer"
import { PricingFaq } from "@/components/pricing-faq"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Pricing — heyBonita.ai",
  description: "Fair pricing. Real value. Credits that make sense. No gotchas.",
}

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-4xl px-6 pb-8 pt-20 text-center sm:pt-28">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <ButterflyIcon className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium tracking-wide text-primary uppercase">
                Pricing
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Fair pricing.{" "}
              <span className="text-primary">Real value.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
              Credits that make sense. No gotchas.
            </p>
          </div>
        </section>

        <PricingCards />
        <CreditExplainer />
        <PricingFaq />
      </main>
      <SiteFooter />
    </>
  )
}
