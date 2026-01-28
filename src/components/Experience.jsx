import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      title: "MERN Stack Front-End Developer",
      company: "Programming Hero Graduate",
      location: "Bangladesh",
      duration: "2025 - Present (1+ Year)",
      type: "Course Completion & Projects",
      description: [
        "Completed Complete Web Development Course from Programming Hero",
        "Built 7+ projects including e-commerce, portfolio, and dashboard applications",
        "Developed responsive web applications using React.js, Tailwind CSS, and DaisyUI",
        "Implemented Firebase Authentication and MongoDB database integration",
        "Practiced REST API integration and full-stack MERN development",
        "Mastered Git/GitHub for version control and project collaboration",
      ],
      current: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-slate-900/30 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="mt-4 text-base-content/70 max-w-2xl mx-auto">
            My journey as a Programming Hero graduate and MERN Stack Front-End
            Developer
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, expIndex) => (
            <motion.div
              key={exp.id}
              className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden border border-slate-700/30 ${
                exp.current ? "border-l-4 border-primary" : ""
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: expIndex * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <FaBriefcase className="text-xl text-primary" />
                      </motion.div>
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <p className="text-primary font-semibold">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.current && (
                      <motion.span
                        className="badge badge-primary"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ type: "spring", delay: 0.5 }}
                      >
                        Current
                      </motion.span>
                    )}
                    <span className="badge badge-outline">{exp.type}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-base-content/60 mb-4">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaMapMarkerAlt />
                    {exp.location}
                  </span>
                </div>

                <motion.ul
                  className="space-y-2"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {exp.description.map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start gap-2 text-base-content/70"
                      variants={itemVariants}
                      whileHover={{ x: 10 }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: index * 0.1 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note for no experience */}
        {experiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-base-content/60">
              I&apos;m currently looking for opportunities to gain professional
              experience. Feel free to contact me if you have any openings!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
