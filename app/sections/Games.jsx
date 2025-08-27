// app/games/page.jsx
'use client';

import { useMemo, useState } from 'react';

export const metadata = {
  title: 'Games | MMB',
  description: 'Curated games gallery with gradient theme and eight featured titles.',
};

const GAMES = [
  { id: 1, title: 'Neon Racer', category: 'Racing',  rating: 4.7, img: '/1.png' },
  { id: 2, title: 'Mythic Realms', category: 'RPG',  rating: 4.6, img: '/2.png' },
  { id: 3, title: 'Zero Hour', category: 'Shooter', rating: 4.5, img: '/3.png' },
  { id: 4, title: 'Star Frontier', category: 'Strategy', rating: 4.8, img: '/4.png' },
  { id: 5, title: 'Skyline Drift', category: 'Racing', rating: 4.4, img: '/5.png' },
  { id: 6, title: 'Puzzle Forge', category: 'Puzzle', rating: 4.2, img: '/6.png' },
  { id: 7, title: 'Street Champions', category: 'Sports', rating: 4.3, img: '/7.png' },
  { id: 8, title: 'Battle Royale', category: 'Action', rating: 4.6, img: '/8.png' },
];

const CATEGORIES = ['All', 'Action', 'Racing', 'RPG', 'Shooter', 'Strategy', 'Sports', 'Puzzle'];

export default function GamesPage() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GAMES.filter((g) => {
      const matchesCat = cat === 'All' || g.category === cat;
      const matchesQ = !q || g.title.toLowerCase().includes(q) || g.category.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, cat]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-800 via-red-800 to-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full bg-red-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 relative">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Featured <span className="bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">Games</span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Browse eight hand-picked titles. Filter by category or search by name.
          </p>

        {/* Controls */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={[
                    'rounded-full px-3 py-1.5 text-sm font-medium transition',
                    c === cat ? 'bg-white text-black' : 'bg-white/10 hover:bg-white/20 text-white'
                  ].join(' ')}
                  aria-pressed={c === cat}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="sm:ml-auto w-full sm:w-80">
              <label className="relative block">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search games..."
                  className="w-full rounded-xl bg-white/10 placeholder-white/60 text-white px-4 py-2.5 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-yellow-300"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/60">⌘K</span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {filtered.length === 0 ? (
          <p className="text-white/80">No games found. Try a different search or category.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((g) => (
              <article
                key={g.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30"
              >
                <div className="relative aspect-[4/3]">
                  <img
                    src={g.img}
                    alt={g.title}
                    className="h-[40] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay removed */}
                  <div className="absolute left-3 top-3 rounded-full bg-yellow-400/90 px-2.5 py-1 text-xs font-bold text-black ring-1 ring-black/10">
                    {g.category}
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold">{g.title}</h3>
                    <span className="shrink-0 rounded-full bg-white/10 px-2 py-1 text-xs">
                      ★ {g.rating.toFixed(1)}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <button className="rounded-xl bg-gradient-to-r from-yellow-400 to-red-500 px-4 py-2 text-sm font-semibold text-black shadow transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-yellow-300">
                      Play Now
                    </button>
                    <button className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white/90 transition hover:bg-white/10">
                      Details
                    </button>
                  </div>
                </div>

                {/* Glow ring on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-300/0 group-hover:ring-4 group-hover:ring-yellow-300/30 transition" />
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-white/70">
          © {new Date().getFullYear()} MMB. Entertainment only. Play responsibly.
        </div>
      </footer>
    </main>
  );
}
