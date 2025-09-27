import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import contact from "../Assets/icon/contact.svg";

import { FaGithub,  FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";
import { projectdetails } from "../Utils/ProjectDetails";
import { useNavigate } from "react-router-dom";
import ProjectTemp from "../components/ProjectTemp";
import { motion } from "framer-motion";

// Variants for header (letter-by-letter)
// Header animation: entrance per letter
const headerVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 1,
    transition: { delay: i * 0.1, type: "spring", stiffness: 120 },
  }),
};

// Variants for subheader (word-by-word)
const subHeaderWordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.4, ease: "easeOut" },
  }),
};

function Home() {
  const navigate = useNavigate();
  const projectBodyRef = useRef(null); // new ref
  const projectdetailsslice = projectdetails.slice(0, 3);

  return (
    <div>
      <section className={styles.first_section} id="">
        <div className={styles.hero_content}>
          <div className={styles.hero_content_text}>
            <div>
              <motion.p
                className={styles.header}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                {"Inioluwa ".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.p>

              <motion.p
                className={styles.header}
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              >
                {"Komolafe".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={headerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </motion.p>
            </div>

            {/* Sub-header with word-by-word animation */}
            <motion.p
              className={styles.sub_header}
              initial="hidden"
              animate="visible"
            >
              {"Front-end Engineer specializing in building scalable web applications with a strong focus on responsive design, modern UI, and creative user experiences.Right now I craft clean, accessible user interfaces while expanding into mobile app development, with an eye on creative front-end engineering and Web3"
                .split(" ")
                .map((word, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={subHeaderWordVariants}
                    style={{ display: "inline-block", marginRight: "6px" }}
                  >
                    {word}
                  </motion.span>
                ))}
            </motion.p>
          </div>

          {/* Actions */}
          <div className={styles.action}>
            <div className={styles.action_left}>
              <p
                className={styles.btn}
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                 Preview Projects
              </p>
            </div>

            <div className={styles.action_right}>
              <a
                href="https://www.linkedin.com/in/inioluwa-komolafe-5815a7380"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://github.com/INIstheguyy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30}/>
              </a>
              <a
                href="https://x.com/INIstheguyy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} color="rgba(211, 233, 122, 1);"/>
              </a>
              <a
                href="https://www.reddit.com/user/INIstheguyy/"
                aria-label="Instagram"
                 rel="noopener noreferrer"
              >
                <FaReddit size={30} color="rgba(211, 233, 122, 1);" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className={styles.second_section} id="projects">
        <div className={styles.projects_header}>
          <p className={styles.header}>Featured Projects</p>
          <p className={styles.sub_header}>
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
        <div className={styles.projects_body} ref={projectBodyRef}>
          {projectdetailsslice.map((projectdetail, index) => (
            <ProjectTemp
              key={index}
              liveUrl={projectdetail.liveUrl}
              githubUrl={projectdetail.githubUrl}
              projectImage={projectdetail.img}
              year={projectdetail.year}
              role={projectdetail.role}
              title={projectdetail.title}
              description={projectdetail.description}
            />
          ))}
        </div>
        <p
          className={styles.more_projects}
          onClick={() => navigate("/project")}
        >
          <span>
            more projects <img src={contact} alt="contact-me" />
          </span>
        </p>
      </section>
    </div>
  );
}

export default Home;
