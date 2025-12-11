import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

function DevBanner() {
  return (
    <motion.div
      className="w-full bg-gradient-to-r from-black-500 via-red-1000 to-black-500 text-white"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-center gap-4">
        {/* Icon and Message */}
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <AlertCircle size={20} className="flex-shrink-0" />
          </motion.div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="font-semibold text-sm sm:text-base">
              🚧 Under Development
            </span>
            <span className="text-xs sm:text-sm text-white/90">
              This portfolio is currently being built. Some features may be incomplete.
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default DevBanner;
