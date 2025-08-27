// components/WhyChooseUsAltSection.jsx
'use client';

import {
  Shield, TrendingUp, Clock, Headphones, Smartphone,
  Gift, Zap, BadgeCheck, CheckCircle2, XCircle, ArrowRight
} from 'lucide-react';

const FEATURES = [
  { title: 'Secure & Transparent', desc: 'Bank-grade encryption, clear rules, verified results.', Icon: Shield },
  { title: 'Competitive Odds', desc: 'Sharp pricing across major markets to boost value.', Icon: TrendingUp },
  { title: 'Fast Withdrawals', desc: 'Quick processing within standard banking windows after KYC.', Icon: Clock },
  { title: '24/7 Human Support', desc: 'Real people, real answers. Always on.', Icon: Headphones },
  { title: 'Responsible Play Tools', desc: 'Limits, cool-offs, and reality checks built in.', Icon: BadgeCheck },
  { title: 'Mobile-First UX', desc: 'Smooth navigation and quick bet slips on any device.', Icon: Smartphone },
  { title: 'Exclusive Promotions', desc: 'Seasonal bonuses and event specials with clear terms.', Icon: Gift },
  { title: 'Live Odds & In-Play', desc: 'Real-time markets with low-latency updates.', Icon: Zap },
];

const MATRIX = [
  { label: 'Encryption & KYC',            mmb: true,  other: false },
  { label: 'Fast Payout Windows',         mmb: true,  other: false },
  { label: 'Live Odds Coverage',          mmb: true,  other: true  },
  { label: 'Responsible Play Tools',      mmb: true,  other: false },
  { label: '24/7 Human Support',          mmb: true,  other: false },
  { label: 'Transparent Promo Terms',     mmb: true,  other: false },
];

export default function WhyChooseUsAltSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-800 via-red-800 to-black text-white">
      {/* subtle background accents */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        {/* Header */}
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="mt-3 text-white/75">
            Built for speed, clarity, and trust. No gimmicks, just a platform that behaves.
          </p>
        </header>

        {/* Trust badges */}
        <div className="mx-auto mb-10 flex max-w-4xl snap-x snap-mandatory gap-3 overflow-x-auto pb-2">
          {['ISO-grade Security','24/7 Human Support','Fast Payouts','Transparent Promos','Responsible Play Tools'].map((t) => (
            <span key={t} className="snap-start inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
              <span className="size-2 rounded-full bg-gradient-to-r from-yellow-400 to-red-500" />
              {t}
            </span>
          ))}
        </div>

        {/* Striped Timeline */}
        <ol className="relative mx-auto max-w-5xl">
          <div aria-hidden className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-yellow-400/50 via-white/20 to-red-500/50 md:left-6" />
          {FEATURES.map(({ title, desc, Icon }, i) => (
            <li key={title} className="relative py-5 pl-14 md:pl-20">
              <span
                className="absolute left-0 top-5 grid size-8 place-items-center rounded-full ring-2 ring-white/20 md:size-10"
                style={{ background: 'linear-gradient(135deg, rgba(250,204,21,0.25), rgba(239,68,68,0.25))' }}
              >
                <Icon className="h-4 w-4 text-yellow-300 md:h-5 md:w-5" />
              </span>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold tracking-tight md:text-lg">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/75">{desc}</p>
                </div>
                <span className="hidden shrink-0 text-sm font-bold text-white/40 md:block">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <div
                aria-hidden
                className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent"
                style={{ opacity: i === FEATURES.length - 1 ? 0 : 1 }}
              />
            </li>
          ))}
        </ol>

        {/* How We Stack Up — split design (MMB left, Others right) */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="mb-4 text-center md:text-left">
            <h3 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                How We Stack Up
              </span>
            </h3>
            <p className="mt-1 text-sm text-white/70">Left: MMB. Right: Others. Same features, different reality.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {/* MMB column */}
            <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <header className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <h4 className="text-lg font-semibold">
                  <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">MMB</span>
                </h4>
                <span className="rounded-full bg-gradient-to-r from-yellow-500 to-amber-400 px-3 py-1 text-xs font-bold text-black">
                  Verified
                </span>
              </header>
              <ul className="divide-y divide-white/10">
                {MATRIX.map((row, idx) => (
                  <li key={row.label} className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm text-white/85">{row.label}</span>
                    {row.mmb ? (
                      <span className="inline-flex items-center gap-1 text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-white/50">
                        <XCircle className="h-4 w-4" /> No
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>

            {/* Others column */}
            <section className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <header className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                <h4 className="text-lg font-semibold text-white/90">Others</h4>
                <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-bold text-white/70">
                  Varies
                </span>
              </header>
              <ul className="divide-y divide-white/10">
                {MATRIX.map((row) => (
                  <li key={row.label} className="flex items-center justify-between px-5 py-3">
                    <span className="text-sm text-white/85">{row.label}</span>
                    {row.other ? (
                      <span className="inline-flex items-center gap-1 text-emerald-300">
                        <CheckCircle2 className="h-4 w-4" /> Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-white/50">
                        <XCircle className="h-4 w-4" /> No
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 px-8 py-4 text-lg font-bold text-black shadow-[0_10px_30px_rgba(234,179,8,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
            Get Started
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
          <p className="mt-3 text-xs text-white/70">Play responsibly. Set limits and take breaks.</p>
        </div>
      </div>
    </section>
  );
}
