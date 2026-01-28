import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import rayhanLogo from "../assets/RAYHAN-LOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/#about" },
    { name: "Skills", path: "/#skills" },
    { name: "Education", path: "/#education" },
    { name: "Projects", path: "/#projects" },
    { name: "Contact", path: "/#contact" },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    if (path.includes("#")) {
      const element = document.getElementById(path.split("#")[1]);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      className={`navbar fixed top-0 z-50 px-4 lg:px-8 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-slate-950/90 backdrop-blur-md shadow-lg border-b border-slate-800/50"
            : "bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/50"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="navbar-start">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link to="/" className="flex items-center gap-3 group">
            {/* Professional Logo Container */}
            <div className="relative">
              {/* Animated gradient border */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-75"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                  padding: '2px',
                  borderRadius: '50%'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div 
                  className="w-full h-full rounded-full"
                  style={{ background: 'var(--bg-primary)' }}
                ></div>
              </motion.div>
              
              {/* Logo Image */}
              <motion.div
                className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-transparent p-0.5"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)'
                }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={rayhanLogo}
                  alt="RAYHAN"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </motion.div>
              
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{
                  background: 'radial-gradient(circle, #6366f1, #8b5cf6)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
            
            {/* Professional Text Logo */}
            <div className="flex flex-col">
              <motion.span
                className="text-xl font-bold gradient-text-cyan"
                whileHover={{ scale: 1.05 }}
              >
                RAYHAN
              </motion.span>
              <span 
                className="text-xs font-medium tracking-wider"
                style={{ color: 'var(--text-muted)' }}
              >
                DEVELOPER
              </span>
            </div>
          </Link>
        </motion.div>
      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.a
                href={link.path}
                onClick={() => handleNavClick(link.path)}
                className="font-medium hover:text-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* Theme Toggle Button */}
        <motion.button
          className={`btn btn-ghost btn-circle ${
            theme === "dark" ? "text-yellow-400" : "text-slate-700"
          }`}
          onClick={toggleTheme}
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.95 }}
          title={
            theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
        >
          <AnimatePresence mode="wait">
            {theme === "dark" ? (
              <motion.svg
                key="sun"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </motion.svg>
            ) : (
              <motion.svg
                key="moon"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mobile Menu Button */}
        <div className="lg:hidden relative">
          <motion.button
            className="btn btn-ghost btn-circle"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
          <AnimatePresence>
            {isOpen && (
              <motion.ul
                className={`menu absolute right-0 top-full mt-3 z-50 p-2 shadow-lg backdrop-blur-md rounded-box w-52 border ${
                  theme === "dark"
                    ? "bg-slate-900/95 border-slate-700/50"
                    : "bg-white/95 border-gray-200/50"
                }`}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.path}
                      onClick={() => handleNavClick(link.path)}
                      className={`font-medium ${
                        theme === "dark"
                          ? "hover:bg-slate-800/50"
                          : "hover:bg-gray-100/50 text-slate-700"
                      }`}
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
