import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Image Side */}
        <div 
          className={`relative h-64 lg:h-auto overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <img
            src="/images/cta-bg.jpg"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 lg:bg-gradient-to-l lg:from-black lg:to-transparent" />
        </div>

        {/* Content Side */}
        <div className="relative flex items-center bg-black">
          {/* Diagonal Divider */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-black" 
               style={{ clipPath: 'polygon(100% 0, 0 0, 0 100%)' }} />

          <div className="w-full px-8 md:px-16 py-16 lg:py-0">
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
              <span className="section-subtitle">Get Started</span>
              <h2 
                className="text-3xl md:text-4xl lg:text-5xl text-white mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Ready to Find Your Dream Car?
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg">
                Let our experts guide you to the perfect vehicle. Schedule a consultation 
                today and experience the luxury difference.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#inventory" 
                  className="btn-primary animate-pulse-glow"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a 
                  href="#" 
                  className="btn-secondary"
                >
                  Schedule a Call
                </a>
              </div>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Call Us</span>
                    <p className="text-white text-lg mt-1">+1 (800) 555-LUXE</p>
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm uppercase tracking-wider">Email Us</span>
                    <p className="text-white text-lg mt-1">info@luxeautomotive.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
