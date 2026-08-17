import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid #1A1A1A' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="w-full px-6 lg:px-12 py-5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm transition-all duration-200 group-hover:scale-110"
            style={{ backgroundColor: '#FA4500', color: '#FFFFFF' }}
          >
            E
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">elio</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: '#888888' }}
              onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.target.style.color = '#888888')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: '#FA4500', color: '#FFFFFF' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#FF6B35')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#FA4500')}
          >
            Get Started
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-md transition-colors duration-200"
          style={{ color: '#888888' }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
          style={{ backgroundColor: 'rgba(10,10,10,0.98)', borderBottom: '1px solid #1A1A1A' }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium py-2 transition-colors duration-200"
              style={{ color: '#888888' }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-2 transition-all duration-200"
            style={{ backgroundColor: '#FA4500', color: '#FFFFFF' }}
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  )
}