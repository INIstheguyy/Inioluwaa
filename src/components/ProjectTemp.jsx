import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "../styles/ProjectTemp.module.css";
import contact from "../Assets/icon/contact.svg";
import github from "../Assets/icon/github.svg";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: 0, transition: { duration: 0.3 } },
};

function ProjectTemp({
  liveUrl,
  githubUrl,
  projectImage,
  title,
  description,
  year,
  role,
  index,
}) {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) control.start("visible");
    else control.start("exit");
  }, [control, inView]);

  const isVideo =
    projectImage?.endsWith(".mp4") ||
    projectImage?.endsWith(".webm") ||
    projectImage?.endsWith(".mov");

  return (
    <motion.section
      ref={ref}
      className={styles.template}
      style={
        !isVideo
          ? {
              backgroundImage: `url(${projectImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
      variants={variants}
      custom={index}
      initial="hidden"
      animate={control}
    >
      {/* 🎥 If it's a video, render a <video> element */}
      {isVideo && (
        <video
          className={styles.backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={projectImage}
            type={`video/${projectImage.split(".").pop()}`}
          />
        </video>
      )}
      {/* Overlay */}
      <div className={styles.overlay}>
        <div className={styles.temp_info}>
          <div className={styles.top_layer}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
          </div>
          <div className={styles.temp_links}>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <span>LIVE DEMO</span> <img src={contact} alt="live demo" />
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <span>SEE ON GITHUB</span> <img src={github} alt="github link" />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectTemp;
