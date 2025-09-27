import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { MdOutlineCancelPresentation } from "react-icons/md";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import styles from "../styles/navbar.module.css";
import logo from "../Assets/image/pfp.png";

function Navbar({ isScrolled, scrollPosition }) {
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion Scroll animations
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 50],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.85)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 50], [0, 20]);
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 0.2]);

  // Mobile Menu Animation Variants
  const menuVariants = {
    hidden: { 
      x: "100%", 
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" }
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { 
      x: "100%", 
      opacity: 0, 
      transition: { duration: 0.3, ease: "easeIn" }
    },
  };

  // Navigation items
  const navItems = [
    { path: "/about", label: "About" },
    { path: "/project", label: "Projects" },
    { path: "/contact", label: "Contact" }
  ];

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* TRULY FIXED NAVBAR */}
      <motion.nav 
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
        style={{ 
          background,
          backdropFilter: `blur(${backdropBlur.get()}px)`,
          WebkitBackdropFilter: `blur(${backdropBlur.get()}px)`,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring", 
          damping: 25, 
          stiffness: 200,
          delay: 0.2 
        }}
      >
        {/* Border bottom that appears on scroll */}
        <motion.div
          className={styles.navBorder}
          style={{
            opacity: borderOpacity,
          }}
        />

        <div className={styles.navContainer}>
          {/* Logo */}
          <motion.div 
            className={styles.logo}
            animate={{
              scale: isScrolled ? 0.9 : 1
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <NavLink to={'/'}>
              <motion.img 
                src={logo} 
                alt="Inistheguyy Logo" 
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              />
            </NavLink>
          </motion.div>

          {/* Desktop menu */}
          <motion.div 
            className={styles.desktopLinks}
            animate={{
              gap: isScrolled ? "35px" : "50px"
            }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                <NavLink 
                  to={item.path}
                  className={({ isActive }) => isActive ? styles.activeLink : ''}
                >
                  <motion.span
                    whileHover={{ y: -2, color: "#6e45e2" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    animate={{
                      fontSize: isScrolled ? "2.2rem" : "2.5rem"
                    }}
                  >
                    {item.label}
                  </motion.span>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Hamburger button */}
          <motion.button
            className={styles.hamburger}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: isScrolled ? 0.9 : 1
            }}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <MdOutlineCancelPresentation size={isScrolled ? 32 : 36} />
              ) : (
                <RiMenu5Fill size={isScrolled ? 32 : 36} />
              )}
            </motion.div>
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              transition={{ duration: 0.3 }}
            />
            
            {/* Mobile Menu */}
            <motion.div
              className={styles.mobileMenu}
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Mobile Menu Header */}
              <div className={styles.mobileMenuHeader}>
                <motion.div 
                  className={styles.mobileMenuLogo}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img src={logo} alt="Logo" />
                  <span>Inistheguyy</span>
                </motion.div>
              </div>

              {/* Mobile Navigation Items */}
              <div className={styles.mobileNavItems}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <NavLink 
                    to="/" 
                    onClick={closeMobileMenu}
                    className={({ isActive }) => isActive ? styles.activeMobileLink : ''}
                  >
                    <motion.span whileHover={{ x: 8, color: "#6e45e2" }}>
                      Home
                    </motion.span>
                  </NavLink>
                </motion.div>

                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (index + 2) * 0.1 }}
                  >
                    <NavLink 
                      to={item.path} 
                      onClick={closeMobileMenu}
                      className={({ isActive }) => isActive ? styles.activeMobileLink : ''}
                    >
                      <motion.span whileHover={{ x: 8, color: "#6e45e2" }}>
                        {item.label}
                      </motion.span>
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Menu Footer */}
              <div className={styles.mobileMenuFooter}>
                {/* Social Links */}
                <motion.div 
                  className={styles.socials}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <h4>Connect with me</h4>
                  <div className={styles.socialLinks}>
                    <motion.a
                      href="https://github.com/INIstheguyy"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, color: "#6e45e2" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      GitHub 
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/inioluwa-komolafe-5815a7380"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, color: "#6e45e2" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      LinkedIn
                    </motion.a>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className={styles.mobileCta}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <motion.a
                    href="komolafeinioluwa9@gmail.com"
                    onClick={closeMobileMenu}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Let's Work Together
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;