import {
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { theme } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "Email",
      value: "md.rayhanx617@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=md.rayhanx617@gmail.com",
    },
    {
      icon: FaPhone,
      title: "Phone",
      value: "01978730955",
      link: "tel:+8801978730955",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      value: "+880 1978730955",
      link: "https://wa.me/8801978730955",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "khulna, Bangladesh",
      link: null,
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="contact"
      className={`py-20 overflow-hidden ${
        theme === "dark" ? "bg-slate-900/50" : "bg-gray-100/50"
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
            Contact Me
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
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3
              className={`text-2xl font-bold mb-6 ${
                theme === "dark" ? "text-white" : "text-slate-800"
              }`}
            >
              Get in Touch
            </h3>
            <p
              className={`mb-8 ${
                theme === "dark" ? "text-gray-400" : "text-slate-600"
              }`}
            >
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Feel free to contact
              me through any of the following methods:
            </p>

            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {contactInfo.map((info) => (
                <motion.div
                  key={info.title}
                  className="flex items-center gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{
                      scale: 1.1,
                      backgroundColor: "rgba(var(--p), 0.2)",
                    }}
                  >
                    <info.icon className="text-2xl text-primary" />
                  </motion.div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        theme === "dark" ? "text-white" : "text-slate-800"
                      }`}
                    >
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`hover:text-primary transition-colors ${
                          theme === "dark" ? "text-gray-400" : "text-slate-600"
                        }`}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p
                        className={`${
                          theme === "dark" ? "text-gray-400" : "text-slate-600"
                        }`}
                      >
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Map or Additional Info */}
            <motion.div
              className={`mt-8 p-6 backdrop-blur-sm rounded-2xl border ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700/30"
                  : "bg-white border-gray-200 shadow-md"
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <h4
                className={`font-semibold mb-2 ${
                  theme === "dark" ? "text-white" : "text-slate-800"
                }`}
              >
                Availability
              </h4>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-slate-600"
                }`}
              >
                I typically respond within 24 hours. For urgent matters, please
                reach out via WhatsApp or phone.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className={`backdrop-blur-sm p-8 rounded-2xl shadow-lg border ${
                theme === "dark"
                  ? "bg-slate-800/50 border-slate-700/30"
                  : "bg-white border-gray-200 shadow-md"
              }`}
              whileHover={{
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
            >
              <h3
                className={`text-2xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-slate-800"
                }`}
              >
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="input input-bordered w-full focus:input-primary"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Your Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="input input-bordered w-full focus:input-primary"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Subject</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter subject"
                    className="input input-bordered w-full focus:input-primary"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="textarea textarea-bordered h-32 w-full focus:textarea-primary"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary w-full gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
