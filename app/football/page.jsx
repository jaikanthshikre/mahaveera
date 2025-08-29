import Link from "next/link";

// app/football/page.jsx
export const metadata = {
  title: "Football Betting in India | Mahaveera",
  description:
    "A complete guide to football betting in India with Mahaveera. Secure payments, live markets, tips, and more.",
};

export default function FootballMahaveeraPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero with your gradient: from-yellow-800 via-red-800 to-black */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-red-800 to-black" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Football Betting in India with Mahaveera: A Complete Guide
          </h1>
          <p className="mt-5 max-w-3xl text-yellow-100/90 text-base sm:text-lg">
            Football is the world’s most popular sport, delivering unmatched passion from league clashes to global
            showpieces. In India, its following continues to surge, and football betting has quickly become a
            fast-growing trend. If you want to go beyond watching, <span className="font-semibold">Mahaveera</span>
            offers a secure, user-friendly, and rewarding platform to bet smartly and responsibly.
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
          <SectionTitle>Why Football Betting is Popular in India</SectionTitle>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem title="Global Fan Following">
              With leagues and tournaments running year-round, football keeps fans engaged.
            </ListItem>
            <ListItem title="Diverse Betting Options">
              Countless markets make betting both fun and strategic.
            </ListItem>
            <ListItem title="Live Betting Thrill">
              Matches are full of surprises; in-play betting adds extra excitement.
            </ListItem>
            <ListItem title="Indian Youth Engagement">
              Growing interest in European leagues fuels football betting’s rise in India.
            </ListItem>
          </ul>
        </section>

        {/* Types of bets */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Types of Football Bets on Mahaveera</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Mahaveera provides a wide range of football betting markets, giving you plenty of choices:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card title="Match Winner (1X2)">Bet on the home team, away team, or a draw.</Card>
            <Card title="Both Teams to Score (BTTS)">Predict if both teams will score in the match.</Card>
            <Card title="Over/Under Goals">
              Bet on whether total goals will be over or under a set number.
            </Card>
            <Card title="Correct Score">Guess the exact final score of the match.</Card>
            <Card title="First Goal Scorer">Bet on which player will score the first goal.</Card>
            <Card title="Half-Time / Full-Time Result">
              Predict the result at both half-time and full-time.
            </Card>
            <Card title="Live Betting">Place bets during the match, minute by minute.</Card>
          </div>
        </section>

        {/* Why choose Mahaveera */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-neutral-900/70 p-6 sm:p-8 ring-1 ring-yellow-900/40">
          <SectionTitle>Why Choose Mahaveera for Football Betting?</SectionTitle>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem title="Easy-to-Use Platform">Smooth navigation for beginners and pros.</ListItem>
            <ListItem title="Secure Indian Payments">
              UPI, Paytm, PhonePe, and bank transfer for instant deposits and withdrawals.
            </ListItem>
            <ListItem title="Fast Withdrawals">Get your winnings quickly without waiting.</ListItem>
            <ListItem title="24/7 Support">Friendly, responsive customer service.</ListItem>
            <ListItem title="Exclusive Promotions">
              Special offers during FIFA World Cup, Champions League, and more.
            </ListItem>
            <ListItem title="Mobile-Friendly Betting">Bet anytime, anywhere on your smartphone.</ListItem>
          </ul>
        </section>

        {/* Tips */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-gradient-to-br from-yellow-800 via-red-800 to-black p-6 sm:p-8 ring-1 ring-yellow-900/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Tips for Successful Football Betting</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <TipItem>Research Team Form — recent results, injuries, head-to-head records.</TipItem>
            <TipItem>Check Lineups — player availability can swing match outcomes.</TipItem>
            <TipItem>Understand Markets — start with simple bets before advanced ones.</TipItem>
            <TipItem>Use Live Betting — watch the game and react to momentum.</TipItem>
            <TipItem>Manage Your Bankroll — set a budget and stick to it.</TipItem>
            <TipItem>Leverage Mahaveera Offers — use bonuses to boost potential returns.</TipItem>
          </ul>
        </section>

        {/* Opportunities */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Football Betting Opportunities for Indian Players</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Indian fans follow global leagues and domestic competitions such as the Indian Super League (ISL) and
            I-League. With Mahaveera, you can bet on international superstars and support local clubs. Football runs
            year-round, from weekend EPL fixtures to late-night Champions League thrillers, so opportunities never stop.
          </p>
        </section>

        {/* Conclusion + CTA */}
        <section id="get-started" className="mb-20">
          <SectionTitle>Final Thoughts</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Football betting blends passion, strategy, and entertainment. With secure payments, live betting, quick
            withdrawals, and exclusive promos, Mahaveera stands out as a top destination for Indian fans.
            Join today and take your love for football to the next level — every goal, corner, and penalty could be
            your chance to win big.
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
