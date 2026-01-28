import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import WelcomeScreen from "./components/WelcomeScreen";
import AnimatedBackground from "./components/AnimatedBackground";
import { ToastProvider } from "./components/Toast";
import ScrollToTop from "./components/ScrollToTop";
import SocialSidebar from "./components/SocialSidebar";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function AppContent() {
  const [showWelcome, setShowWelcome] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    // Check if it's a touch device
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const lenis = new Lenis({
      duration: isTouchDevice ? 0.8 : 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: isTouchDevice ? 0.8 : 1,
      touchMultiplier: 1.5,
      infinite: false,
      lerp: isTouchDevice ? 0.15 : 0.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div
      className={`min-h-screen relative transition-colors duration-300 ${
        theme === "dark"
          ? "bg-slate-950 text-white"
          : "bg-gray-50 text-slate-900"
      }`}
    >
      <AnimatedBackground />
      {showWelcome && (
        <WelcomeScreen onComplete={() => setShowWelcome(false)} />
      )}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      <ScrollToTop />
      <SocialSidebar />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ToastProvider>
        <AppContent />
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
