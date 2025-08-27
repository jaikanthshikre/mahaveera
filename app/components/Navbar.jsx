'use client'

import { Menu, X, Phone, Globe, Star, Zap, Crown, Trophy } from 'lucide-react'
import { useState } from 'react'

// Mock Marquee component since react-fast-marquee isn't available
const Marquee = ({ children, speed, className }) => (
  <div className={`${className} overflow-hidden whitespace-nowrap`}>
    <div className="animate-marquee inline-block">
      {children.repeat ? children.repeat(10) : Array(10).fill(children).join(' • ')}
    </div>
  </div>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  
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
            <span>24/7 Support: +91 98765 43210</span>
          </div>
          <div className="hidden sm:flex items-center gap-1 text-green-400 text-xs">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            <span>Live Support Online</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <Globe className="w-3 h-3" />
          <span>🇮🇳 EN | ₹ INR</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="relative z-20 px-6 py-5 flex justify-between items-center backdrop-blur-sm">
        {/* Logo with Enhanced Styling */}
        <div className="group cursor-pointer">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Crown className="w-8 h-8 text-yellow-300 group-hover:text-yellow-200 transition-all duration-300 group-hover:rotate-12" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <div className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text tracking-wide drop-shadow-2xl group-hover:scale-105 transition-transform duration-300">
              MAHAVEERABOOK
            </div>
          </div>
          <div className="text-xs text-yellow-400/80 font-medium tracking-widest mt-1 group-hover:text-yellow-300 transition-colors">
            PREMIUM GAMING EXPERIENCE
          </div>
        </div>

        {/* Desktop Menu with Enhanced Styling */}
        <ul className="hidden md:flex space-x-8 text-sm font-semibold">
          {[
            { name: 'Home', icon: Trophy },
            { name: 'Casino', icon: Star },
            { name: 'Sports', icon: Zap },
           /*  { name: 'Live Games', icon: Crown }, */
            { name: 'Promotions', icon: Star },
            { name: 'Contact', icon: Phone }
          ].map((link) => {
            const IconComponent = link.icon
            return (
              <li key={link.name} className="group cursor-pointer relative">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg backdrop-blur-sm">
                  <IconComponent className="w-4 h-4 group-hover:text-yellow-400 transition-colors" />
                  <span className="group-hover:text-yellow-400 transition-colors">{link.name}</span>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-red-500 group-hover:w-full transition-all duration-300"></div>
              </li>
            )
          })}
        </ul>

        {/* Enhanced Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="px-6 py-3 border-2 border-yellow-500 text-yellow-300 rounded-lg font-semibold hover:bg-yellow-500 hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 relative overflow-hidden group">
            <span className="relative z-10">Login</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50 hover:scale-105 relative overflow-hidden group">
            <span className="relative z-10 flex items-center gap-2">
              <Star className="w-4 h-4" />
              Register
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </button>
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

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden relative z-30 bg-black/95 backdrop-blur-lg px-6 pb-6 space-y-4 border-t border-yellow-700/30">
          {[
            { name: 'Home', icon: Trophy },
            { name: 'Casino', icon: Star },
            { name: 'Sports', icon: Zap },
       
            { name: 'Promotions', icon: Star },
            { name: 'Contact', icon: Phone }
          ].map((link) => {
            const IconComponent = link.icon
            return (
              <div key={link.name} className="flex items-center gap-3 text-sm text-gray-300 hover:text-yellow-400 cursor-pointer p-3 rounded-lg hover:bg-white/10 transition-all duration-300">
                <IconComponent className="w-4 h-4" />
                <span>{link.name}</span>
              </div>
            )
          })}
          <div className="flex flex-col gap-3 mt-6 pt-4 border-t border-yellow-700/30">
            <button className="px-4 py-3 border-2 border-yellow-500 text-yellow-300 rounded-lg hover:bg-yellow-500 hover:text-black transition-all duration-300 font-semibold">
              Login
            </button>
            <button className="px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black rounded-lg font-bold hover:from-yellow-400 hover:to-yellow-300 transition-all duration-300 flex items-center justify-center gap-2">
              <Star className="w-4 h-4" />
              Register
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Marquee Section */}
      <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 shadow-inner">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        <div className="relative z-10 py-2 px-4">
          <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
            <Trophy className="w-4 h-4 animate-bounce" />
            <div className="overflow-hidden whitespace-nowrap flex-1">
              <div className="animate-scroll inline-block">
                🎰 Best Gaming Site in India • 🏆 Welcome Bonus Up to ₹50,000 • 🎲 Live Casino Available 24/7 • 🏏 Sports Betting with Best Odds • 🎁 Daily Promotions & Rewards • 
              </div>
            </div>
            <Zap className="w-4 h-4 animate-pulse text-red-500" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(100vw); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
      `}</style>
    </header>
  )
}