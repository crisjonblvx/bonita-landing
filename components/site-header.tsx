import Link from "next/link"
import { ButterflyIcon } from "@/components/butterfly-icon"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <span className="text-sm font-bold text-primary-foreground">B</span>
          </div>
          <span className="text-base font-semibold text-foreground">heyBonita.ai</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="/chat"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Try Bonita
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
