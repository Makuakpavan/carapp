import { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 2500, suffix: '+', label: 'Vehicles Sold' },
  { value: 15, suffix: '', label: 'Years of Experience' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
  { value: 50, suffix: '+', label: 'Premium Brands' },
];

const useCountUp = (end: number, duration: number = 2000, start: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (ease-out expo)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
};

const StatItem = ({ stat, isVisible, delay }: { stat: Stat; isVisible: boolean; delay: number }) => {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div 
      className={`text-center transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div 
        className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFD700] mb-2"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {count.toLocaleString()}{stat.suffix}
      </div>
      <div className="text-white/80 text-sm uppercase tracking-wider">
        {stat.label}
      </div>
    </div>
  );
};

const Statistics = () => {
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
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 min-h-[600px]">
        {/* Image Side */}
        <div 
          className={`relative h-64 lg:h-auto overflow-hidden transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <img
            src="/images/statistics.jpg"
            alt="Luxury Showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:bg-gradient-to-l lg:from-black lg:to-transparent" />
        </div>

        {/* Stats Side */}
        <div className="relative flex items-center bg-black">
          {/* Diagonal Divider */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-transparent to-black" 
               style={{ clipPath: 'polygon(100% 0, 0 0, 0 100%)' }} />

          <div className="w-full px-8 md:px-16 py-16 lg:py-0">
            {/* Header */}
            <div className={`mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <span className="section-subtitle">Our Achievements</span>
              <h2 
                className="text-3xl md:text-4xl text-white"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                Numbers That Speak Excellence
              </h2>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <StatItem 
                  key={stat.label} 
                  stat={stat} 
                  isVisible={isVisible} 
                  delay={500 + index * 150}
                />
              ))}
            </div>

            {/* Decorative Line */}
            <div 
              className={`mt-12 h-[1px] bg-gradient-to-r from-[#FFD700]/50 to-transparent transition-all duration-1000 ${
                isVisible ? 'opacity-100 w-full' : 'opacity-0 w-0'
              }`}
              style={{ transitionDelay: '1200ms' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
