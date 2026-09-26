import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Image src="/images/black-logo-text.png" alt="RetroSet" width={100} height={30} className="object-contain" />
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} RetroSet. All rights reserved.</p>
      </div>
    </footer>
  );
}
