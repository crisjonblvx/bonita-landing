"use client"

import { ButterflyIcon } from "@/components/butterfly-icon"
import { ThemeToggle } from "@/components/theme-toggle"

function GoogleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Full background image — bokeh shines through */}
      <div className="absolute inset-0">
        <img
          src="/bonita-portrait.png"
          alt="Bonita"
          className="h-full w-full object-cover"
          style={{ objectPosition: "80% center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 via-[40%] to-transparent dark:from-[#0f172a]/95 dark:via-[#0f172a]/60 dark:via-[40%] dark:to-transparent" />
      </div>

      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">
        {/* Left panel — content with transparent backdrop */}
        <div className="flex flex-col justify-between px-6 py-8 backdrop-blur-sm sm:px-10 lg:px-14 lg:py-10">
          {/* Header */}
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground text-background">
                <span className="text-sm font-bold">B</span>
              </div>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                heyBonita.ai
              </span>
            </div>
            <ThemeToggle />
          </header>

          {/* Main content */}
          <div className="flex-1 flex flex-col justify-center py-10 lg:py-0">
            <div className="max-w-md">
              <div className="mb-6 flex items-center gap-2">
                <ButterflyIcon className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                  Welcome
                </span>
              </div>

              <h1 className="text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
                Built to see you clearly.
              </h1>

              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                An AI assistant grounded in cultural intelligence, clarity, and
                care. Not just answers — understanding.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3">
                <button
                  type="button"
                  className="group flex w-full items-center justify-between rounded-lg bg-primary px-5 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                >
                  <div className="flex items-center gap-3">
                    <GoogleIcon />
                    <span>Sign in with Google</span>
                  </div>
                  <ArrowRight />
                </button>

                <button
                  type="button"
                  className="group flex w-full items-center justify-between rounded-lg border border-border bg-card/50 px-5 py-3.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/80"
                >
                  <div className="flex items-center gap-3">
                    <AppleIcon />
                    <span>Sign in with Apple</span>
                  </div>
                  <ArrowRight />
                </button>
              </div>

              {/* Divider */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  or
                </span>
                <div className="h-px flex-1 bg-border" />
              </div>

              {/* Email / Password */}
              <div className="flex flex-col gap-3">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="Min. 8 characters"
                    className="w-full rounded-lg border border-border bg-card/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur-sm transition-colors focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                  />
                </div>
                <button
                  type="button"
                  className="mt-1 w-full rounded-lg bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
                >
                  Sign In
                </button>
                <p className="text-center text-sm text-muted-foreground">
                  {"New here? "}
                  <a
                    href="#"
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Create account
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Bottom left footer */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms & Privacy
            </a>
            <span className="text-border">/</span>
            <span>2026 heyBonita.ai</span>
          </div>
        </div>

        {/* Right panel — portrait visible through */}
        <div className="relative hidden lg:block">
          {/* LIVE indicator */}
          <div className="absolute right-6 top-6 z-20 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Live
            </span>
          </div>

          {/* Overlay text on image */}
          <div className="absolute bottom-10 left-10 z-20 max-w-sm">
            <h2 className="text-balance text-3xl font-bold leading-tight text-white">
              Raised on rhythm.
              <br />
              Built for clarity.
            </h2>
            <p className="mt-2 font-serif text-base italic text-amber-400">
              {"I'm listening."}
            </p>
          </div>

          {/* Gradient overlay on image side */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}
