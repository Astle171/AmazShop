"use client";

import Link from "next/link";
import { Suspense, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowRightIcon } from "@/components/icons";
import BrandPanel from "@/components/auth/BrandPanel";
import GoogleIcon from "@/components/auth/GoogleIcon";

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUpPageContent />
    </Suspense>
  );
}

function SignUpPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        setLoading(false);
        return;
      }

      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        router.push(`/login?callbackUrl=${encodeURIComponent(callbackUrl)}`);
      } else {
        router.push(callbackUrl);
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl });
  };

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col lg:flex-row">
      <BrandPanel />

      {/* Form Side */}
      <div className="flex-1 bg-white flex flex-col items-center p-6 md:p-8 lg:p-16 relative overflow-y-auto">
        <div className="hidden lg:flex absolute top-12 right-16 items-center gap-4">
          <span className="text-xs font-bold text-secondary">
            Need help?
          </span>
          <Link
            href="#"
            className="text-xs font-black tracking-widest text-main hover:text-accent transition-colors underline underline-offset-4"
          >
            CONTACT SUPPORT
          </Link>
        </div>

        <div className="w-full max-w-[420px] flex-1 flex flex-col justify-center">
          <div className="lg:hidden flex justify-end mb-4">
            <Link
              href="#"
              className="text-[10px] font-black tracking-widest text-main hover:text-accent transition-colors underline underline-offset-4"
            >
              CONTACT SUPPORT
            </Link>
          </div>
          <div className="mb-8 md:mb-10 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">
              Create account.
            </h2>
            <p className="text-secondary font-medium">
              Join AmazShop and start shopping smarter.
            </p>
          </div>

          {/* Google sign-up */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="auth-social-btn w-full h-14 rounded-2xl flex items-center justify-center gap-3 font-bold text-sm mb-8"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-main/5" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-4 text-secondary font-bold tracking-widest">
                Or sign up with email
              </span>
            </div>
          </div>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-main mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="auth-input w-full h-14 px-5 rounded-2xl bg-bg-light border border-transparent transition-all font-medium text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-main mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="auth-input w-full h-14 px-5 rounded-2xl bg-bg-light border border-transparent transition-all font-medium text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-main mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
                className="auth-input w-full h-14 px-5 rounded-2xl bg-bg-light border border-transparent transition-all font-medium text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-main mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={8}
                className="auth-input w-full h-14 px-5 rounded-2xl bg-bg-light border border-transparent transition-all font-medium text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-main text-white rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-accent hover:shadow-xl hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 mt-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Creating account..." : "Create Account"}
              {!loading && <ArrowRightIcon size={18} strokeWidth={3} />}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm font-medium text-secondary">
              Already have an account?
              <Link
                href={callbackUrl !== "/" ? `/login?callbackUrl=${encodeURIComponent(callbackUrl)}` : "/login"}
                className="text-main font-black underline underline-offset-4 hover:text-accent transition-colors ml-1"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-auto pt-10 text-center lg:text-left w-full max-w-[420px]">
          <p className="text-xs text-secondary/60 leading-relaxed">
            By continuing, you agree to Amazshop&apos;s{" "}
            <Link href="#" className="underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="underline">
              Privacy Policy
            </Link>
            . We use cookies to improve your experience.
          </p>
        </div>
      </div>
    </div>
  );
}
