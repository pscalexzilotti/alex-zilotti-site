"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Servicos" },
  { href: "/imersao", label: "Imersao" },
  { href: "/conteudos", label: "Conteudos" },
  { href: "/contato", label: "Contato" },
];

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-accent",
            pathname === link.href
              ? "text-accent"
              : "text-foreground/80"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
