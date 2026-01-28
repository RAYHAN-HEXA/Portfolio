import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaHeart,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import rayhanLogo from "../assets/RAYHAN-LOGO.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/rayhan-hexa",
      label: "GitHub",
      color: "hover:text-gray-100",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/rayhan-fullstack/",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/ray.han.911782/",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer
      className={`relative border-t overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-slate-900/90 to-slate-950 border-purple-500/20"
          : "bg-gradient-to-b from-gray-100 to-white border-gray-200"
      }`}
    >
      {/* Animated Background Elements - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <motion.div
          className={`absolute -top-20 -left-20 w-60 h-60 rounded-full blur-2xl ${
            theme === "dark" ? "bg-purple-500/10" : "bg-purple-500/5"
          }`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute -bottom-20 -right-20 w-60 h-60 rounded-full blur-2xl ${
            theme === "dark" ? "bg-pink-500/10" : "bg-pink-500/5"
          }`}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="py-12 grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-4 mb-6">
              {/* Professional Footer Logo */}
              <div className="relative group">
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-60"
                  style={{
                    background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #10b981, #6366f1)',
                    padding: '3px',
                    borderRadius: '50%'
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <div 
                    className="w-full h-full rounded-full"
                    style={{ background: 'var(--bg-primary)' }}
                  ></div>
                </motion.div>
                
                {/* Logo Image */}
                <motion.div
                  className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-transparent p-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)'
                  }}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={rayhanLogo}
                    alt="RAYHAN"
                    className="w-full h-full rounded-full object-cover bg-white"
                  />
                </motion.div>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle, #6366f1, #8b5cf6)'
                  }}
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold gradient-text-cyan mb-1">
                  MD.RAYHAN
                </h3>
                <p className="text-sm font-medium tracking-wider" style={{ color: 'var(--text-muted)' }}>
                  MERN STACK DEVELOPER
                </p>
                <p
                  className={`text-sm mt-1 ${
                    theme === "dark" ? "text-gray-400" : "text-slate-600"
                  }`}
                >
                  MERN Stack Developer
                </p>
              </div>
            </div>
            <p
              className={`mb-5 text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}
            >
              A passionate Full Stack Developer from Dinajpur, Bangladesh.
              Let&apos;s build something amazing together!
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${
                    theme === "dark"
                      ? "bg-slate-800/80 border border-slate-700/50 text-gray-400 hover:border-purple-500/50"
                      : "bg-gray-100 border border-gray-200 text-slate-600 hover:border-purple-400"
                  } ${social.color}`}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="text-lg" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4
              className={`text-lg font-semibold mb-5 flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              <span className="w-8 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a
                    href={link.href}
                    className={`hover:text-purple-400 transition-all duration-300 flex items-center gap-2 group ${
                      theme === "dark" ? "text-gray-400" : "text-slate-600"
                    }`}
                    whileHover={{ x: 5 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4
              className={`text-lg font-semibold mb-5 flex items-center gap-2 ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              <span className="w-8 h-1 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-full"></span>
              Contact Info
            </h4>
            <ul className="space-y-4">
              <motion.li
                className={`flex items-center gap-3 group ${
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }`}
                whileHover={{ x: 5 }}
              >
                <span
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-purple-400 transition-all ${
                    theme === "dark"
                      ? "bg-slate-800/80 border border-slate-700/50 group-hover:border-purple-500/50"
                      : "bg-gray-100 border border-gray-200 group-hover:border-purple-400"
                  }`}
                >
                  <FaEnvelope />
                </span>
                <span className="text-sm">md.rayhanx617@gmail.com</span>
              </motion.li>
              <motion.li
                className={`flex items-center gap-3 group ${
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }`}
                whileHover={{ x: 5 }}
              >
                <span
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-pink-400 transition-all ${
                    theme === "dark"
                      ? "bg-slate-800/80 border border-slate-700/50 group-hover:border-pink-500/50"
                      : "bg-gray-100 border border-gray-200 group-hover:border-pink-400"
                  }`}
                >
                  <FaPhone />
                </span>
                <span className="text-sm">+8801978730955</span>
              </motion.li>
              <motion.li
                className={`flex items-center gap-3 group ${
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }`}
                whileHover={{ x: 5 }}
              >
                <span
                  className={`w-9 h-9 rounded-lg flex items-center justify-center text-cyan-400 transition-all ${
                    theme === "dark"
                      ? "bg-slate-800/80 border border-slate-700/50 group-hover:border-cyan-500/50"
                      : "bg-gray-100 border border-gray-200 group-hover:border-cyan-400"
                  }`}
                >
                  <FaMapMarkerAlt />
                </span>
                <span className="text-sm">Khulna, Bangladesh</span>
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Copyright Section */}
        <motion.div
          className="py-6 flex flex-col md:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p
            className={`text-sm text-center flex items-center gap-2 flex-wrap justify-center ${
              theme === "dark" ? "text-gray-500" : "text-slate-500"
            }`}
          >
            © {currentYear}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">
              {" "}
              All credits Reserved by MD.RAYHAN
            </span>
            <span className="flex items-center gap-1">
              <FaHeart className="text-red-500 animate-pulse" />
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
