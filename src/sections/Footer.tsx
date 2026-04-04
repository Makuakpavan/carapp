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
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white tracking-wider" style={{ fontFamily: 'Playfair Display, serif' }}>
                LUXE
              </span>
              <span className="text-[#FFD700] text-lg tracking-[0.3em]">
                AUTOMOTIVE
              </span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
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
              className="text-white text-lg font-medium mb-6"
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
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 
              className="text-white text-lg font-medium mb-6"
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
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-white text-lg font-medium mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  123 Luxury Lane, Beverly Hills, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  +1 (800) 555-LUXE
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  info@luxeautomotive.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FFD700] flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Mon-Sat: 9AM - 7PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 
                className="text-white text-xl font-medium mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Stay Updated
              </h4>
              <p className="text-gray-400 text-sm">
                Subscribe for exclusive offers and automotive insights.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <div className="flex-1 relative">
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
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Luxe Automotive. All rights reserved.
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
