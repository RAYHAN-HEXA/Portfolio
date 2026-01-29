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

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  const socialLinks = [
    {
       icon: FaGithub,
      url: "https://github.com/rayhan-hexa",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/rayhan-fullstack/",
      label: "LinkedIn",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/",
      label: "Twitter",
    },
    {
      icon: FaFacebook,
      url: "https://www.facebook.com/ray.han.911782/",
      label: "Facebook",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer
      className={`border-t ${
        theme === "dark"
          ? "bg-slate-900 border-slate-800"
          : "bg-gray-50 border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-2 gradient-text-cyan">
              RAYHAN
            </h3>
            <p className="text-sm font-medium mb-4">MERN Stack Developer</p>
            <p
              className={`mb-6 text-sm leading-relaxed ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}
            >
              A passionate Full Stack Developer from Bangladesh.
              Let&apos;s build something amazing together!
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white"
                      : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800 border border-gray-200"
                  }`}
                  aria-label={social.label}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-lg font-semibold mb-6 ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`hover:text-primary transition-colors duration-300 ${
                      theme === "dark" ? "text-gray-400" : "text-slate-600"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className={`text-lg font-semibold mb-6 ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li
                className={`flex items-center gap-3 ${
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }`}
              >
                <FaEnvelope className="text-primary" />
                <span className="text-sm">md.rayhanx617@gmail.com</span>
              </li>
              <li
                className={`flex items-center gap-3 ${
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }`}
              >
                <FaPhone className="text-primary" />
                <span className="text-sm">+8801978730955</span>
              </li>
              <li
                className={`flex items-center gap-3 ${
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }`}
              >
                <FaMapMarkerAlt className="text-primary" />
                <span className="text-sm">Khulna, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`h-px ${
            theme === "dark" ? "bg-slate-800" : "bg-gray-200"
          }`}
        />

        {/* Copyright Section */}
        <div className="py-6 text-center">
          <p
            className={`text-sm flex items-center justify-center gap-2 ${
              theme === "dark" ? "text-gray-500" : "text-slate-500"
            }`}
          >
            © {currentYear} All rights reserved by RAYHAN
            <FaHeart className="text-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
