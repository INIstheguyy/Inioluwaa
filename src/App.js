// App.jsx
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./styles/App.module.css";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";

// Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";

// Components
import Navbar from "./components/Navbar";

// Toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const curDate = new Date().getFullYear();
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for navbar
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(0);

  // Motion values that store normalized mouse offset (-1 .. 1)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  // Map normalized values to pixel translation for each layer
  const layer1X = useTransform(mx, (v) => v * 18);
  const layer1Y = useTransform(my, (v) => v * 12);

  const layer2X = useTransform(mx, (v) => v * 38);
  const layer2Y = useTransform(my, (v) => v * 22);

  const layer3X = useTransform(mx, (v) => v * -26);
  const layer3Y = useTransform(my, (v) => v * -14);

  // Track scroll position
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrollPosition(latest);
      setIsScrolled(latest > 50); // Show navbar background after 50px scroll
    });

    return () => unsubscribe();
  }, [scrollY]);

  // onMouseMove handler for background parallax
  const handleMouseMove = (e) => {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;
    const nx = (e.clientX - cx) / cx;
    const ny = (e.clientY - cy) / cy;
    mx.set(nx);
    my.set(ny);
  };

  return (
    <div className={styles.app}>
      <Router>
        {/* TRULY FIXED NAVBAR - Outside of content wrapper */}
        <Navbar isScrolled={isScrolled} scrollPosition={scrollPosition} />

        {/* Background layers (fixed, behind content) */}
        <div
          className={styles.background}
          onMouseMove={handleMouseMove}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            if (!touch) return;
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            mx.set((touch.clientX - cx) / cx);
            my.set((touch.clientY - cy) / cy);
          }}
        >
          <motion.div
            className={`${styles.bgLayer} ${styles.layer1}`}
            style={{ x: layer1X, y: layer1Y }}
          />
          <motion.div
            className={`${styles.bgLayer} ${styles.layer2}`}
            style={{ x: layer2X, y: layer2Y }}
          />
          <motion.div
            className={`${styles.bgLayer} ${styles.layer3}`}
            style={{ x: layer3X, y: layer3Y }}
          />
        </div>

        {/* Main content with proper top padding for fixed navbar */}
        <div className={styles.content}>
          <main className={styles.mainContent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<Project />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <footer className={styles.footer}>
            <motion.p
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              © {curDate}
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.02, color: "#6e45e2" }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Inistheguyy
            </motion.p>
          </footer>
        </div>

        {/* Enhanced Toast Notifications */}
        <ToastContainer 
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          toastStyle={{
            background: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            borderRadius: "12px",
            color: "#fff"
          }}
        />
      </Router>
    </div>
  );
}

export default App;