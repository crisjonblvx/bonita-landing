import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "Free",
    price: "$0",
    period: "",
    tagline: "Start here",
    features: [
      "100 credits/month",
      "Basic chat",
      "Standard response times",
    ],
    cta: "Get Started",
    highlight: false,
    accent: "default" as const,
  },
  {
    name: "Scholar",
    price: "$0",
    period: "",
    tagline: "For students",
    badge: ".edu required",
    note: "Bonita believes in your future",
    features: [
      "500 credits/month",
      "Full chat access",
      "Standard response times",
    ],
    cta: "Verify Student Email",
    highlight: false,
    accent: "scholar" as const,
  },
  {
    name: "Pro",
    price: "$25",
    period: "/mo",
    tagline: "For serious users",
    features: [
      "1,000 credits/month",
      "Unlimited voice (when available)",
      "Faster responses",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
    accent: "pro" as const,
  },
  {
    name: "Studio",
    price: "$50",
    period: "/mo",
    tagline: "For power builders",
    features: [
      "5,000 credits/month",
      "Unlimited image generation",
      "Extended context memory",
      "Early access to new features",
    ],
    cta: "Upgrade to Studio",
    highlight: false,
    accent: "default" as const,
  },
]

function CheckIcon() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

export function PricingCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
              tier.highlight
                ? "ring-2 ring-primary shadow-lg shadow-primary/10"
                : "border-border/60"
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground px-3 py-0.5 text-xs font-medium">
                  Most Popular
                </Badge>
              </div>
            )}

            <CardHeader className="pb-4">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">{tier.name}</CardTitle>
                {tier.accent === "scholar" && (
                  <span className="text-lg" role="img" aria-label="graduation cap">
                    {"🎓"}
                  </span>
                )}
              </div>
              <CardDescription>{tier.tagline}</CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                {tier.period && (
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                )}
                {tier.accent === "scholar" && (
                  <p className="mt-1 text-xs text-muted-foreground">requires .edu email</p>
                )}
              </div>

              <ul className="flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-foreground/80">
                    <span className={tier.highlight ? "text-primary" : tier.accent === "scholar" ? "text-emerald-500" : "text-muted-foreground"}>
                      <CheckIcon />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              {tier.note && (
                <p className="mt-4 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs text-emerald-600 dark:text-emerald-400 italic">
                  {tier.note}
                </p>
              )}
            </CardContent>

            <CardFooter>
              <button
                className={`w-full rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  tier.highlight
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                    : tier.accent === "scholar"
                      ? "border border-emerald-500/40 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-400"
                      : "border border-border bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {tier.cta}
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
