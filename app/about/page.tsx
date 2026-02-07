import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButterflyIcon } from "@/components/butterfly-icon";

function HeartIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function GraduationCapIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
      <path d="M22 10v6" />
      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
    </svg>
  );
}

function PaletteIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const differentiators = [
  {
    icon: HeartIcon,
    title: "Culturally Grounded",
    description:
      "Bonita reasons with historical and cultural context by default, not as an add-on.",
  },
  {
    icon: GraduationCapIcon,
    title: "Student-First",
    description:
      ".edu users get priority credits because we believe in investing in futures.",
  },
  {
    icon: PaletteIcon,
    title: "Images with Dignity",
    description:
      "When you create, Bonita doesn't just generate — she considers who's being represented.",
  },
  {
    icon: UsersIcon,
    title: "The Board",
    description:
      "Behind every response is a council of perspectives — financial, emotional, creative, strategic — working together.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="px-6 py-20 text-center">
          <ButterflyIcon className="mx-auto mb-6 h-12 w-12 text-primary" />
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Why Bonita exists.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
            Not a corporate origin story. This is the Canon.
          </p>
        </section>

        {/* The Mission */}
        <section className="px-6 pb-16">
          <div className="mx-auto max-w-3xl">
            <blockquote className="rounded-2xl border border-primary/30 bg-primary/5 p-8">
              <p className="text-lg leading-relaxed text-foreground">
                &ldquo;Most AI is built to impress. Bonita is built to understand.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground">
                We created an assistant that doesn&apos;t flatten your experience into
                generic advice. One that knows context matters as much as correctness.
                One that treats your questions — and you — with dignity.
              </p>
              <div className="mt-6 space-y-2 text-foreground">
                <p className="font-medium">This is the ContentCreators Standard:</p>
                <ul className="ml-4 space-y-1 text-muted-foreground">
                  <li>• Clarity over cleverness.</li>
                  <li>• Trust over tricks.</li>
                  <li>• Your context, honored.&rdquo;</li>
                </ul>
              </div>
            </blockquote>
          </div>
        </section>

        {/* What Makes Bonita Different */}
        <section className="border-t border-border bg-card/50 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-2xl font-bold text-foreground">
              What makes Bonita different
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <item.icon />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who Built This */}
        <section className="px-6 py-16 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              Who built this
            </h2>
            <p className="text-lg text-muted-foreground">
              Built by{" "}
              <a
                href="https://contentcreators.life"
                className="text-primary hover:underline"
              >
                ContentCreators.life
              </a>
            </p>
            <p className="mt-2 text-muted-foreground">
              By people who&apos;ve been unseen by technology before.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
