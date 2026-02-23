import AccountSidebar from "@/components/account/AccountSidebar";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <AccountSidebar />
      <div className="flex-grow min-w-0">{children}</div>
    </div>
  );
}
