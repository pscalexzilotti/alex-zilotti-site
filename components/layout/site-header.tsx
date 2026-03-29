"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MainNav from "./main-nav";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-az.png"
            alt="Alex Zilotti Psicólogo"
            width={160}
            height={44}
            priority
            style={{ objectFit: "contain" }}
          />
        </Link>
        <div className="hidden md:flex">
          <MainNav />
        </div>
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6">
          <MainNav />
        </div>
      )}
    </header>
  );
}
