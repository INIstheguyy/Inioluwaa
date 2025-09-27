import React, { useEffect,  useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles/SkillCarousel.module.css";

// Updated skills data with proper React SVG components or image URLs
export const skills = [
  {
    id: 1,
    skill: "HTML",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    id: 2,
    skill: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  {
    id: 3,
    skill: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
   {
    id: 4,
    skill: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    id: 5,
    skill: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    id: 6,
    skill: "Nextjs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#61DAFB",
  },
  {
    id: 7,
    skill: "React-Native",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg",
    color: "#61DAFB",
  },
  {
    id: 8,
    skill: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    color: "#61DAFB",
  },
 
  {
    id: 9,
    skill: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  {
    id: 10,
    skill: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    color: "#7952B3",
  },
  {
    id: 11,
    skill: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#FFCA28",
  },
  {
    id: 12,
    skill: "Airtable",
    // Airtable doesn’t have an official devicon, using the official SVG from Airtable’s brand assets
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Airtable_Logo.svg/512px-Airtable_Logo.svg.png",
    color: "#18BFFF",
  },
  {
    id: 13,
    skill: "Framer Motion",
    // Using Framer’s official logo
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    color: "white",
  },
  {
    id: 14,
    skill: "Figma",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
  },
  {
    id: 15,
    skill: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
   {
    id: 16,
    skill: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    color: "#F05032",
  },
   {
    id: 17,
    skill: "WordPress",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    color: "#F05032",
  },

];


const SkillCarousel = ({ direction = "left", speed = 50 }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  
  // Responsive breakpoints
  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);
    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Calculate responsive values
  const isMobile = screenSize.width < 768;
  const isTablet = screenSize.width >= 768 && screenSize.width < 1024;
  
  const itemWidth = isMobile ? 100 : isTablet ? 120 : 140;
  const gap = isMobile ? 12 : isTablet ? 16 : 20;
  
  // Calculate animation duration based on content width
  const totalWidth = (itemWidth + gap) * skills.length;
  const animationDuration = totalWidth / speed;

  // Create multiple copies for seamless loop
  const extendedSkills = [...skills, ...skills, ...skills];

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselWrapper}>
        <motion.div
          className={styles.carouselTrack}
          animate={isPaused ? {} : {
            x: direction === "left" 
              ? [`0%`, `-${100 / 3}%`] 
              : [`-${100 / 3}%`, `0%`]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: animationDuration,
              ease: "linear"
            }
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
          style={{
            width: `${extendedSkills.length * (itemWidth + gap)}px`
          }}
        >
          {extendedSkills.map((skill, index) => (
            <SkillItem 
              key={`${skill.id}-${index}`}
              skill={skill}
              itemWidth={itemWidth}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </div>
      
      {/* Gradient overlays for seamless edges */}
      {/* <div className={styles.gradientLeft} />
      <div className={styles.gradientRight} /> */}
    </div>
  );
};

// Individual skill item component
const SkillItem = ({ skill, itemWidth, isMobile }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div
      className={styles.skillItem}
      style={{ 
        width: `${itemWidth}px`,
        minWidth: `${itemWidth}px`
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5
      }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <div className={styles.iconContainer}>
        {!imageError ? (
          <>
            <motion.img
              src={skill.icon}
              alt={`${skill.skill} icon`}
              className={styles.skillIcon}
              onError={handleImageError}
              onLoad={handleImageLoad}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: imageLoaded ? 1 : 0, 
                scale: imageLoaded ? 1 : 0.8 
              }}
              transition={{ duration: 0.3 }}
            />
            {!imageLoaded && (
              <div className={styles.iconSkeleton} />
            )}
          </>
        ) : (
          <div 
            className={styles.iconFallback}
            style={{ backgroundColor: skill.color }}
          >
            {skill.skill.charAt(0).toUpperCase()}
          </div>
        )}
      </div>
      
      <motion.span 
        className={styles.skillLabel}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {skill.skill}
      </motion.span>
    </motion.div>
  );
};

export default SkillCarousel;