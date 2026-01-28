import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaDownload,
} from "react-icons/fa";
import { useToast } from "./Toast";
import { useTheme } from "../context/ThemeContext";
import RAYHANIMG from "../assets/RAYHAN-IMAGE.png";


const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const imageRef = useRef(null);
  const toast = useToast();
  const { theme } = useTheme();

  const handleDownloadResume = () => {
    toast.success("🎉 Resume download started! Thank you for your interest!");
  };

  useEffect(() => {
    const titles = ["MERN Stack Front-End Developer"];
    const currentTitle = titles[loopNum % titles.length];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayText(currentTitle.substring(0, displayText.length + 1));
        setTypingSpeed(150);

        if (displayText === currentTitle) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentTitle.substring(0, displayText.length - 1));
        setTypingSpeed(75);

        if (displayText === "") {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // GSAP animation for profile image
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: -20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  const socialLinks = [
    {
      icon: FaGithub,
      url: "https://github.com/RAYHAN-HEXA",
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
      url: "https://www.facebook.com/",
      label: "Facebook",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { delay: 1 + i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-transparent pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-16 m-l-5 ml-14">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              className="text-lg text-primary font-medium mb-2"
              variants={itemVariants}
            >
              Hello, I&apos;m
            </motion.p>
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              variants={itemVariants}
            >
              <span className="gradient-text-cyan">
                MD.RAYHAN
              </span>
            </h1>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-primary mb-6 min-h-[40px] md:min-h-[48px]"
              variants={itemVariants}
            >
              <span>{displayText}</span>
              <span className="animate-pulse">|</span>
            </motion.h2>
            <motion.p
              className={`text-lg mb-8 max-w-xl ${
                theme === "dark" ? "text-gray-300" : "text-slate-600"
              }`}
              variants={itemVariants}
            >
              Passionate MERN Stack Front-End Developer with 1+ Year of
              experience in building beautiful, responsive, and user-friendly
              web applications using React, Next.js, TypeScript, JavaScript
              (ES6+), Tailwind CSS, and modern web technologies.
            </motion.p>

            {/* Resume Download Button */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              variants={itemVariants}
            >
              <motion.a
                href="/RAYHAN_RESUME.pdf"
                download="RAYHAN_RESUME.pdf"
                onClick={handleDownloadResume}
                className="btn btn-primary btn-lg gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="text-lg" />
                Download Resume
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-outline btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-circle btn-ghost text-2xl hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative" ref={imageRef}>
              {/* Wave Border Ring */}
              <motion.div
                className="absolute inset-0 -m-5 md:-m-7 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{
                  background:
                    "conic-gradient(from 0deg, #a855f7, #ec4899, #22d3ee, #a855f7)",
                  padding: "3px",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}
              >
                <div className="w-full h-full rounded-full bg-slate-950" />
              </motion.div>

              {/* Soft Glow Background */}
              <motion.div
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full blur-2xl"
                style={{ background: 'rgba(99, 102, 241, 0.15)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full blur-2xl"
                style={{ background: 'rgba(139, 92, 246, 0.15)' }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Main Image Container with Gradient Border */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1"
                style={{
                  background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #06b6d4)'
                }}
                animate={{
                  boxShadow: [
                    "0 0 15px rgba(99, 102, 241, 0.3)",
                    "0 0 25px rgba(139, 92, 246, 0.3)",
                    "0 0 15px rgba(99, 102, 241, 0.3)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900">
                  <img
                    src={RAYHANIMG}
                    alt="MD.RAYHAN"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
