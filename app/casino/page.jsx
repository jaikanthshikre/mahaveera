import Link from "next/link";

// app/casino/page.jsx
export const metadata = {
  title: "Casino Betting in India | Mahaveera",
  description:
    "A complete guide to casino betting in India with Mahaveera. Safe payments, huge game selection, live casino, tips, and more.",
};

export default function CasinoMahaveeraPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero with your gradient: from-yellow-800 via-red-800 to-black */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-red-800 to-black" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Casino Betting in India with Mahaveera: A Complete Guide
          </h1>
          <p className="mt-5 max-w-3xl text-yellow-100/90 text-base sm:text-lg">
            When it comes to online entertainment, casino betting is one of the most
            exciting options for Indian players. From the thrill of spinning a roulette
            wheel to the strategy of poker and the fast-paced action of slots, casino
            games bring the essence of Las Vegas straight to your screen.
          </p>
          <p className="mt-4 max-w-3xl text-yellow-100/90">
            With trusted platforms like <span className="font-semibold">Mahaveera</span>, Indian users can enjoy
            world-class casino betting safely and conveniently. Whether you’re a beginner
            or an experienced player aiming for big wins, Mahaveera offers everything you need.
          </p>

          <div className="mt-8">
            <a
              href="#get-started"
              className="inline-flex items-center rounded-xl bg-white/95 px-5 py-3 text-sm font-semibold text-red-700 shadow-sm ring-1 ring-inset ring-white/40 hover:bg-white"
            >
              Get Started
            </a>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* Why popular */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Why Casino Betting is Popular in India</SectionTitle>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem title="Wide Variety of Games">
              From classic card games to modern video slots, there’s something for everyone.
            </ListItem>
            <ListItem title="Easy Accessibility">
              With a smartphone and internet connection, play anytime, anywhere.
            </ListItem>
            <ListItem title="Live Casino Experience">
              Live dealers and real-time gaming deliver the feel of a physical casino.
            </ListItem>
            <ListItem title="Instant Rewards">
              Fast gameplay and exciting payouts keep players engaged.
            </ListItem>
          </ul>
        </section>

        {/* Popular games */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Popular Casino Games on Mahaveera</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Mahaveera brings you a wide collection of games that appeal to Indian players:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card title="Roulette">Spin the wheel and bet on numbers, colors, or odd/even.</Card>
            <Card title="Blackjack">Aim to reach 21 without going over to beat the dealer.</Card>
            <Card title="Poker">Test your skills and strategies against other players.</Card>
            <Card title="Baccarat">Simple and exciting — bet on Player, Banker, or Tie.</Card>
            <Card title="Andar Bahar">A popular Indian card game, now available online.</Card>
            <Card title="Teen Patti">Known as Indian Poker, a much-loved desi casino game.</Card>
            <Card title="Slot Machines">Spin reels with exciting themes, jackpots, and instant wins.</Card>
          </div>
        </section>

        {/* Why choose */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-neutral-900/70 p-6 sm:p-8 ring-1 ring-yellow-900/40">
          <SectionTitle>Why Choose Mahaveera for Casino Betting?</SectionTitle>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem title="Massive Game Selection">
              From global favorites to local Indian card games.
            </ListItem>
            <ListItem title="Safe Payments">
              Deposit and withdraw with UPI, Paytm, PhonePe, or bank transfers.
            </ListItem>
            <ListItem title="Fast Withdrawals">Get your winnings instantly without long waits.</ListItem>
            <ListItem title="24/7 Support">Customer support is always available to help.</ListItem>
            <ListItem title="Attractive Bonuses">
              Welcome offers, free spins, and cashback to boost gameplay.
            </ListItem>
            <ListItem title="Mobile-Friendly Design">Play on any device, anytime.</ListItem>
          </ul>
        </section>

        {/* Tips */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-gradient-to-br from-yellow-800 via-red-800 to-black p-6 sm:p-8 ring-1 ring-yellow-900/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Tips for Successful Casino Betting</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <TipItem>Know the Rules — understand basics of each game before betting.</TipItem>
            <TipItem>Start Small — use low stakes until you’re comfortable.</TipItem>
            <TipItem>Use Bonuses Wisely — maximize with Mahaveera’s welcome offers.</TipItem>
            <TipItem>Play Games of Skill — Poker and Blackjack reward strategy.</TipItem>
            <TipItem>Set a Budget — play responsibly and avoid chasing losses.</TipItem>
          </ul>
        </section>

        {/* Opportunities */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Casino Betting Opportunities for Indian Players</SectionTitle>
          <p className="mt-4 text-neutral-300">
            India has a strong tradition of card games like Teen Patti and Andar Bahar, now available online at
            Mahaveera. Alongside these, enjoy world-famous casino games once limited to international destinations.
            With a balance of local favorites and international classics, Mahaveera is a perfect fit for Indian users.
          </p>
        </section>

        {/* Conclusion + CTA */}
        <section id="get-started" className="mb-20">
          <SectionTitle>Final Thoughts</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Casino betting is about fun, thrill, and rewards. Whether you enjoy the quick spins of slots, the suspense
            of roulette, or the strategy of poker, Mahaveera brings everything under one platform. With secure payments,
            instant withdrawals, 24/7 support, and exclusive bonuses, it’s one of the best places for casino betting in India.
          </p>

          <div className="mt-8">
            <Link
              href="https://wa.link/iwantmahaveeraid"
              className="inline-flex items-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Create Your Betting ID
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------- Small presentational helpers ---------- */

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-yellow-300">
      {children}
    </h2>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-2xl bg-neutral-900 p-5 shadow-sm ring-1 ring-yellow-900/40">
      <h3 className="text-lg font-semibold text-yellow-200">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-300">{children}</p>
    </div>
  );
}

function ListItem({ title, children }) {
  return (
    <li className="rounded-xl bg-neutral-900 p-4 shadow-sm ring-1 ring-yellow-900/40">
      <p className="text-yellow-200 font-medium">{title}</p>
      <p className="mt-1 text-neutral-300 text-sm">{children}</p>
    </li>
  );
}

function TipItem({ children }) {
  return (
    <li className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
      <span className="text-yellow-100">{children}</span>
    </li>
  );
}
