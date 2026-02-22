import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-2 text-xs font-bold text-secondary/60 uppercase tracking-widest mb-8">
      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-2">
          {index > 0 && <span>/</span>}
          {item.href ? (
            <Link href={item.href} className="hover:text-main transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-main">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
