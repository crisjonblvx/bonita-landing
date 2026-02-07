import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h1 className="mb-8 text-3xl font-bold text-foreground">Privacy Policy</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <p className="text-sm">Last updated: February 2026</p>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Our Commitment</h2>
              <p className="leading-relaxed">
                At ContentCreators.life, we believe your data is yours. This Privacy Policy 
                explains how we collect, use, and protect your information when you use 
                heyBonita.ai.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Information We Collect</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>
                  <strong className="text-foreground">Account Information:</strong> Email address 
                  and name when you create an account.
                </li>
                <li>
                  <strong className="text-foreground">Conversation Data:</strong> Messages you 
                  exchange with Bonita to provide the Service.
                </li>
                <li>
                  <strong className="text-foreground">Usage Data:</strong> How you interact with 
                  the Service to improve your experience.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">How We Use Your Information</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>To provide and maintain the Service</li>
                <li>To improve and personalize your experience</li>
                <li>To communicate with you about updates and features</li>
                <li>To ensure the security of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">What We Don&apos;t Do</h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>We don&apos;t sell your personal information</li>
                <li>We don&apos;t share your conversations with third parties for advertising</li>
                <li>We don&apos;t use your data to train AI models without explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Data Security</h2>
              <p className="leading-relaxed">
                We implement industry-standard security measures to protect your information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Your Rights</h2>
              <p className="leading-relaxed">
                You have the right to access, correct, or delete your personal information. 
                You can also request a copy of your data or ask us to stop processing it.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-foreground">Contact Us</h2>
              <p className="leading-relaxed">
                For privacy-related questions or requests, contact us at{" "}
                <a href="mailto:privacy@contentcreators.life" className="text-primary hover:underline">
                  privacy@contentcreators.life
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
