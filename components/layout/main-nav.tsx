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

interface MainNavProps {
  onClose?: () => void;
}

export function MainNav({ onClose }: MainNavProps) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col md:flex-row gap-6 md:gap-8">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className={cn(
            "text-sm tracking-wide transition-colors hover:text-accent",
            pathname === link.href ? "text-accent font-medium" : "text-foreground"
          )}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
