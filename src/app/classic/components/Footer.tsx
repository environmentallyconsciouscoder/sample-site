import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a14] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Image src="/images/white-logo.png" alt="RetroSet" width={100} height={30} className="object-contain opacity-60" />
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} RetroSet. All rights reserved.</p>
      </div>
    </footer>
  );
}
