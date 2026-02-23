"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function InfoRow({ label, value }: { label: string; value: string | null | undefined }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 last:border-0">
      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest sm:w-40 shrink-0 mb-1 sm:mb-0">
        {label}
      </span>
      <span className="text-sm font-semibold text-main">
        {value || <span className="text-gray-300 italic font-normal">Not provided</span>}
      </span>
    </div>
  );
}

function ProfileSkeleton() {
  const Bone = ({ className }: { className?: string }) => (
    <div className={`animate-pulse bg-main/[0.07] rounded-lg ${className ?? ""}`} />
  );
  return (
    <div className="space-y-8">
      <Bone className="h-8 w-48" />
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="flex items-center gap-5 mb-8">
          <Bone className="w-20 h-20 !rounded-full shrink-0" />
          <div>
            <Bone className="h-5 w-40 mb-2" />
            <Bone className="h-4 w-56" />
          </div>
        </div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center py-4 border-b border-gray-100 last:border-0">
            <Bone className="h-3 w-24 mr-8" />
            <Bone className="h-4 w-44" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user) {
      router.replace("/login?callbackUrl=/account");
    }
  }, [session, status, router]);

  if (status === "loading" || !session?.user) {
    return <ProfileSkeleton />;
  }

  const user = session.user;
  const initials = (user.name || "U")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const joinedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl md:text-4xl font-black text-main tracking-tight mb-2">
          Profile Details
        </h1>
        <p className="text-sm sm:text-base text-secondary">
          Manage your personal information and account settings.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 md:p-8">
        {/* Avatar + name header */}
        <div className="flex items-center gap-4 sm:gap-5 mb-8 pb-6 border-b border-gray-100">
          {user.image ? (
            <Image
              src={user.image}
              alt={user.name || "User"}
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-accent/20"
            />
          ) : (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent text-white flex items-center justify-center text-xl sm:text-2xl font-black border-2 border-accent/20">
              {initials}
            </div>
          )}
          <div className="min-w-0">
            <h2 className="text-lg sm:text-xl font-black text-main truncate">{user.name}</h2>
            <p className="text-sm text-secondary truncate">{user.email}</p>
          </div>
        </div>

        {/* Info rows */}
        <div>
          <InfoRow label="Full Name" value={user.name} />
          <InfoRow label="Email" value={user.email} />
          <InfoRow label="User ID" value={user.id} />
          <InfoRow label="Member Since" value={joinedDate} />
        </div>
      </div>
    </div>
  );
}
