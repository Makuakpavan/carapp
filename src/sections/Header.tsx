import { useState, useEffect } from 'react';
import { Menu, X, Search, User, Heart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Inventory', href: '#inventory' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glassmorphism py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <span className="text-2xl md:text-3xl font-bold text-white tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                LUXE
              </span>
              <span className="text-[#FFD700] text-xl md:text-2xl font-light tracking-[0.3em]">
                AUTOMOTIVE
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-white text-sm uppercase tracking-wider font-medium hover:text-[#FFD700] transition-colors duration-300 underline-animation"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110">
              <User className="w-5 h-5" />
            </button>
            <button className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-lg uppercase tracking-wider font-medium hover:text-[#FFD700] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center gap-5 mt-4 pt-4 border-t border-white/10">
              <button className="text-white hover:text-[#FFD700] transition-colors duration-300">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-[#FFD700] transition-colors duration-300">
                <User className="w-5 h-5" />
              </button>
              <button className="text-white hover:text-[#FFD700] transition-colors duration-300">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
