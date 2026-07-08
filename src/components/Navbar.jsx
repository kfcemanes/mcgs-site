import { useState, useEffect } from 'react'
import company from '../config/company'
import logo from '../assets/mcgs-logo-transparent.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt={company.shortName} className="h-12 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {company.navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors duration-300 hover:text-brand-red ${
                  scrolled ? 'text-brand-text' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={company.heroCtaHref}
              className="ml-2 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors duration-200"
            >
              Request a Quote
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`md:hidden flex flex-col gap-1.5 p-2 transition-colors ${
            scrolled ? 'text-brand-text' : 'text-white'
          }`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {company.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-brand-text font-medium py-1 hover:text-brand-red transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={company.heroCtaHref}
                onClick={handleNavClick}
                className="inline-block mt-1 px-5 py-2.5 bg-brand-red text-white text-sm font-semibold rounded hover:bg-red-700 transition-colors"
              >
                Request a Quote
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
