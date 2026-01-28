import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaSchool } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const educationData = [
    {
      id: 1,
      degree: "Bachelor of Science in Zoology",
      institution: "Dinajpur Govt. College",
      location: "Dinajpur, Bangladesh",
      duration: "2021 - Present",
      description:
        "I hold a B.Sc. in Computer Science from Northern University of Business and Technology. To bridge the gap between academic theory and industry standards, I completed a specialized MERN Stack Development course through Programming Hero. This journey has equipped me with the technical expertise to build modern, high-performance web applications as a focused Front-End Developer.",
      icon: FaUniversity,
      current: false,
    },
    {
      id: 2,
      degree: "Complete Web Development Course",
      institution: "Programming Hero",
      location: "Online, Bangladesh",
      duration: "2025",
      description:
        "Completed comprehensive MERN Stack web development course covering HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, Firebase Authentication, and deployment. Built multiple real-world projects.",
      icon: FaGraduationCap,
      current: false,
    },
    {
      id: 3,
      degree: "Higher Secondary Certificate (HSC)",
      location: "Satkhira, Bangladesh",
      duration: "Science",
      description:
        "Completed Higher Secondary Certificate in Science group .",
      icon: FaSchool,
      current: false,
    },
  ];

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? 100 : -100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="education"
      className="py-20 bg-transparent overflow-hidden"
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
            Education
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
            My educational journey and academic achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-primary/20"
              initial={{ height: 0 }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 1.5 }}
            />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.id}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ delay: index * 0.2 }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-12 h-12 bg-primary rounded-full flex items-center justify-center z-10"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                  whileHover={{ scale: 1.2 }}
                >
                  <edu.icon className="text-xl text-primary-content" />
                </motion.div>

                {/* Content Card */}
                <div
                  className={`ml-16 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                  }`}
                >
                  <motion.div
                    className={`backdrop-blur-sm p-6 rounded-2xl shadow-lg border ${
                      theme === "dark"
                        ? "bg-slate-800/50 border-slate-700/30"
                        : "bg-white border-gray-200 shadow-md"
                    } ${edu.current ? "border-2 border-primary" : ""}`}
                    whileHover={{
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                    }}
                  >
                    {edu.current && (
                      <span className="badge badge-primary mb-3">
                        Currently Pursuing
                      </span>
                    )}
                    <h3
                      className={`text-xl font-bold mb-2 ${
                        theme === "dark" ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {edu.degree}
                    </h3>
                    <h4 className="text-primary font-semibold mb-1">
                      {edu.institution}
                    </h4>
                    <p
                      className={`text-sm mb-3 ${
                        theme === "dark" ? "text-gray-400" : "text-slate-500"
                      }`}
                    >
                      {edu.location} {edu.duration && `| ${edu.duration}`}
                    </p>
                    <p
                      className={`${
                        theme === "dark" ? "text-gray-300" : "text-slate-600"
                      }`}
                    >
                      {edu.description}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
