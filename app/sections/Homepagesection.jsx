'use client';

import { useState } from 'react';
import {
  Trophy, Star, Zap, Crown, Play, TrendingUp,
  Users, Award, ChevronRight, Dice1, Dice6,
  Shield,  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function HomepageSection() {
  const [activeTab, setActiveTab] = useState('sports');
  const [hoveredCard, setHoveredCard] = useState(null);

  const sportsData = [
    { name: 'Cricket',   odds: '2.45', status: 'LIVE',          teams: 'IND vs AUS',      icon: '🏏' },
    { name: 'Football',  odds: '3.20', status: 'LIVE',          teams: 'MAN vs CHE',      icon: '⚽' },
    { name: 'Tennis',    odds: '1.85', status: 'Starting Soon', teams: 'Djokovic vs Nadal', icon: '🎾' },
    { name: 'Basketball',odds: '2.75', status: 'LIVE',          teams: 'LAL vs GSW',      icon: '🏀' },
  ];

  const casinoData = [
    { name: 'Teen Patti', players: '1,245', jackpot: '₹2,50,000', icon: '🎰' },
    { name: 'Dragon Tiger',    players: '856',  jackpot: '₹1,80,000', icon: '🃏' },
    { name: 'Lucky7',       players: '642',  jackpot: '₹95,000',   icon: '🐉' },
    { name: 'Cricket',    players: '1,892',jackpot: '₹3,25,000', icon: '♠️' },
  ];

  const tabs = [
    { id: 'sports', label: 'Sports Betting', icon: Trophy },
    { id: 'casino', label: 'Live Casino',    icon: Star },
    { id: 'slots',  label: 'Slot Games',     icon: Zap },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-yellow-800 via-red-800 to-black text-white">
      {/* Subtle background accents */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-yellow-400/15 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-red-500/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <header className="text-center mb-14 md:mb-16">
            <h1 className="text-2xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-400 bg-clip-text text-transparent">
                INDIA&apos;S #1
              </span>
              <br />
              <span className="text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.35)]">
                GAMING PLATFORM
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-3xl text-lg md:text-xl text-white/80 leading-relaxed">
              Premium betting, secure payouts, and tasteful sparkle. Join millions who like winning and good UI.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="https://wa.link/iwantmahaveeraid">  <button
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 px-8 py-4 text-lg font-bold text-black shadow-[0_10px_30px_rgba(234,179,8,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              >
                <Crown className="h-5 w-5" />
                Start Playing Now
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-0" />
              </button></Link>

               <Link href="https://wa.link/iwantmahaveeraid"> <button
                className="group relative inline-flex items-center gap-2 rounded-xl border-2 border-yellow-400/80 px-8 py-4 text-lg font-bold text-yellow-200 transition hover:bg-yellow-500 hover:text-black hover:shadow-[0_10px_30px_rgba(234,179,8,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              >
                <img aria-hidden alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" className="hidden" />
                Claim ₹5000 Bonus
              </button></Link>
            </div>
          </header>

          {/* Stats */}
          <section aria-label="Platform stats" className="mb-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {[
              { icon: Users,       label: 'Active Players',        value: '2.5M+', color: 'text-yellow-300' },
              { icon: Award,       label: 'Daily Winners',         value: '50K+',  color: 'text-rose-300'   },
              { icon: TrendingUp,  label: 'Winning Rate',          value: '94.5%', color: 'text-emerald-300'},
              { icon: Shield,      label: 'Secure Transactions',   value: '100%',  color: 'text-sky-300'    },
            ].map(({ icon: Icon, label, value, color }, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-2 md:p-6 backdrop-blur-sm transition-shadow hover:shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 transition-opacity group-hover:opacity-100"
                     style={{ background: 'linear-gradient(135deg, rgba(250,204,21,0.08), rgba(239,68,68,0.08))' }} />
                <div className="relative z-10 flex items-center gap-2 md:gap-4">
                  <div className={`rounded-xl bg-black/40 p-2 ${color}`}>
                    <Icon className="h-3 md:h-6 w-3 md:w-6" />
                  </div>
                  <div>
                    <div className="text-lg md:text-2xl font-extrabold text-white tracking-tight">{value}</div>
                    <div className="text-xs md:text-sm text-white/70">{label}</div>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* Tabs */}
          <section className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-sm shadow-[0_10px_50px_rgba(0,0,0,0.35)]">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  LIVE GAMES &amp; BETTING
                </span>
              </h2>
              <p className="mt-3 text-white/75 text-lg">Pick a category and go earn your confetti.</p>
            </div>

            <div
              role="tablist"
              aria-label="Game categories"
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {tabs.map(({ id, label, icon: Icon }) => {
                const selected = activeTab === id;
                return (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${id}`}
                    id={`tab-${id}`}
                    onClick={() => setActiveTab(id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold transition
                      ${selected
                        ? 'bg-gradient-to-r from-yellow-500 to-amber-400 text-black shadow-[0_10px_30px_rgba(234,179,8,0.35)]'
                        : 'border border-white/10 bg-black/40 text-white/80 hover:bg-black/60 hover:text-yellow-200'
                      }`}
                  >
                    <Icon className="h-4 w-4" />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Sports */}
            <div
              role="tabpanel"
              id="panel-sports"
              aria-labelledby="tab-sports"
              hidden={activeTab !== 'sports'}
              className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {sportsData.map((sport, index) => (
                <div
                  key={sport.name}
                  className="group relative cursor-pointer rounded-2xl border border-white/10 bg-black/50 p-6 transition hover:border-yellow-400/50 hover:shadow-[0_8px_30px_rgba(234,179,8,0.18)]"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl leading-none">{sport.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-white">{sport.name}</h3>
                        <p className="text-sm text-white/70">{sport.teams}</p>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${sport.status === 'LIVE'
                        ? 'bg-rose-500 text-white animate-pulse'
                        : 'bg-yellow-400 text-black'
                      }`}
                    >
                      {sport.status}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-2xl font-extrabold text-yellow-300">
                      Odds: {sport.odds}
                    </div>
                    <ChevronRight
                      className={`h-5 w-5 text-yellow-300 transition-transform ${hoveredCard === index ? 'translate-x-1' : ''}`}
                    />
                  </div>

                  {/* soft gradient edge */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-300/0 transition group-hover:ring-4 group-hover:ring-yellow-300/20" />
                </div>
              ))}
            </div>

            {/* Casino */}
            <div
              role="tabpanel"
              id="panel-casino"
              aria-labelledby="tab-casino"
              hidden={activeTab !== 'casino'}
              className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {casinoData.map((game) => (
                <div
                  key={game.name}
                  className="group relative rounded-2xl border border-white/10 bg-black/50 p-6 transition hover:border-yellow-400/50 hover:shadow-[0_8px_30px_rgba(234,179,8,0.18)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg md:text-2xl leading-none">{game.icon}</span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white py-2">{game.name}</h3>
                        <p className="text-xs md:text-sm text-white/70">{game.players} players online</p>
                        <div className="md:hidden block mt-2">
                      <div className="text-xs text-white/60">Jackpot</div>
                      <div className="text-lg  font-extrabold text-yellow-300">{game.jackpot}</div>
                    </div>
                      </div>
                    </div>
                    <div className="hidden md:block text-right">
                      <div className="text-xs text-white/60">Jackpot</div>
                      <div className="text-lg md:text-xl font-extrabold text-yellow-300">{game.jackpot}</div>
                    </div>
                  

                  </div>

                 <Link href="https://lineguru777.com/"> <button className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-500 px-4 py-2 font-semibold text-white shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300">
                    <Play className="h-4 w-4" />
                    Play Now
                  </button></Link>

                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-yellow-300/0 transition group-hover:ring-4 group-hover:ring-yellow-300/20" />
                </div>
              ))}
            </div>

            {/* Slots */}
            <div
              role="tabpanel"
              id="panel-slots"
              aria-labelledby="tab-slots"
              hidden={activeTab !== 'slots'}
              className="mt-10 text-center"
            >
              <div className="mb-6 inline-flex items-center gap-4 text-6xl">
                <Dice1 className="h-16 w-16 text-yellow-300" />
                <Dice6 className="h-16 w-16 text-rose-400" />
              </div>
              
              <p className="mx-auto mt-3 max-w-xl text-lg text-white/75">
                A curated collection of cinematic slot games with fair RTP and slick motion.
              </p>
             <Link href="https://lineguru777.com/"> <button className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 px-6 py-3 font-bold text-black shadow hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                Click Here
              </button></Link>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="mt-16 text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <h3 className="text-xl md:text-3xl font-bold">
                <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                  Ready to Win Big?
                </span>
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-lg text-white/80">
                Join thousands who trust MahaveeraBook for a polished, secure, fast gaming experience.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="https://wa.link/iwantmahaveeraid"><button className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-400 px-8 py-4 text-lg font-bold text-black shadow-[0_10px_30px_rgba(234,179,8,0.35)] transition-transform hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300">
                  Register Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button></Link>
                
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-12 border-t border-white/10">
            <div className="py-8 text-center text-sm text-white/70">
              © {new Date().getFullYear()} Mahaveera. Entertainment only. Play responsibly.
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
