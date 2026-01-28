import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useState, useEffect } from "react";

const AnimatedBackground = () => {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Simplified background for mobile to improve performance
  if (isMobile) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden will-change-auto">
        <div
          className={`absolute inset-0 ${
            theme === "dark"
              ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
              : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
          }`}
        />
        {/* Single static gradient for mobile */}
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "opacity-30" : "opacity-20"
          }`}
          style={{
            background:
              theme === "dark"
                ? "radial-gradient(ellipse at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 70%)"
                : "radial-gradient(ellipse at 50% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 70%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden will-change-transform">
      {/* Base gradient background */}
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
            : "bg-gradient-to-br from-gray-50 via-white to-gray-100"
        }`}
      />

      {/* Animated gradient overlay */}
      <motion.div
        className={`absolute inset-0 ${
          theme === "dark" ? "opacity-50" : "opacity-30"
        }`}
        animate={{
          background:
            theme === "dark"
              ? [
                  "radial-gradient(ellipse at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 100% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 100% 100%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 0% 100%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 0% 0%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
                ]
              : [
                  "radial-gradient(ellipse at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 100% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 100% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 0% 100%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                  "radial-gradient(ellipse at 0% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
                ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Soft glow blob 1 - Top left */}
      <motion.div
        className={`absolute -top-40 -left-40 w-80 h-80 rounded-full blur-3xl ${
          theme === "dark" ? "bg-indigo-600/10" : "bg-purple-400/20"
        }`}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft glow blob 2 - Top right */}
      <motion.div
        className={`absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl ${
          theme === "dark" ? "bg-purple-600/8" : "bg-pink-400/15"
        }`}
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft glow blob 3 - Center */}
      <motion.div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl ${
          theme === "dark" ? "bg-slate-700/10" : "bg-purple-300/10"
        }`}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft glow blob 4 - Bottom left */}
      <motion.div
        className={`absolute -bottom-32 -left-32 w-72 h-72 rounded-full blur-3xl ${
          theme === "dark" ? "bg-cyan-600/8" : "bg-cyan-400/15"
        }`}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Soft glow blob 5 - Bottom right */}
      <motion.div
        className={`absolute -bottom-20 -right-32 w-80 h-80 rounded-full blur-3xl ${
          theme === "dark" ? "bg-violet-600/10" : "bg-violet-400/15"
        }`}
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle grid pattern overlay */}
      <div
        className={`absolute inset-0 ${
          theme === "dark" ? "opacity-[0.02]" : "opacity-[0.03]"
        }`}
        style={{
          backgroundImage:
            theme === "dark"
              ? `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `
              : `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette effect */}
      {theme === "dark" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-transparent to-slate-950/50" />
        </>
      )}
    </div>
  );
};

export default AnimatedBackground;
