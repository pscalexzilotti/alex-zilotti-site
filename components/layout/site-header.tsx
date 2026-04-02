"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import MainNav from "./main-nav";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[rgba(11,12,13,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-az.png"
            alt="Alex Zilotti Psicólogo"
            style={{
              height: "46px",
              width: "auto",
              display: "block",
              objectFit: "contain",
              objectPosition: "top",
            }}
          />
        </Link>
        <div className="hidden md:flex">
          <MainNav />
        </div>
        <button
          className="rounded-full border border-white/10 p-2.5 text-foreground transition-colors hover:bg-white/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-white/8 bg-[rgba(18,19,20,0.96)] px-6 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            <MainNav />
          </nav>
        </div>
      )}
    </header>
  );
}
