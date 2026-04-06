import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScheduleCallModal from "../components/ScheduleCallModal";

const CTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
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
      className="relative py-24 overflow-hidden bg-black md:py-32"
    >
      <div className="grid lg:grid-cols-2 min-h-[500px]">
        {/* Image Side */}
        <div
          className={`relative h-64 lg:h-auto overflow-hidden transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <img
            src="/images/cta-bg.jpg"
            alt="Luxury Interior"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/70 lg:bg-gradient-to-l lg:from-black lg:to-transparent" />
        </div>

        {/* Content Side */}
        <div className="relative flex items-center bg-black">
          {/* Diagonal Divider */}
          <div
            className="absolute top-0 bottom-0 left-0 hidden w-32 lg:block bg-gradient-to-r from-transparent to-black"
            style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
          />

          <div className="w-full px-8 py-16 md:px-16 lg:py-0">
            <div
              className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "300ms" }}
            >
              <span className="section-subtitle">Get Started</span>
              <h2
                className="mb-6 text-3xl text-white md:text-4xl lg:text-5xl"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Ready to Find Your Dream Car?
              </h2>
              <p className="max-w-lg mb-8 text-lg leading-relaxed text-gray-400">
                Let our experts guide you to the perfect vehicle. Schedule a
                consultation today and experience the luxury difference.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => navigate("/inventory")}
                  className="btn-primary animate-pulse-glow"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button
                  onClick={() => setIsScheduleModalOpen(true)}
                  className="btn-secondary"
                >
                  Schedule a Call
                </button>
              </div>

              {/* Contact Info */}
              <div className="pt-8 mt-12 border-t border-white/10">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <span className="text-sm tracking-wider text-gray-500 uppercase">
                      Call Us
                    </span>
                    <p className="mt-1 text-lg text-white">(+234) 810-7048-910</p>
                  </div>
                  <div>
                    <span className="text-sm tracking-wider text-gray-500 uppercase">
                      Email Us
                    </span>
                    <p className="mt-1 text-lg text-white">
                      makuakpavan022@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule Call Modal */}
      <ScheduleCallModal
        isOpen={isScheduleModalOpen}
        onClose={() => setIsScheduleModalOpen(false)}
      />
    </section>
  );
};

export default CTA;
