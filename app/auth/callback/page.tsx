"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { ButterflyIcon } from "@/components/butterfly-icon";

function ErrorIcon() {
  return (
    <svg
      className="h-12 w-12 text-red-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}

function AuthCallbackContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const token = searchParams.get("token");
    const provider = searchParams.get("provider");
    const error = searchParams.get("error");
    const student = searchParams.get("student");

    if (error) {
      setStatus("error");
      setErrorMessage(error);
      // Redirect after 3 seconds
      setTimeout(() => {
        router.push(`/?error=${encodeURIComponent(error)}`);
      }, 3000);
      return;
    }

    if (token) {
      // Save auth data to localStorage
      localStorage.setItem("bonita_token", token);
      if (provider) localStorage.setItem("bonita_provider", provider);
      if (student === "true") localStorage.setItem("bonita_student", "true");

      setStatus("success");
      // Redirect to dashboard
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      setStatus("error");
      setErrorMessage("No authentication token received");
      setTimeout(() => {
        router.push("/?error=no_token");
      }, 3000);
    }
  }, [searchParams, router]);

  return (
    <div className="text-center">
      {status === "loading" && (
        <>
          <div className="mb-4 flex justify-center">
            <ButterflyIcon className="h-12 w-12 animate-pulse text-primary" />
          </div>
          <p className="text-lg text-foreground">Completing sign in...</p>
        </>
      )}

      {status === "success" && (
        <>
          <div className="mb-4 flex justify-center">
            <ButterflyIcon className="h-12 w-12 text-primary" />
          </div>
          <p className="text-lg text-foreground">Welcome to Bonita!</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Redirecting you to the dashboard...
          </p>
        </>
      )}

      {status === "error" && (
        <>
          <div className="mb-4 flex justify-center">
            <ErrorIcon />
          </div>
          <p className="text-lg text-foreground">Something went wrong</p>
          <p className="mt-2 text-sm text-muted-foreground">{errorMessage}</p>
          <p className="mt-4 text-sm text-muted-foreground">
            Redirecting you back...
          </p>
        </>
      )}
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="text-center">
      <div className="mb-4 flex justify-center">
        <ButterflyIcon className="h-12 w-12 animate-pulse text-primary" />
      </div>
      <p className="text-lg text-foreground">Loading...</p>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Suspense fallback={<LoadingFallback />}>
        <AuthCallbackContent />
      </Suspense>
    </div>
  );
}
