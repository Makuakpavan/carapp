import { useEffect, useRef, useState } from 'react';
import { Car, Calculator, RefreshCw, Wrench, Paintbrush, Star } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Vehicle Sales',
    description: 'Premium new and pre-owned vehicles from the world\'s finest manufacturers.',
  },
  {
    icon: Calculator,
    title: 'Financing Options',
    description: 'Flexible financing solutions tailored to your needs and budget.',
  },
  {
    icon: RefreshCw,
    title: 'Trade-In Services',
    description: 'Get the best value for your current vehicle with our transparent appraisal process.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & Repairs',
    description: 'Factory-trained technicians and genuine parts for optimal performance.',
  },
  {
    icon: Paintbrush,
    title: 'Vehicle Customization',
    description: 'Personalize your vehicle with premium accessories and custom modifications.',
  },
  {
    icon: Star,
    title: 'Concierge Services',
    description: 'White-glove service including delivery, pickup, and exclusive events.',
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD700]/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-subtitle">Our Services</span>
          <h2 
            className="section-title mx-auto"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Comprehensive Auto Solutions
          </h2>
          <p className="section-description mx-auto">
            From sales to service, we provide end-to-end automotive solutions for discerning clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative p-8 bg-white/5 border border-white/10 hover:bg-[#FFD700]/5 hover:border-[#FFD700]/30 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ 
                transitionDelay: `${300 + index * 100}ms`,
                transform: isVisible ? `translateY(${index % 2 === 0 ? '0' : '20px'})` : 'translateY(80px)'
              }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 flex items-center justify-center bg-[#FFD700]/10 text-[#FFD700] group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-500">
                  <service.icon className="w-8 h-8 group-hover:rotate-[360deg] transition-transform duration-700" />
                </div>
                {/* Floating animation */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#FFD700]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 
                className="text-white text-xl font-medium mb-3 group-hover:text-[#FFD700] transition-colors duration-300"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FFD700] group-hover:w-full transition-all duration-500" />

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/10 group-hover:border-[#FFD700]/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/10 group-hover:border-[#FFD700]/50 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '900ms' }}>
          <p className="text-gray-400 mb-6">
            Need a custom solution? Our team is ready to assist you.
          </p>
          <a href="#contact" className="btn-secondary">
            Contact Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
