import { SectionLabel } from "./SectionLabel";

const GAINS = [
  { icon: "🕐", title: "Your time back", body: "Stop reviewing 100 photos manually. Run the validator and get a flagged report in minutes." },
  { icon: "💷", title: "Lower costs per project", body: "Fewer errors mean fewer revisits. Fewer revisits mean more margin per contract." },
  { icon: "📊", title: "Audit-ready records", body: "Every job produces structured, timestamped evidence — ready for PAS 2035 audits." },
  { icon: "🤝", title: "Happier clients", body: "Professional, consistent reports delivered faster build trust with housing associations and councils." },
  { icon: "📈", title: "Scale without hiring", body: "Take on more projects without growing your admin team. The software scales with you." },
  { icon: "🔒", title: "Your data, your cloud", body: "Your data is stored securely in the cloud and never sold or shared with third parties." },
];

export function WhatYouGainSection() {
  return (
    <section className="px-6 py-24" style={{ background: "linear-gradient(180deg, #111128 0%, #0d0d1a 100%)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionLabel>What you will gain</SectionLabel>
        <h2 className="mb-4 text-center text-3xl font-extrabold text-white md:text-4xl">
          Everything your team needs to deliver at scale
        </h2>
        <p className="mx-auto mb-14 max-w-xl text-center text-gray-400">
          RetroSet is built specifically for retrofit contractors, coordinator, business owners and project managers.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GAINS.map((g) => (
            <div key={g.title} className="group flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-[#646cff]/50">
              <span className="text-3xl">{g.icon}</span>
              <div>
                <h3 className="mb-1 font-bold text-white">{g.title}</h3>
                <p className="text-sm text-gray-400">{g.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-sm font-medium text-gray-400 text-center mt-3">
        🏗️ Designed by <span className="text-white font-semibold">qualified retrofit coordinators</span> — built around how your team actually works
      </p>
    </section>
  );
}
