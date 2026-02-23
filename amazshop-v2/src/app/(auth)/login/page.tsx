"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ArrowRightIcon } from "@/components/icons";
import BrandPanel from "@/components/auth/BrandPanel";
import GoogleIcon from "@/components/auth/GoogleIcon";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid email or password.");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col lg:flex-row">
      <BrandPanel />

      {/* Form Side */}
      <div className="flex-1 bg-white flex flex-col justify-center items-center p-8 lg:p-16 relative">
        <div className="absolute top-8 right-8 lg:top-12 lg:right-16 flex items-center gap-4">
          <span className="text-xs font-bold text-secondary hidden sm:inline">
            Need help?
          </span>
          <Link
            href="#"
            className="text-xs font-black tracking-widest text-main hover:text-accent transition-colors underline underline-offset-4"
          >
            CONTACT SUPPORT
          </Link>
        </div>

        <div className="w-full max-w-[420px]">
          <div className="mb-10 text-center lg:text-left">
            <div className="lg:hidden flex justify-center mb-8">
              <div className="w-12 h-12 bg-main text-white rounded-xl flex items-center justify-center font-black text-2xl">
                A
              </div>
            </div>
            <h2 className="text-4xl font-black tracking-tighter mb-2">
              Welcome back.
            </h2>
            <p className="text-secondary font-medium">
              Sign in to manage your orders and profile.
            </p>
          </div>

          {/* Google sign-in */}
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
                Or continue with email
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
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-black uppercase tracking-widest text-main">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-[10px] font-bold text-accent hover:underline"
                >
                  FORGOT PASSWORD?
                </Link>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="auth-input w-full h-14 px-5 rounded-2xl bg-bg-light border border-transparent transition-all font-medium text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 bg-main text-white rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-accent hover:shadow-xl hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2 mt-8 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign In"}
              {!loading && <ArrowRightIcon size={18} strokeWidth={3} />}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-sm font-medium text-secondary">
              Don&apos;t have an account?
              <Link
                href="/signup"
                className="text-main font-black underline underline-offset-4 hover:text-accent transition-colors ml-1"
              >
                Create Account
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-auto pt-10 text-center lg:text-left w-full max-w-[420px]">
          <p className="text-[10px] text-secondary/60 leading-relaxed">
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
