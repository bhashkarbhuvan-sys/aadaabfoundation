"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import en from "@/messages/en.json";
import hi from "@/messages/hi.json";

export default function Navbar() {
  const [lang, setLang] = useState<"en" | "hi">("en");
  const t = lang === "en" ? en : hi;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Aadaab Foundation"
            width={140}
            height={50}
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-aadaabDark hover:text-aadaabOrange font-medium">
            {t.nav.home}
          </Link>
          <Link href="/about" className="text-aadaabDark hover:text-aadaabOrange font-medium">
            {t.nav.about}
          </Link>
          <Link href="/events" className="text-aadaabDark hover:text-aadaabOrange font-medium">
            {t.nav.events}
          </Link>
          <Link href="/artists" className="text-aadaabDark hover:text-aadaabOrange font-medium">
            {t.nav.artists}
          </Link>
          <Link href="/contact" className="text-aadaabDark hover:text-aadaabOrange font-medium">
            {t.nav.contact}
          </Link>

          <div className="flex items-center gap-1 border border-aadaabGreen rounded-full overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 text-sm font-semibold ${
                lang === "en"
                  ? "bg-aadaabGreen text-white"
                  : "bg-white text-aadaabGreen"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("hi")}
              className={`px-3 py-1 text-sm font-semibold ${
                lang === "hi"
                  ? "bg-aadaabGreen text-white"
                  : "bg-white text-aadaabGreen"
              }`}
            >
              हिं
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
