import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButterflyIcon } from "@/components/butterfly-icon";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <div className="mb-8 flex items-center gap-3">
            <ButterflyIcon className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">About Bonita</h1>
          </div>

          <div className="prose prose-lg dark:prose-invert">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bonita is an AI assistant built different — grounded in cultural intelligence, 
              clarity, and care.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-foreground">Why Bonita Exists</h2>
            <p className="text-muted-foreground leading-relaxed">
              Most AI assistants are built to sound impressive. Bonita is built to be helpful. 
              There&apos;s a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We believe AI should meet you where you are — understanding context, respecting 
              your intelligence, and speaking with the warmth of someone who actually cares 
              about getting it right.
            </p>

            <h2 className="mt-12 text-2xl font-semibold text-foreground">Our Values</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>
                <strong className="text-foreground">Clarity over cleverness.</strong> Real answers 
                that respect your intelligence. No impressive-sounding fluff.
              </li>
              <li>
                <strong className="text-foreground">Culturally grounded.</strong> Built with context 
                that understands your experience — not just your words.
              </li>
              <li>
                <strong className="text-foreground">Dignity in creation.</strong> When we help you 
                create, we honor the people involved.
              </li>
            </ul>

            <h2 className="mt-12 text-2xl font-semibold text-foreground">Built By</h2>
            <p className="text-muted-foreground leading-relaxed">
              Bonita is created by{" "}
              <a 
                href="https://contentcreators.life" 
                className="text-primary hover:underline"
              >
                ContentCreators.life
              </a>
              , a studio dedicated to building tools that empower creators with 
              intelligence and integrity.
            </p>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
