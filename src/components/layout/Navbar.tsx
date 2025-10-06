'use client'

import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = ['Projects', 'About', 'Skills', 'Contact']

  // Remove scroll-based detection - only use click-based highlighting

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToSection = (section: string, closeMenu: boolean = false) => {
    // Set the active section immediately when clicked
    setActiveSection(section.toLowerCase())
    
    // Resume link removed from navbar
    
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const navbarHeight = 64; // 16 * 4 = 64px (h-16)
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    if (closeMenu) setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer" onClick={() => {
              setActiveSection('')
              scrollToTop()
            }}>
              <span className="text-black font-bold text-lg">GA</span>
            </div>
          </div>

          {/* Desktop Navigation - Positioned at top-right */}
          <div className="hidden md:block">
            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`nav-link text-white px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeSection === item.toLowerCase() ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item)
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button - Positioned at top-right */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="mobile-nav px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`text-white block px-3 py-2 text-base font-medium ${
                    activeSection === item.toLowerCase() ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item, true)
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
