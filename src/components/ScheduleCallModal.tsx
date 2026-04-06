import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";
import { X, Phone } from "lucide-react";
import { useState } from "react";

interface ScheduleCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ScheduleCallModal = ({ isOpen, onClose }: ScheduleCallModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Schedule Call Form Submitted:", formData);
    setSubmitted(true);

    // Reset form after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
      });
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm sm:max-w-md max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black border border-[#FFD700]/20">
        <DialogHeader className="sticky top-0 z-10 flex items-center justify-between bg-gradient-to-br from-gray-900 to-black pb-4">
          <DialogTitle
            className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#FFD700]" />
            Schedule a Call
          </DialogTitle>
          <DialogClose className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </DialogClose>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 rounded-full bg-[#FFD700] text-black flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-white text-lg font-medium mb-2">Thank You!</h3>
            <p className="text-gray-400 text-sm sm:text-base">
              We'll contact you soon to confirm your appointment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 py-6">
            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#FFD700] focus:outline-none transition text-sm sm:text-base"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#FFD700] focus:outline-none transition text-sm sm:text-base"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#FFD700] focus:outline-none transition text-sm sm:text-base"
                placeholder="+1 (800) 555-0000"
              />
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm text-gray-400 mb-2">
                  Preferred Time
                </label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition text-sm sm:text-base"
                >
                  <option value="">Select time</option>
                  <option value="09:00">09:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">02:00 PM</option>
                  <option value="15:00">03:00 PM</option>
                  <option value="16:00">04:00 PM</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full mt-6 px-4 sm:px-6 py-3 bg-[#FFD700] text-black font-medium uppercase tracking-wider text-xs sm:text-sm hover:bg-yellow-400 transition-colors rounded-lg"
            >
              Confirm Appointment
            </button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleCallModal;
