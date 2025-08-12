"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LangSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  const isFa = pathname?.startsWith("/fa");
  const other = isFa ? "en" : "fa";

  function switchLang() {
    if (!pathname) return;
    const parts = pathname.split("/").filter(Boolean);
    parts[0] = other;
    router.push("/" + parts.join("/"));
  }

  return (
    <button onClick={switchLang} className="navlink border">
      {isFa ? "EN" : "FA"}
    </button>
  );
}
