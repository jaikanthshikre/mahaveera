import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Load Poppins from Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"], // choose weights you need
  variable: "--font-poppins", // optional CSS variable
  display: "swap",
});

export const metadata = {
  title: "Mahaveera Book",
  description: "Best Betting Site in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
