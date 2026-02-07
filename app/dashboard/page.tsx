"use client";

import { useChat } from "ai/react";
import { useState, useRef, useEffect, FormEvent } from "react";
import { ButterflyIcon } from "@/components/butterfly-icon";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

// Icons
function MenuIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 12h18M3 6h18M3 18h18" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function MessageCircleIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-5 w-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function PaletteIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-5 w-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

function MicIcon({ className }: { className?: string }) {
  return (
    <svg className={className || "h-5 w-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  );
}

type ChatMode = "chat" | "create" | "voice";

interface ImageGeneration {
  id: string;
  prompt: string;
  status: "starting" | "processing" | "succeeded" | "failed";
  output?: string[];
  error?: string;
}

const placeholders: Record<ChatMode, string> = {
  chat: "Ask Bonita anything...",
  create: "Describe what you want to see... 🎨",
  voice: "Voice coming soon...",
};

const suggestions = [
  "Help me think through...",
  "Create something...",
  "Explain...",
];

// Mock conversation history
const mockConversations = [
  { id: "1", title: "Career advice", time: "2h ago" },
  { id: "2", title: "Project brainstorm", time: "Yesterday" },
  { id: "3", title: "Writing help", time: "3 days ago" },
];

export default function DashboardPage() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } =
    useChat();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("chat");
  const [createInput, setCreateInput] = useState("");
  const [generations, setGenerations] = useState<ImageGeneration[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock user data (replace with real auth later)
  const user = {
    name: "User",
    email: "user@example.com",
    tier: "Free" as const,
    credits: 75,
    maxCredits: 100,
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, generations]);

  const handleSuggestionClick = (suggestion: string) => {
    if (mode === "chat") {
      setInput(suggestion);
    } else {
      setCreateInput(suggestion);
    }
  };

  // Poll for image generation status
  const pollGeneration = async (id: string) => {
    const maxAttempts = 60; // 2 minutes max
    let attempts = 0;

    const poll = async () => {
      try {
        const response = await fetch(`/api/generate?id=${id}`);
        const data = await response.json();

        setGenerations((prev) =>
          prev.map((g) =>
            g.id === id
              ? { ...g, status: data.status, output: data.output, error: data.error }
              : g
          )
        );

        if (data.status === "succeeded" || data.status === "failed") {
          setIsGenerating(false);
          return;
        }

        attempts++;
        if (attempts < maxAttempts) {
          setTimeout(poll, 2000);
        } else {
          setIsGenerating(false);
        }
      } catch (error) {
        console.error("Poll error:", error);
        setIsGenerating(false);
      }
    };

    poll();
  };

  const handleCreateSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!createInput.trim() || isGenerating) return;

    setIsGenerating(true);
    const prompt = createInput;
    setCreateInput("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (data.error) {
        setGenerations((prev) => [
          ...prev,
          { id: Date.now().toString(), prompt, status: "failed", error: data.error },
        ]);
        setIsGenerating(false);
        return;
      }

      setGenerations((prev) => [
        ...prev,
        { id: data.id, prompt, status: data.status || "starting" },
      ]);

      pollGeneration(data.id);
    } catch (error) {
      console.error("Generate error:", error);
      setIsGenerating(false);
    }
  };

  const currentInput = mode === "chat" ? input : createInput;
  const currentLoading = mode === "chat" ? isLoading : isGenerating;

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 transform border-r border-border bg-card transition-transform duration-200 lg:relative lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* User Profile */}
          <div className="border-b border-border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                {user.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="truncate font-medium text-foreground">{user.name}</p>
                <span className="inline-flex items-center rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
                  {user.tier}
                </span>
              </div>
            </div>

            {/* Credits */}
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Credits</span>
                <span className="font-medium text-foreground">
                  {user.credits} / {user.maxCredits}
                </span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${(user.credits / user.maxCredits) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* New Chat Button */}
          <div className="p-3">
            <button
              onClick={() => window.location.reload()}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              <PlusIcon />
              New Chat
            </button>
          </div>

          {/* Conversation History */}
          <div className="flex-1 overflow-y-auto p-3">
            <p className="mb-2 px-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Recent
            </p>
            <div className="space-y-1">
              {mockConversations.map((conv) => (
                <button
                  key={conv.id}
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm text-foreground transition-colors hover:bg-muted"
                >
                  <span className="truncate">{conv.title}</span>
                  <span className="shrink-0 text-xs text-muted-foreground">
                    {conv.time}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Bottom Links */}
          <div className="border-t border-border p-3">
            <Link
              href="/settings"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <SettingsIcon />
              Settings
            </Link>
            {user.tier === "Free" && (
              <Link
                href="/pricing"
                className="mt-1 flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
              >
                Upgrade
                <ChevronRightIcon />
              </Link>
            )}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <header className="flex h-14 items-center justify-between border-b border-border px-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:hidden"
            >
              <MenuIcon />
            </button>
            <div className="flex items-center gap-2">
              <ButterflyIcon className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">Bonita</span>
              {mode === "create" && (
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                  Create Mode
                </span>
              )}
            </div>
          </div>
          <ThemeToggle />
        </header>

        {/* Chat/Create Area */}
        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-3xl px-4 py-8">
            {/* Welcome State */}
            {messages.length === 0 && generations.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <ButterflyIcon className="mb-6 h-16 w-16 text-primary opacity-60" />
                <h2 className="mb-3 text-2xl font-semibold text-foreground">
                  {mode === "create" ? "What do you want to create?" : "What's on your mind?"}
                </h2>
                <p className="mb-8 max-w-md text-muted-foreground">
                  {mode === "create"
                    ? "Describe an image and Bonita will create it with dignity."
                    : "I'm here to help with clarity and care."}
                </p>

                {/* Suggestion Chips */}
                <div className="flex flex-wrap justify-center gap-2">
                  {mode === "chat" ? (
                    suggestions.map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50 hover:bg-card/80"
                      >
                        {suggestion}
                      </button>
                    ))
                  ) : (
                    <>
                      <button
                        onClick={() => setCreateInput("A serene portrait with warm golden lighting")}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50"
                      >
                        Portrait with golden light
                      </button>
                      <button
                        onClick={() => setCreateInput("An abstract representation of cultural heritage")}
                        className="rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition-colors hover:border-primary/50"
                      >
                        Cultural heritage art
                      </button>
                    </>
                  )}
                </div>
              </div>
            ) : (
              /* Content */
              <div className="space-y-6">
                {/* Chat Messages */}
                {mode === "chat" &&
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-4 ${
                        message.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {message.role === "assistant" && (
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800">
                          <ButterflyIcon className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "user"
                            ? "bg-slate-700 text-white"
                            : "bg-slate-800 text-slate-100"
                        }`}
                      >
                        <p className="whitespace-pre-wrap leading-relaxed">
                          {message.content}
                        </p>
                      </div>
                    </div>
                  ))}

                {/* Image Generations */}
                {mode === "create" &&
                  generations.map((gen) => (
                    <div key={gen.id} className="space-y-3">
                      {/* User prompt */}
                      <div className="flex justify-end">
                        <div className="max-w-[80%] rounded-2xl bg-slate-700 px-4 py-3 text-white">
                          <p className="flex items-center gap-2">
                            <PaletteIcon className="h-4 w-4" />
                            {gen.prompt}
                          </p>
                        </div>
                      </div>

                      {/* Generation result */}
                      <div className="flex gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800">
                          <ButterflyIcon className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          {(gen.status === "starting" || gen.status === "processing") && (
                            <div className="rounded-2xl bg-slate-800 p-4">
                              <div className="flex items-center gap-3">
                                <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                                <span className="text-sm text-slate-300">
                                  Creating your image... This may take a moment.
                                </span>
                              </div>
                            </div>
                          )}

                          {gen.status === "succeeded" && gen.output && (
                            <div className="space-y-2">
                              <div className="overflow-hidden rounded-2xl bg-slate-800">
                                <img
                                  src={gen.output[0]}
                                  alt={gen.prompt}
                                  className="w-full"
                                />
                              </div>
                              <a
                                href={gen.output[0]}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary/20 px-3 py-1.5 text-sm text-primary hover:bg-primary/30"
                              >
                                <DownloadIcon />
                                Download
                              </a>
                            </div>
                          )}

                          {gen.status === "failed" && (
                            <div className="rounded-2xl bg-red-500/10 p-4 text-red-400">
                              <p>Failed to generate image: {gen.error || "Unknown error"}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Loading indicator for chat */}
                {mode === "chat" && isLoading && (
                  <div className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-800">
                      <ButterflyIcon className="h-4 w-4 animate-pulse text-primary" />
                    </div>
                    <div className="rounded-2xl bg-slate-800 px-4 py-3">
                      <div className="flex gap-1">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500 [animation-delay:-0.3s]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500 [animation-delay:-0.15s]" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-500" />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </main>

        {/* Input Bar */}
        <div className="border-t border-border bg-background p-4">
          <form
            onSubmit={mode === "chat" ? handleSubmit : handleCreateSubmit}
            className="mx-auto flex max-w-3xl items-center gap-2"
          >
            {/* Mode Toggles */}
            <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1">
              <button
                type="button"
                onClick={() => setMode("chat")}
                className={`rounded-md p-2 transition-colors ${
                  mode === "chat"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Chat mode"
              >
                <MessageCircleIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setMode("create")}
                className={`rounded-md p-2 transition-colors ${
                  mode === "create"
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                title="Create mode"
              >
                <PaletteIcon className="h-4 w-4" />
              </button>
              <button
                type="button"
                disabled
                className="rounded-md p-2 text-muted-foreground/50 cursor-not-allowed"
                title="Voice (coming soon)"
              >
                <MicIcon className="h-4 w-4" />
              </button>
            </div>

            {/* Input */}
            <input
              type="text"
              value={mode === "chat" ? input : createInput}
              onChange={(e) =>
                mode === "chat"
                  ? handleInputChange(e)
                  : setCreateInput(e.target.value)
              }
              placeholder={placeholders[mode]}
              disabled={currentLoading || mode === "voice"}
              className="flex-1 rounded-xl border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 disabled:opacity-50"
            />

            {/* Send Button */}
            <button
              type="submit"
              disabled={currentLoading || !currentInput.trim() || mode === "voice"}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-all hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <SendIcon />
            </button>
          </form>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            {mode === "create" ? "~25-50 credits per image" : "~1 credit per message"}
          </p>
        </div>
      </div>
    </div>
  );
}
