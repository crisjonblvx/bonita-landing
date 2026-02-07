import Link from "next/link"
import { ButterflyIcon } from "@/components/butterfly-icon"

const links = [
  { label: "About", href: "#" },
  { label: "Pricing", href: "/pricing" },
  { label: "Privacy", href: "#" },
  { label: "Terms", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 bg-card">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 sm:flex-row sm:justify-between">
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ButterflyIcon className="h-4 w-4 text-primary/60" />
          <span className="text-xs text-muted-foreground">
            {"© 2026 ContentCreators.life"}
          </span>
        </div>
      </div>
    </footer>
  )
}
