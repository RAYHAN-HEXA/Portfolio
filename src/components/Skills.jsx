import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: FaHtml5, level: 90, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, level: 85, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, level: 85, color: "#F7DF1E" },
        { name: "React", icon: FaReact, level: 80, color: "#61DAFB" },
        {
          name: "Tailwind CSS",
          icon: SiTailwindcss,
          level: 85,
          color: "#06B6D4",
        },
        { name: "Next.js", icon: SiNextdotjs, level: 70, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, level: 65, color: "#3178C6" },
      ],
    },
    {
      title: "Backend (Basic)",
      skills: [
        { name: "Node.js", icon: FaNodeJs, level: 50, color: "#339933" },
        { name: "Express.js", icon: SiExpress, level: 50, color: "#000000" },
        { name: "MongoDB", icon: SiMongodb, level: 55, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, level: 60, color: "#FFCA28" },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", icon: FaGitAlt, level: 80, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, level: 85, color: "#181717" },
        { name: "Vite", icon: SiVite, level: 80, color: "#646CFF" },
        { name: "Figma", icon: FaFigma, level: 60, color: "#F24E1E" },
        { name: "Vercel", icon: SiVercel, level: 75, color: "#000000" },
        { name: "Netlify", icon: SiNetlify, level: 70, color: "#00C7B7" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const skillCardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="skills"
      className={`py-20 overflow-hidden ${
        theme === "dark" ? "bg-slate-900/30" : "bg-gray-100/50"
      }`}
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              theme === "dark" ? "text-white" : "text-slate-800"
            }`}
          >
            My Skills
          </h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-slate-600"
            }`}
          >
            As a MERN Stack Front-End Developer, here are the technologies I
            specialize in
          </p>
        </motion.div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: categoryIndex * 0.2 }}
            >
              <motion.h3
                className={`text-2xl font-bold mb-8 text-center ${
                  theme === "dark" ? "text-white" : "text-slate-800"
                }`}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: categoryIndex * 0.2 + 0.2 }}
              >
                {category.title}
              </motion.h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={`backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all group cursor-pointer border ${
                      theme === "dark"
                        ? "bg-slate-800/50 border-slate-700/30"
                        : "bg-white border-gray-200 shadow-md"
                    }`}
                    variants={skillCardVariants}
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="flex flex-col items-center">
                      <motion.div
                        initial={{ rotate: 0 }}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <skill.icon
                          className="text-5xl mb-4"
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <h4
                        className={`font-semibold mb-3 ${
                          theme === "dark" ? "text-white" : "text-slate-700"
                        }`}
                      >
                        {skill.name}
                      </h4>

                      {/* Progress Bar */}
                      <div
                        className={`w-full rounded-full h-2.5 overflow-hidden ${
                          theme === "dark" ? "bg-base-300" : "bg-gray-200"
                        }`}
                      >
                        <motion.div
                          className="h-2.5 rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={
                            isInView
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{
                            duration: 1,
                            delay: skillIndex * 0.1 + categoryIndex * 0.3,
                          }}
                        />
                      </div>
                      <span
                        className={`text-sm mt-2 ${
                          theme === "dark" ? "text-gray-400" : "text-slate-500"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
