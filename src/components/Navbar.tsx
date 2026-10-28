"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeartHandIcon, LeafIcon, MenuIcon, XIcon, UtensilsIcon } from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Available Food", href: "/available-food" },
    { name: "Donate Food", href: "/donate" },
    { name: "Request Food", href: "/request-food" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fdfbf7]/95 backdrop-blur-md border-b border-[#e5ded3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2d6a4f] rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
              <LeafIcon className="w-6 h-6 text-[#52b788]" size={24} />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-xl sm:text-2xl text-[#1b4332] tracking-tight">
                  SmartFood<span className="text-[#40916c]">Share</span>
                </span>
              </div>
              <p className="text-[11px] text-[#526359] font-medium tracking-wide uppercase">
                Food Donation & Redistribution Platform
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-[#1b4332] text-white shadow-sm"
                      : "text-[#2d4035] hover:text-[#1b4332] hover:bg-[#efe8da]/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-[#2d6a4f] hover:bg-[#1b4332] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all transform active:scale-95 cursor-pointer"
            >
              <HeartHandIcon className="w-4 h-4 text-[#52b788]" size={16} />
              <span>Donate Food</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1b4332] hover:bg-[#efe8da] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <XIcon className="w-6 h-6" size={24} /> : <MenuIcon className="w-6 h-6" size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#fdfbf7] border-b border-[#e5ded3] px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? "bg-[#1b4332] text-white"
                    : "text-[#2d4035] hover:bg-[#efe8da]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#e5ded3] flex flex-col gap-2">
            <Link
              href="/donate"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#2d6a4f] text-white text-sm font-semibold py-2.5 rounded-xl shadow"
            >
              <HeartHandIcon className="w-4 h-4 text-[#52b788]" size={16} />
              Donate Food
            </Link>
            <Link
              href="/available-food"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#efe8da] text-[#1b4332] text-sm font-semibold py-2.5 rounded-xl"
            >
              <UtensilsIcon className="w-4 h-4" size={16} />
              Browse Available Food
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
