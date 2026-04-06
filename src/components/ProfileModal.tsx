import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { X, User, LogOut, Settings } from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal = ({ isOpen, onClose }: ProfileModalProps) => {
  const handleLogout = () => {
    console.log("User logged out");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm bg-gradient-to-br from-gray-900 to-black border border-[#FFD700]/20">
        <DialogHeader className="flex items-center justify-between">
          <DialogTitle
            className="text-2xl font-bold text-white flex items-center gap-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <User className="w-6 h-6 text-[#FFD700]" />
            Profile
          </DialogTitle>
          <DialogClose className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </DialogClose>
        </DialogHeader>

        <div className="py-6 space-y-4">
          {/* Profile Section */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="w-12 h-12 rounded-full bg-[#FFD700] flex items-center justify-center text-black text-xl font-bold">
              JD
            </div>
            <div>
              <h3 className="text-white font-medium">John Doe</h3>
              <p className="text-gray-500 text-sm">john@example.com</p>
            </div>
          </div>

          {/* User Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
              <p className="text-[#FFD700] text-2xl font-bold">3</p>
              <p className="text-gray-400 text-sm">Favorites</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-lg text-center">
              <p className="text-[#FFD700] text-2xl font-bold">1</p>
              <p className="text-gray-400 text-sm">Test Drives</p>
            </div>
          </div>

          {/* Menu Items */}
          <button className="w-full flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg text-white hover:border-[#FFD700]/30 hover:bg-[#FFD700]/5 transition">
            <Settings className="w-5 h-5 text-[#FFD700]" />
            <span>Account Settings</span>
          </button>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 hover:border-red-500/40 hover:bg-red-500/20 transition"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
