import { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Send,
  ArrowRight
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Inventory', href: '#inventory' },
  { name: 'Services', href: '#services' },
  { name: 'About Us', href: '#about' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  { name: 'Vehicle Sales', href: '#' },
  { name: 'Financing', href: '#' },
  { name: 'Trade-In', href: '#' },
  { name: 'Maintenance', href: '#' },
  { name: 'Customization', href: '#' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Main Footer */}
      <div className="w-full px-4 py-16 sm:px-6 lg:px-12 xl:px-20 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <span className="text-2xl font-bold tracking-wider text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                LUXE
              </span>
              <span className="text-[#FFD700] text-lg tracking-[0.3em]">
                AUTOMOTIVE
              </span>
            </a>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              Your premier destination for luxury vehicles. We bring the world's 
              finest automobiles to discerning drivers.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black transition-all duration-300 hover:rotate-[10deg]"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="mb-6 text-lg font-medium text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#FFD700] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 transition-all duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="mb-6 text-lg font-medium text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-400 text-sm hover:text-[#FFD700] transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 transition-all duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="mb-6 text-lg font-medium text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  123 Luxury Lane, Maitama street, Jos Plateau State
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  +234 810 7048 910
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  makuakpavan022@gmail.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Mon-Sat: 8:30AM - 6:00PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="pt-12 mt-16 border-t border-white/10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h4 
                className="mb-2 text-xl font-medium text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Stay Updated
              </h4>
              <p className="text-sm text-gray-400">
                Subscribe for exclusive offers and automotive insights.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 bg-white/5 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#FFD700] transition-colors duration-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-4 bg-[#FFD700] text-black font-medium uppercase tracking-wider text-sm hover:bg-white transition-colors duration-300 flex items-center gap-2"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 py-6 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Luxe Automotive. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-500 text-sm hover:text-[#FFD700] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-[#FFD700] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-[#FFD700] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
