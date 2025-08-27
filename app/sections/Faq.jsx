// components/FAQSection.jsx
'use client';

import { useState } from 'react';
import { HelpCircle, ChevronDown, Shield, MessageCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Is MMB Bet Book secure for deposits and withdrawals?',
    a: 'Yes. Payments are encrypted end-to-end and processed via trusted gateways. You can also enable limits and cool-offs for responsible play.',
    icon: Shield,
  },
  {
    q: 'How fast are withdrawals processed?',
    a: 'Most withdrawals are processed within standard banking windows after verification. Timelines can vary by method and KYC status.',
    icon: HelpCircle,
  },
  {
    q: 'Do you offer live odds and in-play markets?',
    a: 'Yes. Live odds update in real time across sports and select casino tables where applicable.',
    icon: MessageCircle,
  },
  {
    q: 'Can beginners use the platform easily?',
    a: 'The UI is mobile-first, with clear flows and tooltips. Start small, explore demos where available, and read the tips pages.',
    icon: HelpCircle,
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-800 via-red-800 to-black text-white">
      {/* subtle backdrop accents */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="mt-3 text-white/75">
            Short answers. No fluff. If you still need help, ping support.
          </p>
        </header>

        <div
          role="region"
          aria-labelledby="faq-heading"
          className="mx-auto grid max-w-3xl gap-4"
        >
          {faqs.map((item, idx) => {
            const selected = open === idx;
            const Icon = item.icon ?? HelpCircle;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(selected ? -1 : idx)}
                  aria-expanded={selected}
                  aria-controls={`faq-panel-${idx}`}
                  id={`faq-trigger-${idx}`}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span className="rounded-xl bg-black/40 p-2 text-yellow-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1 font-semibold">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${selected ? 'rotate-180' : ''}`}
                  />
                </button>

                <div
                  id={`faq-panel-${idx}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${idx}`}
                  className={`grid overflow-hidden px-5 transition-all duration-300 ${
                    selected ? 'grid-rows-[1fr] py-0 pb-5' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0">
                    <p className="text-sm leading-relaxed text-white/80">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support box */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
          <p className="inline-flex items-center justify-center gap-2 text-sm text-white/80">
            <MessageCircle className="h-4 w-4 text-yellow-300" />
            Still stuck? Our support team is online 24/7.
          </p>
        </div>
      </div>
    </section>
  );
}
