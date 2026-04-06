import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, Wrench, Users, DollarSign } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Wide Range of Brands",
    description:
      "From European elegance to American power, explore our diverse collection.",
  },
  {
    icon: Wrench,
    title: "Wide Range of Services",
    description: "Comprehensive care from purchase to maintenance and beyond.",
  },
  {
    icon: Users,
    title: "Customer Satisfaction",
    description:
      "Our commitment to excellence has earned us thousands of loyal clients.",
  },
  {
    icon: DollarSign,
    title: "Competitive Pricing",
    description: "Premium vehicles at prices that reflect true value.",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-black overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FFD700]/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700]/5 rounded-full blur-3xl" />

      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <span className="section-subtitle">About Us</span>
            <h2
              className="section-title"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              We Provide Premium Auto Services
            </h2>
            <p className="section-description mb-10">
              With over two decades of experience in the luxury automotive
              industry, we pride ourselves on delivering exceptional vehicles
              and unparalleled customer service. Our curated collection
              represents the finest automobiles from around the world.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`group p-6 border border-white/10 bg-white/5 hover:bg-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all duration-500 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-[#FFD700]/10 text-[#FFD700] mb-4 group-hover:bg-[#FFD700] group-hover:text-black transition-all duration-300 group-hover:rotate-[360deg]">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-white text-lg font-medium mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`mt-10 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <button
                onClick={() => navigate("/services")}
                className="btn-secondary"
              >
                Learn More About Us
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/about.jpg"
                  alt="Luxury Showroom"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[#FFD700]/30 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-l-2 border-b-2 border-[#FFD700]" />

              {/* Experience Badge */}
              <div className="absolute bottom-8 left-8 bg-black/90 backdrop-blur-sm p-6 border border-[#FFD700]/30">
                <div
                  className="text-5xl font-bold text-[#FFD700] mb-1"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  20+
                </div>
                <div className="text-white text-sm uppercase tracking-wider">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
