import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function CheckIcon() {
  return (
    <svg className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

const tiers = [
  {
    name: "Free",
    price: "$0",
    description: "Start here",
    features: [
      "100 credits/month",
      "Basic chat",
      "Standard response times",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Scholar",
    price: "$0",
    description: "For students",
    badge: "🎓 .edu required",
    note: "Bonita believes in your future",
    features: [
      "500 credits/month",
      "Priority queue",
      "Student resources",
    ],
    cta: "Verify Student Email",
    highlight: false,
    accent: "emerald",
  },
  {
    name: "Pro",
    price: "$25",
    period: "/mo",
    description: "For serious users",
    features: [
      "1,000 credits/month",
      "Unlimited voice (when available)",
      "Faster responses",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Studio",
    price: "$50",
    period: "/mo",
    description: "For power builders",
    features: [
      "5,000 credits/month",
      "Unlimited image generation",
      "Extended context memory",
      "Early access to new features",
    ],
    cta: "Upgrade to Studio",
    highlight: false,
  },
];

const creditExplainer = [
  { action: "Chat message", credits: "~1 credit" },
  { action: "Image generation", credits: "25-50 credits" },
  { action: "Voice conversation", credits: "~5 credits/minute" },
];

const faqs = [
  {
    question: "What happens when I run out of credits?",
    answer:
      "You can continue using Bonita with slower response times, or upgrade your plan for more credits. Your conversations and history are never deleted.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer:
      "Yes! You can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, you'll keep your current tier until the billing period ends.",
  },
  {
    question: "How does student verification work?",
    answer:
      "Sign up with a valid .edu email address. We'll send a verification link. Once verified, you'll automatically be upgraded to the Scholar tier.",
  },
  {
    question: "Is my data used to train AI?",
    answer:
      "No. Your conversations are yours. We don't use your data to train AI models without explicit consent. See our Privacy Policy for details.",
  },
];

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Fair pricing. Real value.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Credits that make sense. No gotchas.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="mx-auto max-w-6xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  tier.highlight
                    ? "border-primary bg-primary/5 ring-2 ring-primary"
                    : "border-border bg-card"
                }`}
              >
                {tier.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}

                <div className="mb-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {tier.name}
                    </h3>
                    {tier.accent === "emerald" && (
                      <GraduationCapIcon />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>

                <div className="mb-4">
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-muted-foreground">{tier.period}</span>
                  )}
                </div>

                {tier.badge && (
                  <span className={`mb-2 inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-medium ${
                    tier.accent === "emerald"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-primary/10 text-primary"
                  }`}>
                    {tier.badge}
                  </span>
                )}

                {tier.note && (
                  <p className="mb-4 text-xs italic text-muted-foreground">
                    {tier.note}
                  </p>
                )}

                <ul className="mb-6 flex-1 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <CheckIcon />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full rounded-lg py-3 text-sm font-semibold transition-all ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : tier.accent === "emerald"
                      ? "bg-emerald-500 text-white hover:bg-emerald-600"
                      : "border border-border bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Credit Explainer */}
        <section className="border-t border-border bg-card/50 px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              How credits work
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {creditExplainer.map((item) => (
                <div
                  key={item.action}
                  className="rounded-xl border border-border bg-card p-4 text-center"
                >
                  <p className="text-sm text-muted-foreground">{item.action}</p>
                  <p className="mt-1 text-xl font-semibold text-foreground">
                    {item.credits}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              Credits refresh monthly. Unused credits don&apos;t roll over.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-xl border border-border bg-card"
                >
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-foreground">
                    <span className="font-medium">{faq.question}</span>
                    <svg
                      className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-4 text-sm text-muted-foreground">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
