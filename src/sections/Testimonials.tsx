import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Michael Richardson',
    title: 'Exceptional Service',
    quote: 'From the moment I walked in, I knew I was in good hands. The team found me the perfect vehicle and made the entire process seamless. Truly a world-class experience.',
    image: '/images/client-1.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Chen',
    title: 'Beyond Expectations',
    quote: 'The attention to detail and personalized service exceeded all my expectations. They didn\'t just sell me a car; they delivered a luxury experience.',
    image: '/images/client-2.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'James Morrison',
    title: 'Unmatched Quality',
    quote: 'I\'ve purchased vehicles from dealerships around the world, and this stands out as the best. Their commitment to excellence is evident in every interaction.',
    image: '/images/client-3.jpg',
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-subtitle">Testimonials</span>
          <h2 
            className="section-title mx-auto"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Our Clients Say
          </h2>
          <p className="section-description mx-auto">
            Hear from the discerning drivers who have experienced the luxury difference.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className={`relative max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '300ms' }}>
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-[#FFD700]/10 flex items-center justify-center">
            <Quote className="w-8 h-8 text-[#FFD700]" />
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 pt-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-600 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10 absolute inset-0 p-8 md:p-12 pt-16'
                }`}
              >
                {index === currentIndex && (
                  <>
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-5 h-5 text-[#FFD700] fill-[#FFD700]"
                          style={{ animationDelay: `${i * 100}ms` }}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p 
                      className="text-white text-lg md:text-xl text-center leading-relaxed mb-8"
                      style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                      "{testimonial.quote}"
                    </p>

                    {/* Author */}
                    <div className="flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FFD700]/30 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 
                        className="text-white text-lg font-medium"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                      >
                        {testimonial.name}
                      </h4>
                      <span className="text-[#FFD700] text-sm uppercase tracking-wider">
                        {testimonial.title}
                      </span>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Navigation */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-4">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black transition-all duration-300"
                disabled={isAnimating}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center text-white hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black transition-all duration-300"
                disabled={isAnimating}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 600);
                  }
                }}
                className={`h-1 transition-all duration-500 ${
                  index === currentIndex
                    ? 'w-10 bg-[#FFD700]'
                    : 'w-5 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
