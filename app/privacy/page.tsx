import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />

      <main className="flex-1 px-6 py-16">
        <article className="mx-auto max-w-3xl">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Privacy Policy</h1>
          <p className="mb-12 text-sm text-muted-foreground">
            Last updated: February 2026
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Your Privacy Matters
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                At ContentCreators.life, we believe your data is yours. This Privacy
                Policy explains how we collect, use, and protect your information when
                you use heyBonita.ai (&ldquo;the Service&rdquo;).
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                What We Collect
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Account Information:</strong>{" "}
                  Email address and name when you create an account through Google or
                  Apple sign-in.
                </li>
                <li>
                  <strong className="text-foreground">Conversation Data:</strong>{" "}
                  Messages you exchange with Bonita, which are necessary to provide the
                  Service and improve your experience.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> How you
                  interact with the Service, including features used, timestamps, and
                  credit consumption.
                </li>
                <li>
                  <strong className="text-foreground">Payment Information:</strong> If
                  you subscribe to a paid plan, payment processing is handled by our
                  third-party provider (Stripe). We do not store your full credit card
                  details.
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                What We Don&apos;t Do
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✕</span>
                  <span>
                    <strong className="text-foreground">
                      We don&apos;t use your conversations to train AI models.
                    </strong>{" "}
                    Your chats are yours. We don&apos;t feed them into training
                    datasets without your explicit consent.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✕</span>
                  <span>We don&apos;t sell your personal information to third parties.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-primary">✕</span>
                  <span>
                    We don&apos;t share your conversations with advertisers or data
                    brokers.
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Data Retention
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                We retain your conversation history so you can access it later. You can
                delete individual conversations or your entire account at any time. When
                you delete data, it&apos;s removed from our active systems within 30
                days and from backups within 90 days.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-foreground">Security</h2>
              <p className="leading-relaxed text-muted-foreground">
                We implement industry-standard security measures including encryption in
                transit (TLS) and at rest, regular security audits, and access controls.
                However, no method of transmission over the Internet is 100% secure, and
                we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="mb-4 text-xl font-semibold text-foreground">
                Your Rights
              </h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Access:</strong> Request a copy of
                  your personal data.
                </li>
                <li>
                  <strong className="text-foreground">Correction:</strong> Update or
                  correct inaccurate information.
                </li>
                <li>
                  <strong className="text-foreground">Deletion:</strong> Request
                  deletion of your account and associated data.
                </li>
                <li>
                  <strong className="text-foreground">Portability:</strong> Export your
                  conversation history.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="leading-relaxed text-muted-foreground">
                For privacy-related questions or to exercise your rights, contact us at{" "}
                <a
                  href="mailto:privacy@contentcreators.life"
                  className="text-primary hover:underline"
                >
                  privacy@contentcreators.life
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
