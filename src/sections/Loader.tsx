// components/Loader.tsx
export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center gap-6">
        
        {/* Spinner */}
        <div className="relative w-20 h-20">
          
          {/* Background ring */}
          <div className="absolute inset-0 border-4 border-gray-800 rounded-full"></div>

          {/* Animated gradient ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent 
                          border-t-yellow-400 border-r-yellow-300
                          animate-spin
                          shadow-[0_0_20px_rgba(250,204,21,0.6)]">
          </div>

        </div>

        {/* Text */}
        <p className="text-lg font-semibold tracking-wide text-gray-300">
          Loading...
        </p>

      </div>
    </div>
  );
}