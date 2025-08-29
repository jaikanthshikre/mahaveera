// app/components/Footer.jsx
"use client";

export default function Footer() {
  const whatsappLink = "https://wa.link/iwantmahaveeraid";

  return (
    <footer className="bg-red-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Logo / About */}
        <div>
          <h2 className="text-xl font-bold">Mahaveera</h2>
          <p className="mt-3 text-sm text-white/70 max-w-xs">
            India’s most trusted betting and gaming platform. Play responsibly and enjoy the game!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "Games", "About", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                📞 WhatsApp Support
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                📧 Email Us
              </a>
            </li>
            <li>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                📍 Location
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Mahaveera. All Rights Reserved.
      </div>
    </footer>
  );
}
