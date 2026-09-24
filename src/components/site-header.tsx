"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { NAV_LINKS } from "@/lib/content";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-vm-border bg-white">
      <div className="vm-container flex h-[84px] items-center justify-between gap-6">
        <a href="#inicio" className="flex shrink-0 items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Volley Mindset"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-[34px] max-[1180px]:hidden min-[1181px]:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="vm-nav-link text-[14.5px] font-semibold"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            href="#comunidad"
            className="vm-btn-primary hidden items-center px-6 py-3 text-[13px] font-bold uppercase tracking-[0.05em] sm:inline-flex"
          >
            Join now
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center border-2 border-vm-ink text-vm-ink min-[1181px]:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-vm-border bg-white px-10 py-8 min-[1181px]:hidden"
        >
          <nav className="flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-semibold"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#comunidad"
              className="vm-btn-primary mt-2 inline-flex w-fit items-center px-6 py-3 text-[13px] font-bold uppercase tracking-[0.05em]"
              onClick={() => setOpen(false)}
            >
              Join now
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
