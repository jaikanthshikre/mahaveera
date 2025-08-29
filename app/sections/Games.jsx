// app/games/page.jsx
'use client';

import { ArrowDownCircle, ArrowUpCircle, Clock, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';

export const metadata = {
  title: 'Games | Mahaveera',
  description: 'Curated games gallery with gradient theme and eight featured titles.',
};

const GAMES = [
  { id: 1, title: 'Cricket', category: 'Sports', rating: 4.7, img: '/1.webp' },
  { id: 2, title: 'Horse racing', category: 'Racing', rating: 4.6, img: '/2.webp' },
  { id: 3, title: 'Poker', category: 'Strategy', rating: 4.5, img: '/3.webp' },
  { id: 4, title: 'Casino', category: 'Puzzle', rating: 4.8, img: '/4.webp' },
  { id: 5, title: 'Lucky 7', category: 'Strategy', rating: 4.4, img: '/5.webp' },
  { id: 6, title: 'Football', category: 'Sports', rating: 4.2, img: '/6.webp' },
  { id: 7, title: 'Badminton', category: 'Sports', rating: 4.3, img: '/7.webp' },
  { id: 8, title: 'Teenpatti', category: 'Puzzle', rating: 4.6, img: '/8.webp' },
];

const CATEGORIES = ['All', 'Racing', 'Strategy', 'Sports', 'Puzzle'];

export default function GamesPage() {
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('All');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GAMES.filter((g) => {
      const matchesCat = cat === 'All' || g.category === cat;
      const matchesQ =
        !q || g.title.toLowerCase().includes(q) || g.category.toLowerCase().includes(q);
      return matchesCat && matchesQ;
    });
  }, [query, cat]);

  return (
    <>
     <div className="bg-gradient-to-br from-yellow-800 via-red-800 to-black py-4 px-4 border-t border-gray-700 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Left side - Brand info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="text-left">
                  <div className="text-white text-lg font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text ">
                  lineguru777.com
                  </div>
                  <div className="text-white text-sm flex items-center space-x-2">
                    <Shield className="w-4 h-4" />
                    <span>Secure & Instant Transactions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - badges + actions */}
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-4 text-xs">
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Clock className="w-3 h-3 text-green-400" />
                  <span className="text-white">24/7 Available</span>
                </div>
                <div className="flex items-center space-x-1 bg-gray-700/50 rounded-full px-3 py-1 backdrop-blur-sm">
                  <Zap className="w-3 h-3 text-yellow-400" />
                  <span className="text-white">Instant Processing</span>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-xs md:text-sm">
                <button
                  onClick={() => window.open("https://lineguru777.com/", "_blank")}
                  className="group relative bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <div className="flex items-center space-x-2">
                    <ArrowUpCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Deposit</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button
                  onClick={() => window.open("https://lineguru777.com/", "_blank")}
                  className="group relative bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg hover:shadow-green-500/25 hover:scale-105 transform"
                >
                  <div className="flex items-center space-x-2">
                    <ArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
                    <span>Withdraw</span>
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom notification bar */}
          <div className="mt-3 pt-3 border-t border-gray-700/50">
            <div className="flex items-center justify-center lg:justify-between">
              <div className="hidden lg:flex items-center space-x-6 text-xs text-white">
                <span className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>System Online</span>
                </span>
                <span>Last processed: 39 seconds ago</span>
                <span>Next maintenance: 07:09 UTC</span>
              </div>

              <div className="text-center lg:text-right">
                <div className="text-xs text-white mb-1">Processing Speed</div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-xs font-semibold text-white">Ultra Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <main className="min-h-screen bg-gradient-to-br from-yellow-800 via-red-800 to-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-[32rem] w-[32rem] rounded-full bg-red-500/10 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 py-14 md:py-20 relative">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-red-300 bg-clip-text text-transparent">
              Games
            </span>
          </h1>
          <p className="mt-4 text-white/80 max-w-2xl">
            Browse eight hand-picked titles. Filter by category or search by name.
          </p>

          {/* Controls */}
          <div className="mt-8 flex overflow-x-scroll md:overflow-hidden gap-3  sm:items-center ">
            <div className="flex  gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={[
                    'rounded-full px-3 py-1.5 text-sm font-medium transition',
                    c === cat
                      ? 'bg-white text-black'
                      : 'bg-white/10 hover:bg-white/20 text-white',
                  ].join(' ')}
                  aria-pressed={c === cat}
                >
                  {c}
                </button>
              ))}
            </div>
            
          </div>
          <div className="sm:ml-auto w-full sm:w-80 mt-4 md:mt-2">
              <label className="relative block">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search games..."
                  className="w-full rounded-xl bg-white/10 placeholder-white/60 text-white px-4 py-2.5 outline-none ring-1 ring-white/10 focus:ring-2 focus:ring-yellow-300"
                />
                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/60">
                  ⌘K
                </span>
              </label>
            </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {filtered.length === 0 ? (
          <p className="text-white/80">
            No games found. Try a different search or category.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((g) => (
              <Link
                key={g.id}
                href="https://wa.link/iwantmahaveeraid"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl shadow-black/30 transition-transform hover:scale-[1.02]"
              >
                <div className="relative h-78 md:h-64 overflow-hidden">  {/* ~256px tall */}
                  <img
                    src={g.img}
                    alt={g.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
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
                    <span className="rounded-xl bg-gradient-to-r from-yellow-400 to-red-500 px-4 py-2 text-sm font-semibold text-black shadow">
                      Play Now
                    </span>
                    <span className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-xs text-white/90">
                      Details
                    </span>
                  </div>
                </div>

                {/* Glow ring on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-300/0 group-hover:ring-4 group-hover:ring-yellow-300/30 transition" />
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-center text-sm text-white/70">
          © {new Date().getFullYear()} Mahaveera. Entertainment only. Play responsibly.
        </div>
      </footer>
    </main>
    </>
  );
}
