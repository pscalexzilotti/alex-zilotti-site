"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/servicos", label: "Serviços" },
  { href: "/imersao", label: "Imersão" },
  { href: "/conteudos", label: "Conteúdos" },
  { href: "/contato", label: "Contato" },
];

export default function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-7 md:flex">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn(
            "text-sm tracking-[0.08em] uppercase transition-colors duration-200 hover:text-primary",
            pathname === link.href
              ? "text-primary"
              : "text-muted-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
