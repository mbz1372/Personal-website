"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LangSwitcher from "./LangSwitcher";

type Props = { locale: "fa" | "en" };

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={`navlink ${active ? "bg-muted" : ""}`}>
      {children}
    </Link>
  );
};

export default function Navbar({ locale }: Props) {
  const base = `/${locale}`;
  return (
    <header className="border-b">
      <nav className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2 font-semibold">
          <Link href={base}>MBZ</Link>
          <span className="text-sm opacity-70">{locale === "fa" ? "مدیر محصول" : "Product Manager"}</span>
        </div>
        <div className="flex items-center gap-1">
          <NavItem href={`${base}`}>{locale === "fa" ? "خانه" : "Home"}</NavItem>
          <NavItem href={`${base}/about`}>{locale === "fa" ? "درباره من" : "About"}</NavItem>
          <NavItem href={`${base}/articles`}>{locale === "fa" ? "مقالات" : "Articles"}</NavItem>
          <NavItem href={`${base}/books`}>{locale === "fa" ? "کتاب‌ها" : "Books"}</NavItem>
          <NavItem href={`${base}/videos`}>{locale === "fa" ? "ویدیوها" : "Videos"}</NavItem>
        </div>
        <LangSwitcher />
      </nav>
    </header>
  );
}
