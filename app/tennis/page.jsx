// app/tennis/page.jsx
export const metadata = {
  title: "Tennis Betting in India | Mahaveera",
  description:
    "A complete guide to tennis betting in India with Mahaveera. Secure payments, live markets, tips, and more.",
};

export default function TennisMahaveeraPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero with your gradient: from-yellow-800 via-red-800 to-black */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-red-800 to-black" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Tennis Betting in India with Mahaveera: A Complete Guide
          </h1>
          <p className="mt-5 max-w-3xl text-yellow-100/90 text-base sm:text-lg">
            Tennis is one of the most exciting sports in the world, known for its
            fast-paced action, thrilling rallies, and legendary players. In India,
            tennis has a loyal fanbase, and with majors like Wimbledon, US Open,
            French Open, and Australian Open, the excitement never stops. Adding to
            this thrill, tennis betting has become a popular choice for fans who enjoy
            testing their knowledge and earning rewards.
          </p>
          <p className="mt-4 max-w-3xl text-yellow-100/90">
            If you’re looking for a secure and trusted platform for tennis betting,
            <span className="font-semibold"> Mahaveera</span> is your go-to destination. With smooth features, safe
            payment methods, and a wide range of betting markets, Mahaveera makes tennis
            betting fun and rewarding for Indian users.
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
        {/* Why growing */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Why Tennis Betting is Growing in India</SectionTitle>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem title="Global Popularity">
              Tennis is watched worldwide, making it one of the top betting sports.
            </ListItem>
            <ListItem title="Major Tournaments All Year">
              From Grand Slams to ATP and WTA tours, matches run throughout the year, giving endless betting opportunities.
            </ListItem>
            <ListItem title="Individual Sport">
              Since it’s player vs. player, predictions are often clearer than team sports.
            </ListItem>
            <ListItem title="Live Betting Thrill">
              Momentum can shift in a single point, making in-play betting extremely exciting.
            </ListItem>
          </ul>
        </section>

        {/* Types of bets */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Types of Tennis Bets on Mahaveera</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Tennis offers a wide range of betting options, and Mahaveera makes them easily accessible:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card title="Match Winner">Bet on the player who will win the match.</Card>
            <Card title="Set Winner">Predict who will win a particular set.</Card>
            <Card title="Total Games (Over/Under)">
              Wager on how many games will be played in the match.
            </Card>
            <Card title="Correct Score">
              Guess the exact final scoreline (e.g., 2–0, 3–1).
            </Card>
            <Card title="Handicap Betting">
              Bet with an advantage or disadvantage applied to games or sets.
            </Card>
            <Card title="Live Betting">
              Place bets while the match is being played, point by point.
            </Card>
          </div>
        </section>

        {/* Why choose */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-neutral-900/70 p-6 sm:p-8 ring-1 ring-yellow-900/40">
          <SectionTitle>Why Choose Mahaveera for Tennis Betting?</SectionTitle>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem title="User-Friendly Design">Easy to navigate for beginners and advanced bettors.</ListItem>
            <ListItem title="Safe Transactions">
              Deposit and withdraw with UPI, Paytm, PhonePe, and bank transfer.
            </ListItem>
            <ListItem title="Instant Withdrawals">Get your winnings quickly without delays.</ListItem>
            <ListItem title="24/7 Customer Support">Always ready to help you with any issues.</ListItem>
            <ListItem title="Exclusive Bonuses">
              Extra rewards during major tournaments like Wimbledon and the US Open.
            </ListItem>
            <ListItem title="Mobile-Friendly Platform">
              Bet on tennis anytime, anywhere from your smartphone.
            </ListItem>
          </ul>
        </section>

        {/* Tips */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-gradient-to-br from-yellow-800 via-red-800 to-black p-6 sm:p-8 ring-1 ring-yellow-900/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Tips for Successful Tennis Betting</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <TipItem>Analyze Player Form — recent performance, injuries, head-to-head stats.</TipItem>
            <TipItem>Understand Court Surfaces — clay, grass, and hard courts favor different play styles.</TipItem>
            <TipItem>Watch Live Matches — use in-play betting to ride momentum shifts.</TipItem>
            <TipItem>Start with Small Bets — build experience before increasing stakes.</TipItem>
            <TipItem>Use Mahaveera Bonuses — maximize bankroll with offers and promos.</TipItem>
          </ul>
        </section>

        {/* Opportunities */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Tennis Betting Opportunities for Indian Players</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Indian fans follow international stars and homegrown talents alike. With Mahaveera, you can bet on global
            tournaments and also enjoy matches featuring Indian players. Since tennis is played year-round, you’ll always
            find betting opportunities — from intense Grand Slam finals to thrilling ATP Masters clashes.
          </p>
        </section>

        {/* Conclusion + CTA */}
        <section id="get-started" className="mb-20">
          <SectionTitle>Final Thoughts</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Tennis betting combines excitement, strategy, and real rewards. Whether you’re betting on Grand Slams or daily
            ATP matches, Mahaveera gives you a trusted, secure, and rewarding platform. Join today and explore tennis
            betting like never before — with Mahaveera, every serve and every point is a chance to win.
          </p>

          <div className="mt-8">
            <a
              href="/signup"
              className="inline-flex items-center rounded-xl bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-neutral-900"
            >
              Create Your Betting ID
            </a>
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
