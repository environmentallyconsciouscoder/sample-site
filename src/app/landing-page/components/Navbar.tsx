"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BRAND, APP_URL, AUDIENCES } from "./constants";

const LINKS = [
  { href: "#software", label: "Software" },
  { href: "#services", label: "Services" },
  { href: "#why-now", label: "Why RetroSet" },
  { href: "#demo", label: "Book a demo" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);
  const close = () => {
    setOpen(false);
    setSolutionsOpen(false);
  };

  useEffect(() => {
    if (!solutionsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!solutionsRef.current?.contains(e.target as Node)) setSolutionsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSolutionsOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [solutionsOpen]);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md" style={{ background: "rgba(255,255,255,0.9)", borderBottom: "1px solid rgba(15,23,42,0.08)" }}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" onClick={close}>
          <Image src="/images/black-logo-text.png" alt="RetroSet" width={120} height={36} className="object-contain" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <div
            ref={solutionsRef}
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={solutionsOpen}
              onClick={() => setSolutionsOpen((o) => !o)}
              className="flex items-center gap-1 text-sm text-slate-600 transition-colors hover:text-slate-900"
            >
              Solutions
              <span className={`text-[10px] transition-transform ${solutionsOpen ? "rotate-180" : ""}`}>▼</span>
            </button>
            {solutionsOpen && (
              // pt-3 bridges the gap so the menu doesn't close as the pointer moves onto it
              <div className="absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3">
                <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-lg">
                  {AUDIENCES.map((a) => (
                    <a
                      key={a.id}
                      href={a.href}
                      onClick={close}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900"
                    >
                      <span>{a.icon}</span>
                      {a.navLabel}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">{l.label}</a>
          ))}
          <a
            href={APP_URL}
            className="rounded-xl border px-5 py-2 text-sm font-semibold text-slate-900"
            style={{ borderColor: `${BRAND}66`, background: `${BRAND}18` }}
          >
            Sign in
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-0.5 w-6 bg-slate-900 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-900 transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-slate-900 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-slate-200 px-6 pb-5 pt-3 md:hidden">
          <p className="pt-2 text-xs font-semibold uppercase tracking-widest text-slate-400">Solutions</p>
          {AUDIENCES.map((a) => (
            <a key={a.id} href={a.href} onClick={close} className="py-2 pl-2 text-slate-700">
              {a.icon} {a.navLabel}
            </a>
          ))}
          <div className="my-2 border-t border-slate-100" />
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={close} className="py-2 text-slate-700">{l.label}</a>
          ))}
          <a
            href={APP_URL}
            className="mt-2 rounded-xl border px-5 py-2 text-center font-semibold text-slate-900"
            style={{ borderColor: `${BRAND}66`, background: `${BRAND}18` }}
          >
            Sign in
          </a>
        </div>
      )}
    </nav>
  );
}
