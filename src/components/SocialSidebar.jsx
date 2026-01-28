import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const SocialSidebar = () => {
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/RAYHAN-HEXA",
      label: "GitHub",
      color: "hover:text-white hover:bg-gray-700",
      bgColor: "group-hover:shadow-gray-500/50",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/",
      label: "LinkedIn",
      color: "hover:text-white hover:bg-blue-600",
      bgColor: "group-hover:shadow-blue-500/50",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.me/+8801978730955",
      label: "WhatsApp",
      color: "hover:text-white hover:bg-green-500",
      bgColor: "group-hover:shadow-green-500/50",
    },
    {
      icon: FaEnvelope,
      url: "mailto:MD.RAYHANX67@gmail.com",
      label: "Email",
      color: "hover:text-white hover:bg-red-500",
      bgColor: "group-hover:shadow-red-500/50",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Left Sidebar */}
      <motion.div
        className="fixed left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Vertical Line Top */}
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-transparent via-purple-500/50 to-purple-500"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />

        {/* Social Icons */}
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 hover:border-transparent hover:shadow-lg ${
              theme === "dark"
                ? "bg-slate-800/80 border border-slate-700/50 text-gray-400"
                : "bg-white border border-gray-200 text-slate-600 shadow-md"
            } ${social.color} ${social.bgColor}`}
            aria-label={social.label}
            variants={itemVariants}
            whileHover={{
              scale: 1.2,
              rotate: 360,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="text-xl" />

            {/* Tooltip */}
            <motion.span
              className={`absolute left-14 px-3 py-1.5 text-sm rounded-md whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border ${
                theme === "dark"
                  ? "bg-slate-800 text-white border-slate-700/50"
                  : "bg-white text-slate-800 border-gray-200 shadow-lg"
              }`}
              initial={{ x: -10 }}
              whileHover={{ x: 0 }}
            >
              {social.label}
              <span
                className={`absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 border-4 border-transparent ${
                  theme === "dark" ? "border-r-slate-800" : "border-r-white"
                }`}
              ></span>
            </motion.span>

            {/* Glow Ring */}
            <motion.span
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(168, 85, 247, 0)",
                  "0 0 0 8px rgba(168, 85, 247, 0.1)",
                  "0 0 0 0 rgba(168, 85, 247, 0)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
          </motion.a>
        ))}

        {/* Vertical Line Bottom */}
        <motion.div
          className="w-px h-20 bg-gradient-to-b from-purple-500 via-purple-500/50 to-transparent"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>

      {/* Mobile Bottom Bar - Optimized for performance */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-40 md:hidden py-3 px-4 ${
          theme === "dark"
            ? "bg-slate-900/98 border-t border-slate-800/50"
            : "bg-white/98 border-t border-gray-200"
        }`}
        style={{ willChange: "auto" }}
      >
        <div className="flex justify-center items-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200 active:scale-95 ${
                theme === "dark"
                  ? "bg-slate-800 border border-slate-700/50 text-gray-400"
                  : "bg-gray-100 border border-gray-200 text-slate-600"
              } ${social.color}`}
              aria-label={social.label}
            >
              <social.icon className="text-lg" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialSidebar;
