import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { Fuel, Zap, Settings, X } from "lucide-react";

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

interface CarDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: Car | null;
}

const CarDetailModal = ({ isOpen, onClose, car }: CarDetailModalProps) => {
  if (!car) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-[#FFD700]/20">
        <DialogHeader className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-br from-gray-900 to-black pb-4">
          <DialogTitle
            className="text-2xl font-bold text-white"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            {car.name}
          </DialogTitle>
          <DialogClose className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </DialogClose>
        </DialogHeader>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6 py-6">
          {/* Image */}
          <div className="relative">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-64 md:h-80 object-cover rounded-lg border border-[#FFD700]/20"
            />
            <div className="absolute top-3 left-3 px-3 py-1 bg-[#FFD700] text-black text-xs uppercase tracking-wider font-medium rounded">
              {car.type}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            {/* Price */}
            <div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                Price
              </p>
              <p
                className="text-3xl font-bold text-[#FFD700] mb-6"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                {car.price}
              </p>
            </div>

            {/* Specs Grid */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Fuel className="w-5 h-5 text-[#FFD700]" />
                  <p className="text-gray-400 text-sm">Engine</p>
                </div>
                <p className="text-white font-medium">{car.engine}</p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="w-5 h-5 text-[#FFD700]" />
                  <p className="text-gray-400 text-sm">Horsepower</p>
                </div>
                <p className="text-white font-medium">{car.horsepower}</p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Settings className="w-5 h-5 text-[#FFD700]" />
                  <p className="text-gray-400 text-sm">Transmission</p>
                </div>
                <p className="text-white font-medium">{car.transmission}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <button className="px-4 py-3 bg-[#FFD700] text-black font-medium uppercase tracking-wider text-sm hover:bg-yellow-400 transition-colors rounded-lg">
                Schedule Test Drive
              </button>
              <button className="px-4 py-3 border border-[#FFD700] text-[#FFD700] font-medium uppercase tracking-wider text-sm hover:bg-[#FFD700] hover:text-black transition-colors rounded-lg">
                Contact Dealer
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CarDetailModal;
