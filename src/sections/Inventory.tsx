import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Fuel, Zap, Settings } from "lucide-react";
import CarDetailModal from "../components/CarDetailModal";

interface Car {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
  engine: string;
  horsepower: string;
  transmission: string;
}

const cars: Car[] = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    type: "Sedan",
    price: "$125,000",
    image: "/images/car-1.jpg",
    engine: "4.0L V8",
    horsepower: "496 HP",
    transmission: "Automatic",
  },
  {
    id: 2,
    name: "Porsche 911 Carrera",
    type: "Sports Car",
    price: "$145,000",
    image: "/images/car-2.jpg",
    engine: "3.0L Twin-Turbo",
    horsepower: "379 HP",
    transmission: "PDK",
  },
  {
    id: 3,
    name: "Range Rover Autobiography",
    type: "Luxury SUV",
    price: "$180,000",
    image: "/images/car-3.jpg",
    engine: "4.4L V8",
    horsepower: "523 HP",
    transmission: "AWD",
  },
  {
    id: 4,
    name: "BMW M8 Competition",
    type: "Coupe",
    price: "$135,000",
    image: "/images/car-4.jpg",
    engine: "4.4L V8",
    horsepower: "617 HP",
    transmission: "xDrive",
  },
  {
    id: 5,
    name: "Audi RS7",
    type: "Sedan",
    price: "$128,000",
    image: "/images/car-5.jpg",
    engine: "4.0L V8",
    horsepower: "591 HP",
    transmission: "quattro",
  },
  {
    id: 6,
    name: "Lamborghini Urus",
    type: "Luxury SUV",
    price: "$230,000",
    image: "/images/car-6.jpg",
    engine: "4.0L V8",
    horsepower: "657 HP",
    transmission: "AWD",
  },
];

const filters = ["All Cars", "Sedan", "Sports Car", "Luxury SUV", "Coupe"];

const Inventory = () => {
  const [activeFilter, setActiveFilter] = useState("All Cars");
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredCars =
    activeFilter === "All Cars"
      ? cars
      : cars.filter((car) => car.type === activeFilter);

  return (
    <section
      id="inventory"
      ref={sectionRef}
      className="relative py-24 overflow-hidden bg-black md:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #FFD700 0, #FFD700 1px, transparent 0, transparent 50%)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <span className="section-subtitle">Latest Inventory</span>
          <h2
            className="mx-auto section-title"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Explore Our Premium Collection
          </h2>
          <p className="mx-auto section-description">
            Handpicked luxury vehicles, each meticulously inspected and ready to
            deliver an exceptional driving experience.
          </p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "200ms" }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#FFD700] text-black"
                  : "bg-white/5 text-white border border-white/20 hover:border-[#FFD700] hover:text-[#FFD700]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className={`group relative bg-white/5 border border-white/10 overflow-hidden transition-all duration-700 hover:border-[#FFD700]/30 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 px-4 py-1 bg-[#FFD700] text-black text-xs uppercase tracking-wider font-medium">
                  {car.type}
                </div>

                {/* Price */}
                <div className="absolute text-right bottom-4 right-4">
                  <div
                    className="text-[#FFD700] text-2xl font-bold"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {car.price}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-white text-xl font-medium mb-4 group-hover:text-[#FFD700] transition-colors duration-300"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {car.name}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <Fuel className="w-5 h-5 text-[#FFD700] mx-auto mb-1" />
                    <span className="text-xs text-gray-400">{car.engine}</span>
                  </div>
                  <div className="text-center">
                    <Zap className="w-5 h-5 text-[#FFD700] mx-auto mb-1" />
                    <span className="text-xs text-gray-400">
                      {car.horsepower}
                    </span>
                  </div>
                  <div className="text-center">
                    <Settings className="w-5 h-5 text-[#FFD700] mx-auto mb-1" />
                    <span className="text-xs text-gray-400">
                      {car.transmission}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button
                  onClick={() => {
                    setSelectedCar(car);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-3 border border-white/20 text-white text-sm uppercase tracking-wider font-medium hover:bg-[#FFD700] hover:border-[#FFD700] hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  View Details
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          style={{ transitionDelay: "900ms" }}
        >
          <button
            onClick={() => navigate("/inventory")}
            className="btn-primary"
          >
            View All Inventory
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>

      {/* Modal */}
      <CarDetailModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedCar(null);
        }}
        car={selectedCar}
      />
    </section>
  );
};

export default Inventory;
