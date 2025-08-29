'use client'

import { Menu, X, Phone, Globe, Star, Zap, Trophy, Volleyball, Club, Bomb } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Cricket', icon: Trophy, href: '/cricket' },
    { name: 'Casino', icon: Club, href: '/casino' },
    { name: 'Tennis', icon: Bomb, href: '/tennis' },
    { name: 'FootBall', icon: Volleyball, href: '/football' },
    
  ]

  return (
    <header className="relative bg-gradient-to-br from-yellow-800 via-red-800 to-black text-white shadow-2xl overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Topbar */}
      <div className="relative z-10 text-xs bg-black/80 backdrop-blur-sm px-4 py-3 flex justify-between items-center border-b border-yellow-700/50 shadow-inner">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-yellow-400 font-semibold animate-pulse">
            <Phone className="w-3 h-3" />
            <span>24/7 Support</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-green-400 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <Link href="https://wa.link/iwantmahaveeraid">
              <span>Live Support Online</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Globe className="w-3 h-3" />
          <span>🇮🇳 EN | ₹ INR</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="relative z-20 px-6 py-2 flex justify-between items-center backdrop-blur-sm">
        {/* Logo */}
        <div className="group cursor-pointer">
          <div className="flex items-center gap-2">
         
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text tracking-wide drop-shadow-2xl group-hover:scale-105 transition-transform duration-300">
    <Link href="/"> <img src="logo.png" alt="" className='h-15 w-full'/></Link>
            </div>
          </div>
        
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <li key={link.name} className="group cursor-pointer relative">
                <Link
                  href={link.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg backdrop-blur-sm"
                >
                  <IconComponent className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
                  <span className="group-hover:text-yellow-400 transition-colors">{link.name}</span>
                </Link>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </li>
            )
          })}
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <Link href="https://wa.link/iwantmahaveeraid">
            <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-300 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 relative overflow-hidden group">
              <span className="relative z-10">Login</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </Link>
          <Link href="https://wa.link/iwantmahaveeraid">
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105 relative overflow-hidden group">
              <span className="relative z-10 flex items-center gap-2">
                <Star className="w-4 h-4" />
                Register
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden relative z-30 bg-black/95 backdrop-blur-lg px-6 pb-6 space-y-4 border-t border-yellow-700/30">
          {navLinks.map((link) => {
            const IconComponent = link.icon
            return (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 text-sm text-gray-300 hover:text-yellow-400 cursor-pointer p-3 rounded-lg hover:bg-white/10 transition-all duration-300"
              >
                <IconComponent className="w-4 h-4" />
                <span>{link.name}</span>
              </Link>
            )
          })}
          <div className="flex gap-3 mt-6 pt-4 border-t border-yellow-700/30">
            <Link href="https://wa.link/iwantmahaveeraid">
              <button className="px-4 py-3 border-2 border-yellow-500 text-yellow-300 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 font-semibold">
                Login
              </button>
            </Link>
            <Link href="https://wa.link/iwantmahaveeraid">
              <button className="px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 flex items-center justify-center gap-2">
                <Star className="w-4 h-4" />
                Register
              </button>
            </Link>
          </div>
        </div>
      )}


      {/* Marquee Section */}
<div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-inner overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
  <div className="relative z-10 py-2 px-4 flex items-center gap-2 text-red-600 font-bold text-sm">
    <Trophy className="w-4 h-4 animate-bounce" />
    <div className="overflow-hidden whitespace-nowrap flex-1">
      <div className="flex animate-scroll">
        <span className="mx-4">
          🎰 Best Gaming Site in India • 🏆 Welcome Bonus Up to ₹5000 • 🎲 Live Casino Available 24/7 • 🏏 Sports Betting with Best Odds • 🎁 Daily Promotions & Rewards •
        </span>
        <span className="mx-4">
          🎰 Best Gaming Site in India • 🏆 Welcome Bonus Up to ₹5000 • 🎲 Live Casino Available 24/7 • 🏏 Sports Betting with Best Odds • 🎁 Daily Promotions & Rewards •
        </span>
      </div>
    </div>
    <Zap className="w-4 h-4 animate-pulse text-red-500" />
  </div>
</div>

<style jsx>{`
  @keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  .animate-scroll {
    display: flex;
    width: max-content;
    animation: scroll 30s linear infinite;
  }
  .animate-shimmer {
    animation: shimmer 2s ease-in-out infinite;
  }
`}</style>

    </header>
  )
}
