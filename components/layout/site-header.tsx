"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MainNav from "./main-nav";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-az.png"
            alt="Alex Zilotti Psicólogo"
            style={{ height: "80px", width: "auto" }}
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
