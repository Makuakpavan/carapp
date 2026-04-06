import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
  cta: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    title: "Experience Luxury on Wheels",
    description:
      "Discover our exclusive collection of premium vehicles. Each car tells a story of craftsmanship, performance, and unparalleled elegance.",
    cta: "Explore Collection",
  },
  {
    id: 2,
    image: "/images/hero-2.jpg",
    title: "Drive Your Dreams",
    description:
      "From sleek sports cars to elegant sedans, find the perfect vehicle that matches your style and ambition.",
    cta: "View Inventory",
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    title: "Excellence in Every Mile",
    description:
      "Premium service, exceptional quality, and a commitment to exceeding your expectations.",
    cta: "Contact Us",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const navigate = useNavigate();

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 800);
  }, [isAnimating]);

  const handleCTAClick = (ctaText: string) => {
    switch (ctaText) {
      case "Explore Collection":
        navigate("/inventory");
        break;
      case "View Inventory":
        navigate("/inventory");
        break;
      case "Contact Us":
        navigate("/cta");
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Ken Burns Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className={`w-full h-full object-cover ${
                index === currentSlide ? "animate-ken-burns" : ""
              }`}
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex items-center h-full">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-3xl">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`transition-all duration-700 ${
                  index === currentSlide
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 absolute"
                }`}
              >
                {index === currentSlide && (
                  <>
                    <div className="mb-4 overflow-hidden">
                      <div
                        className="w-16 h-1 bg-[#FFD700] animate-slide-right"
                        style={{ animationDelay: "0.3s" }}
                      />
                    </div>
                    <h1
                      className="mb-6 text-4xl font-normal leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {slide.title.split(" ").map((word, i) => (
                        <span
                          key={i}
                          className="inline-block animate-slide-up"
                          style={{
                            animationDelay: `${0.4 + i * 0.1}s`,
                            animationFillMode: "both",
                          }}
                        >
                          {word}&nbsp;
                        </span>
                      ))}
                    </h1>
                    <p
                      className="max-w-xl mb-8 text-lg leading-relaxed text-gray-300 md:text-xl animate-fade-in"
                      style={{
                        animationDelay: "0.9s",
                        animationFillMode: "both",
                      }}
                    >
                      {slide.description}
                    </p>
                    <div
                      className="animate-scale-in"
                      style={{
                        animationDelay: "1.2s",
                        animationFillMode: "both",
                      }}
                    >
                      <button
                        onClick={() => handleCTAClick(slide.cta)}
                        className="btn-primary animate-pulse-glow"
                      >
                        {slide.cta}
                        <ChevronRight className="w-5 h-5 ml-2" />
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-30 flex justify-between translate-y-1/2 pointer-events-none bottom-1/2 left-4 right-4">
        <button
          onClick={prevSlide}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 border border-white/30 flex items-center justify-center text-white hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black transition-all duration-300 group"
          disabled={isAnimating}
        >
          <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />
        </button>
        <button
          onClick={nextSlide}
          className="pointer-events-auto w-12 h-12 md:w-14 md:h-14 border border-white/30 flex items-center justify-center text-white hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black transition-all duration-300 group"
          disabled={isAnimating}
        >
          <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute z-30 flex gap-3 -translate-x-1/2 bottom-10 left-1/2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isAnimating) {
                setIsAnimating(true);
                setCurrentSlide(index);
                setTimeout(() => setIsAnimating(false), 800);
              }
            }}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide
                ? "w-10 bg-[#FFD700]"
                : "w-5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute z-30 hidden bottom-10 right-10 lg:block">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs tracking-widest uppercase origin-center rotate-90 translate-y-8">
            Scroll
          </span>
          <div className="w-[1px] h-16 bg-white/30 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-[#FFD700] animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
