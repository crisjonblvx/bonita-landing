import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="mb-8 text-3xl font-bold text-foreground">Terms of Service</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <p className="text-sm">Last updated: February 2026</p>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using heyBonita.ai (&quot;the Service&quot;), you agree to be bound by these 
                Terms of Service. If you do not agree to these terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">2. Description of Service</h2>
              <p className="leading-relaxed">
                Bonita is an AI-powered assistant that provides conversational support, creative 
                assistance, and information. The Service is provided &quot;as is&quot; and we make no 
                guarantees about the accuracy or completeness of AI-generated responses.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">3. User Responsibilities</h2>
              <p className="leading-relaxed">
                You agree to use the Service responsibly and not to use it for any illegal, 
                harmful, or abusive purposes. You are responsible for all content you submit 
                to the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">4. Intellectual Property</h2>
              <p className="leading-relaxed">
                The Service and its original content, features, and functionality are owned by 
                ContentCreators.life and are protected by international copyright, trademark, 
                and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">5. Limitation of Liability</h2>
              <p className="leading-relaxed">
                ContentCreators.life shall not be liable for any indirect, incidental, special, 
                consequential, or punitive damages resulting from your use of or inability to 
                use the Service.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">6. Changes to Terms</h2>
              <p className="leading-relaxed">
                We reserve the right to modify these terms at any time. We will notify users of 
                any material changes by posting the new Terms of Service on this page.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">7. Contact</h2>
              <p className="leading-relaxed">
                For questions about these Terms, please contact us at{" "}
                <a href="mailto:hello@contentcreators.life" className="text-primary hover:underline">
                  hello@contentcreators.life
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
