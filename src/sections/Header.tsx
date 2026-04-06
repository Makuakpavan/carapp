import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Search, User, Heart } from "lucide-react";
import FavoritesModal from "../components/FavoritesModal";
import ProfileModal from "../components/ProfileModal";

type Car = {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const [favorites, setFavorites] = useState<Car[]>([
    {
      id: 1,
      name: "Mercedes-Benz S-Class",
      type: "Sedan",
      price: "$125,000",
      image: "/images/car-1.jpg",
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "/inventory" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glassmorphism py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span
                className="text-2xl font-bold tracking-wider text-white md:text-3xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                LUXE
              </span>
              <span className="text-[#FFD700] text-xl md:text-2xl font-light tracking-[0.3em]">
                AUTOMOTIVE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="items-center hidden gap-8 lg:flex">
            {navLinks.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative text-sm uppercase tracking-wider font-medium transition-colors duration-300 underline-animation ${
                  location.pathname === link.href
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Icons */}
          <div className="items-center hidden gap-5 lg:flex">
            <button
              onClick={() => console.log("Search clicked")}
              className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsProfileOpen(true)}
              className="text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110"
            >
              <User className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsFavoritesOpen(true)}
              className="relative text-white hover:text-[#FFD700] transition-all duration-300 hover:scale-110"
            >
              <Heart className="w-5 h-5" />
              {favorites.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#FFD700] text-black text-xs rounded-full flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`text-lg uppercase tracking-wider font-medium transition-colors duration-300 ${
                  location.pathname === link.href
                    ? "text-[#FFD700]"
                    : "text-white hover:text-[#FFD700]"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-5 pt-4 mt-4 border-t border-white/10">
              <button
                onClick={() => console.log("Search clicked")}
                className="text-white hover:text-[#FFD700] transition-colors duration-300"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsProfileOpen(true)}
                className="text-white hover:text-[#FFD700] transition-colors duration-300"
              >
                <User className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsFavoritesOpen(true)}
                className="relative text-white hover:text-[#FFD700] transition-colors duration-300"
              >
                <Heart className="w-5 h-5" />
                {favorites.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-[#FFD700] text-black text-xs rounded-full flex items-center justify-center font-bold">
                    {favorites.length}
                  </span>
                )}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Modals */}
      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemove={(id) =>
          setFavorites(favorites.filter((fav) => fav.id !== id))
        }
      />
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </header>
  );
};

export default Header;
