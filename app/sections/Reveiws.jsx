// components/ReviewsSection.jsx
'use client';

import { useMemo, useState } from 'react';
import { Star, ThumbsUp, Quote } from 'lucide-react';

const REVIEWS = [
  { id: 1, name: 'Aarav S.',   rating: 5, title: 'Smooth payouts',    text: 'Withdrawal landed next business day. Odds were fair and live markets felt snappy.', date: '2025-06-28' },
  { id: 2, name: 'Neha K.',    rating: 4, title: 'Clean UI',          text: 'Navigation is simple. Love the dark theme and quick bet slips on mobile.', date: '2025-07-03' },
  { id: 3, name: 'Rohan P.',   rating: 5, title: 'Live casino vibes', text: 'Roulette stream was crisp. Dealer chat felt legit. No lag on 4G.', date: '2025-07-19' },
  { id: 4, name: 'Ishita M.',  rating: 4, title: 'Great promos',      text: 'Welcome bonus was transparent. Wager terms were clear enough, which is rare.', date: '2025-08-01' },
  { id: 5, name: 'Kabir T.',   rating: 5, title: 'Trustworthy',       text: 'KYC was quick and support actually responded. That alone is five stars.', date: '2025-08-10' },
  { id: 6, name: 'Meera D.',   rating: 4, title: 'Solid overall',     text: 'Markets are broad. Would love even faster parlay builder, but it works.', date: '2025-08-18' },
];

function Stars({ value }) {
  return (
    <div className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < value ? 'fill-yellow-300 text-yellow-300' : 'text-white/30'}`}
        />
      ))}
    </div>
  );
}

function Avatar({ name }) {
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-yellow-500 to-red-500 text-black font-bold">
      {initials}
    </div>
  );
}

export default function ReviewsSection() {
  const [filter, setFilter] = useState('all'); // all | 5 | 4+
  const stats = useMemo(() => {
    const total = REVIEWS.length;
    const avg =
      Math.round((REVIEWS.reduce((s, r) => s + r.rating, 0) / total) * 10) / 10;
    return { total, avg };
  }, []);

  const filtered = useMemo(() => {
    if (filter === 'all') return REVIEWS;
    if (filter === '5') return REVIEWS.filter((r) => r.rating === 5);
    if (filter === '4+') return REVIEWS.filter((r) => r.rating >= 4);
    return REVIEWS;
  }, [filter]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-800 via-red-800 to-black text-white">
      {/* subtle backdrop */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20">
        <header className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              What Players Say
            </span>
          </h2>
          <p className="mt-2 text-white/75">
            Real feedback from recent sessions. Screenshots not included, drama avoided.
          </p>
        </header>

        {/* Summary bar */}
        <div className="mx-auto mb-8 flex max-w-3xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-black/40 p-3">
              <Quote className="h-5 w-5 text-yellow-300" />
            </div>
            <div>
              <div className="text-2xl font-extrabold text-white">
                {stats.avg} / 5.0
              </div>
              <div className="text-sm text-white/70">{stats.total} verified reviews</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                filter === 'all'
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('5')}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                filter === '5'
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              5★
            </button>
            <button
              onClick={() => setFilter('4+')}
              className={`rounded-full px-3 py-1.5 text-sm transition ${
                filter === '4+'
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              4★+
            </button>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <article
              key={r.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <Avatar name={r.name} />
                <div>
                  <div className="font-semibold leading-tight">{r.name}</div>
                  <div className="text-xs text-white/60">{new Date(r.date).toLocaleDateString()}</div>
                </div>
                <div className="ml-auto">
                  <Stars value={r.rating} />
                </div>
              </div>
              <h3 className="text-lg font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{r.text}</p>

              <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-xs text-white/70">
                <ThumbsUp className="h-3.5 w-3.5 text-yellow-300" />
                Verified
              </div>

              {/* soft gradient edge */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-300/0 transition group-hover:ring-4 group-hover:ring-yellow-300/20" />
            </article>
          ))}
        </div>

      
        
      </div>
    </section>
  );
}
