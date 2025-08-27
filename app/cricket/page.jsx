// app/cricket/page.jsx
export const metadata = {
  title: "Cricket Betting in India | Mahaveera",
  description:
    "A complete guide to cricket betting in India with Mahaveera. Secure payments, live markets, tips, and more.",
};

export default function CricketMahaveeraPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* Hero with your gradient: from-yellow-800 via-red-800 to-black */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-800 via-red-800 to-black" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Cricket Betting in India with Mahaveera: A Complete Guide
          </h1>
          <p className="mt-5 max-w-3xl text-yellow-100/90 text-base sm:text-lg">
            In India, cricket is not just a sport—it’s a religion. From gully cricket to the glamour of the IPL,
            millions follow every ball with passion. Betting adds extra thrill and the chance to win real rewards.
            If you’re searching for a secure and exciting place for cricket betting, <span className="font-semibold">Mahaveera</span> is built for you:
            user-friendly features, safe payments, and a wide range of markets for the ultimate experience.
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
          <SectionTitle>Why Cricket Betting is Popular in India</SectionTitle>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem title="Cricket Fever Everywhere">
              From international matches to IPL and domestic tournaments, India breathes cricket.
            </ListItem>
            <ListItem title="High Entertainment Value">
              Betting adds excitement to every run, wicket, and boundary.
            </ListItem>
            <ListItem title="Variety of Options">
              From predicting match winners to live ball-by-ball betting, opportunities are endless.
            </ListItem>
            <ListItem title="Easy Online Access">
              Mahaveera is simple, mobile-friendly, and secure for Indian users.
            </ListItem>
          </ul>
        </section>

        {/* Types of bets */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>Types of Cricket Bets on Mahaveera</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Mahaveera gives players plenty of choices to explore, such as:
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card title="Match Winner">Bet on the team you think will win.</Card>
            <Card title="Toss Winner">Predict which side will win the toss.</Card>
            <Card title="Top Batsman/Bowler">
              Bet on the player with the highest runs or most wickets.
            </Card>
            <Card title="Over/Under Runs">
              Wager on whether total runs will be over or under a set number.
            </Card>
            <Card title="Live Betting">
              Bet while the match is happening and enjoy instant action.
            </Card>
          </div>
          <p className="mt-6 text-neutral-300">
            These options give Indian bettors the freedom to use their cricket knowledge in exciting ways.
          </p>
        </section>

        {/* Why choose Mahaveera */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-neutral-900/70 p-6 sm:p-8 ring-1 ring-yellow-900/40">
          <SectionTitle>Why Choose Mahaveera for Cricket Betting?</SectionTitle>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            <ListItem title="Seamless Platform">
              Easy-to-use design, perfect for beginners and pros.
            </ListItem>
            <ListItem title="Secure Payments">
              Trusted Indian methods like UPI, Paytm, PhonePe, and bank transfer.
            </ListItem>
            <ListItem title="Quick Withdrawals">
              Get your winnings instantly without delays.
            </ListItem>
            <ListItem title="24/7 Customer Support">
              Friendly support team to help you anytime.
            </ListItem>
            <ListItem title="Exclusive Bonuses">
              Special offers during IPL, World Cup, and big matches.
            </ListItem>
            <ListItem title="Safe & Transparent">
              A fair betting environment for all users.
            </ListItem>
          </ul>
        </section>

        {/* Tips */}
        <section className="mb-10 sm:mb-14 rounded-2xl bg-gradient-to-br from-yellow-800 via-red-800 to-black p-6 sm:p-8 ring-1 ring-yellow-900/50">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Tips for Successful Cricket Betting</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            <TipItem>Do Proper Research — player form, team performance, pitch reports.</TipItem>
            <TipItem>Start with Small Bets — learn gradually and scale with confidence.</TipItem>
            <TipItem>Stay Updated — use live betting by tracking every ball and over.</TipItem>
            <TipItem>Set a Budget — bet responsibly with a predefined limit.</TipItem>
            <TipItem>Use Offers — Mahaveera bonuses boost winnings without extra risk.</TipItem>
          </ul>
        </section>

        {/* Future */}
        <section className="mb-10 sm:mb-14">
          <SectionTitle>The Future of Cricket Betting in India</SectionTitle>
          <p className="mt-4 text-neutral-300">
            With smartphones and faster internet, cricket betting is growing rapidly. Tournaments like the IPL, ICC
            World Cup, and T20 leagues create massive opportunities for fans. Mahaveera is dedicated to delivering the
            best experience with high odds, local payment options, and smooth performance on all devices.
          </p>
        </section>

        {/* Conclusion + CTA */}
        <section id="get-started" className="mb-20">
          <SectionTitle>Final Thoughts</SectionTitle>
          <p className="mt-4 text-neutral-300">
            Cricket betting is about passion, strategy, and entertainment. If you’re looking for a trusted, user-friendly,
            and rewarding platform, Mahaveera is your destination. Join today, bet on your favorite teams and players,
            and make every match unforgettable.
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
