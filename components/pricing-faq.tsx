"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What happens when I run out of credits?",
    answer:
      "When your credits are used up, you can still access your conversation history and saved content. To continue generating new messages or images, you can either wait for your monthly refresh or upgrade to a higher plan with more credits.",
  },
  {
    question: "Can I upgrade or downgrade anytime?",
    answer:
      "Absolutely. You can change your plan at any time. When upgrading, you'll get immediate access to additional credits. When downgrading, the change takes effect at the start of your next billing cycle.",
  },
  {
    question: "How does student verification work?",
    answer:
      "Simply sign up with a valid .edu email address. We'll send a verification link to confirm your student status. Once verified, you'll automatically receive 500 credits per month at no cost. Verification is renewed annually.",
  },
  {
    question: "Is my data used to train AI?",
    answer:
      "No. Your conversations, images, and personal data are never used to train AI models. Bonita is built on a foundation of dignity and respect — that includes how we handle your information. See our Privacy Policy for full details.",
  },
]

export function PricingFaq() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl text-balance">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-border/50"
            >
              <AccordionTrigger className="text-left text-base font-medium text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
