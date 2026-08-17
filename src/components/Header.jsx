import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react'

const productCategories = [
  { name: 'EET Products', slug: 'eet-products' },
  { name: 'CRS Products', slug: 'crs-products' },
  { name: 'Chint Products', slug: 'chint-products' },
  { name: 'Medium Voltage', slug: 'medium-voltage' },
  { name: 'Danfoss & Vacon', slug: 'danfoss-vacon' },
  { name: 'ABB Products', slug: 'abb-products' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setProductsOpen(false)
  }, [location])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#FA4500] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="font-medium">Electro Technology Specialists</span>
          <div className="flex items-center gap-6">
            <a href="tel:+27116746000" className="flex items-center gap-1.5 hover:text-orange-200 transition-colors">
              <Phone size={12} />
              +27 11 674 6000
            </a>
            <a href="mailto:info@elio.co.za" className="flex items-center gap-1.5 hover:text-orange-200 transition-colors">
              <Mail size={12} />
              info@elio.co.za
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/50' : 'bg-[#0E0E0E]'} border-b border-[#1A1A1A]`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 bg-[#FA4500] rounded flex items-center justify-center">
                <span className="text-white font-black text-xl leading-none">E</span>
              </div>
              <div>
                <span className="text-white font-bold text-xl tracking-tight">ELIO</span>
                <div className="text-[#FA4500] text-xs font-medium tracking-widest uppercase leading-none">Electro Tech</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-[#FA4500]' : 'text-gray-300 hover:text-white hover:bg-[#1A1A1A]'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-[#FA4500]' : 'text-gray-300 hover:text-white hover:bg-[#1A1A1A]'}`
                }
              >
                About
              </NavLink>

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname.startsWith('/products') ? 'text-[#FA4500]' : 'text-gray-300 hover:text-white hover:bg-[#1A1A1A]'}`}
                >
                  Products
                  <ChevronDown size={14} className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />
                </button>
                {productsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-[#0E0E0E] border border-[#1A1A1A] rounded-lg shadow-xl shadow-black/50 py-2 animate-fade-in">
                    <Link
                      to="/products"
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1A1A1A] transition-colors"
                    >
                      All Products
                    </Link>
                    <div className="border-t border-[#1A1A1A] my-1" />
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/products/${cat.slug}`}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-[#1A1A1A] transition-colors"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-[#FA4500]' : 'text-gray-300 hover:text-white hover:bg-[#1A1A1A]'}`
                }
              >
                Gallery
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-[#FA4500]' : 'text-gray-300 hover:text-white hover:bg-[#1A1A1A]'}`
                }
              >
                Contact
              </NavLink>
            </nav>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center px-5 py-2 bg-[#FA4500] text-white text-sm font-semibold rounded-lg hover:bg-[#e03d00] transition-colors"
              >
                Get a Quote
              </Link>