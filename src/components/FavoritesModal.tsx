import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { X, Heart, Trash2 } from "lucide-react";

interface Car {
  id: number;
  name: string;
  type: string;
  price: string;
  image: string;
}

interface FavoritesModalProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Car[];
  onRemove: (id: number) => void;
}

const FavoritesModal = ({
  isOpen,
  onClose,
  favorites,
  onRemove,
}: FavoritesModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-gray-900 to-black border border-[#FFD700]/20">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle
            className="text-2xl font-bold text-white flex items-center gap-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <Heart className="w-6 h-6 text-[#FFD700] fill-[#FFD700]" />
            My Favorites
          </DialogTitle>
          <DialogClose className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </DialogClose>
        </DialogHeader>

        <div className="py-6">
          {favorites.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-16 h-16 text-gray-600 mx-auto mb-4 opacity-50" />
              <p className="text-gray-400">No favorites yet</p>
              <p className="text-gray-500 text-sm">
                Add cars to your favorites to see them here
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {favorites.map((car) => (
                <div
                  key={car.id}
                  className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#FFD700]/30 transition"
                >
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h4 className="text-white font-medium">{car.name}</h4>
                    <p className="text-gray-400 text-sm">{car.type}</p>
                    <p className="text-[#FFD700] font-bold mt-1">{car.price}</p>
                  </div>
                  <button
                    onClick={() => onRemove(car.id)}
                    className="p-2 hover:bg-red-500/20 text-red-400 hover:text-red-300 rounded transition"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FavoritesModal;
