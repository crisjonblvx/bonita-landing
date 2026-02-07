"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

function ArrowLeftIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m12 19-7-7 7-7M19 12H5" />
    </svg>
  );
}

export default function SettingsPage() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [compactMessages, setCompactMessages] = useState(false);
  const [showExplanations, setShowExplanations] = useState(true);
  const [defaultMode, setDefaultMode] = useState("chat");

  // Mock user data
  const user = {
    name: "User",
    email: "user@example.com",
    avatar: null,
    tier: "Free" as const,
    credits: 75,
    maxCredits: 100,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-14 max-w-2xl items-center gap-4 px-4">
          <Link
            href="/dashboard"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeftIcon />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">Settings</h1>
        </div>
      </header>

      <main className="mx-auto max-w-2xl px-4 py-8">
        <div className="space-y-6">
          {/* Profile Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Profile
            </h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20 text-2xl font-semibold text-primary">
                  {user.name[0]}
                </div>
                <div>
                  <p className="font-medium text-foreground">{user.name}</p>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <button className="w-full rounded-lg border border-border bg-background py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                Sign Out
              </button>
            </div>
          </section>

          {/* Plan & Credits Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Plan & Credits
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-foreground">Current Plan</span>
                <span className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-foreground">
                  {user.tier}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Credits Remaining</span>
                  <span className="font-medium text-foreground">
                    {user.credits} / {user.maxCredits}
                  </span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full bg-primary transition-all"
                    style={{ width: `${(user.credits / user.maxCredits) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <Link
                  href="/pricing"
                  className="flex-1 rounded-lg bg-primary py-2.5 text-center text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                >
                  Upgrade
                </Link>
                <button className="flex-1 rounded-lg border border-border bg-background py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                  Manage Subscription
                </button>
              </div>
            </div>
          </section>

          {/* Preferences Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Preferences
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label htmlFor="defaultMode" className="text-foreground">
                  Default chat mode
                </label>
                <select
                  id="defaultMode"
                  value={defaultMode}
                  onChange={(e) => setDefaultMode(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                >
                  <option value="chat">Chat</option>
                  <option value="create">Create</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-foreground">Compact messages</span>
                <button
                  onClick={() => setCompactMessages(!compactMessages)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    compactMessages ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                      compactMessages ? "left-[22px]" : "left-0.5"
                    }`}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-foreground">Show &quot;Why?&quot; explanations</span>
                <button
                  onClick={() => setShowExplanations(!showExplanations)}
                  className={`relative h-6 w-11 rounded-full transition-colors ${
                    showExplanations ? "bg-primary" : "bg-muted"
                  }`}
                >
                  <span
                    className={`absolute top-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                      showExplanations ? "left-[22px]" : "left-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>

          {/* Data & Privacy Section */}
          <section className="rounded-xl border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Data & Privacy
            </h2>
            <div className="space-y-3">
              <Link
                href="/privacy"
                className="block rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
              >
                Privacy Policy
              </Link>
              <button className="w-full rounded-lg border border-border bg-background px-4 py-3 text-left text-sm text-foreground transition-colors hover:bg-muted">
                Request my data
              </button>
              <button
                onClick={() => setShowDeleteModal(true)}
                className="w-full rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-left text-sm text-red-400 transition-colors hover:bg-red-500/20"
              >
                Delete my account
              </button>
            </div>
          </section>
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl border border-border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold text-foreground">
              Delete your account?
            </h3>
            <p className="mb-6 text-sm text-muted-foreground">
              This action cannot be undone. All your data, conversations, and credits
              will be permanently deleted.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 rounded-lg border border-border bg-background py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                Cancel
              </button>
              <button className="flex-1 rounded-lg bg-red-500 py-2.5 text-sm font-medium text-white transition-colors hover:bg-red-600">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
