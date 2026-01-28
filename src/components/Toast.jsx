import {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaTimes,
} from "react-icons/fa";

const ToastContext = createContext(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

const toastIcons = {
  success: FaCheckCircle,
  info: FaInfoCircle,
  warning: FaExclamationTriangle,
  error: FaExclamationTriangle,
};

const toastColors = {
  success: "from-emerald-500 to-green-600",
  info: "from-blue-500 to-cyan-600",
  warning: "from-amber-500 to-orange-600",
  error: "from-red-500 to-rose-600",
};

const Toast = ({ id, message, type = "success", onClose }) => {
  const Icon = toastIcons[type];

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 4000);
    return () => clearTimeout(timer);
  }, [id, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="relative overflow-hidden"
    >
      <div
        className={`flex items-center gap-3 px-5 py-4 rounded-xl bg-gradient-to-r ${toastColors[type]} shadow-2xl backdrop-blur-sm min-w-[300px] max-w-md`}
      >
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-white/10"
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Icon with pulse animation */}
        <motion.div
          className="relative z-10"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Icon className="text-2xl text-white drop-shadow-lg" />
        </motion.div>

        {/* Message */}
        <div className="flex-1 relative z-10">
          <motion.p
            className="text-white font-medium text-sm md:text-base"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            {message}
          </motion.p>
        </div>

        {/* Close button */}
        <motion.button
          onClick={() => onClose(id)}
          className="relative z-10 p-1 rounded-full hover:bg-white/20 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTimes className="text-white/80 text-sm" />
        </motion.button>

        {/* Progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-white/30"
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: 4, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const toast = {
    success: (message) => addToast(message, "success"),
    info: (message) => addToast(message, "info"),
    warning: (message) => addToast(message, "warning"),
    error: (message) => addToast(message, "error"),
  };

  return (
    <ToastContext.Provider value={toast}>
      {children}

      {/* Toast container */}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3">
        <AnimatePresence mode="popLayout">
          {toasts.map((t) => (
            <Toast
              key={t.id}
              id={t.id}
              message={t.message}
              type={t.type}
              onClose={removeToast}
            />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};

export default ToastProvider;
