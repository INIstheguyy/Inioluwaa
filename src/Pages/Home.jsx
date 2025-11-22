import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import contact from "../Assets/icon/contact.svg";
import photo from "../Assets/image/IMG_3535.jpg";
import { FaGithub, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { projectdetails } from "../Utils/ProjectDetails";
import { useNavigate } from "react-router-dom";
import ProjectTemp from "../components/ProjectTemp";
import ExperienceTable from "../components/ExperienceTable";
import { motion } from "framer-motion";
import SkillCarousel from "../components/SkillCarousel";

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
  const projectdetailsslice = projectdetails.slice(-3).reverse();

  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero_section} id="">
        <div className={styles.hero_content}>
          <div className={styles.hero_content_text}>
            <div>
              <motion.p className={styles.header}>
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

              <motion.p className={styles.header}>
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
              {"Frontend engineer expanding into full-stack development. I craft accessible, responsive interfaces that grow with your needs—prioritizing clean code, user experience, and the systems underneath. Right now, I'm focused on understanding business ideas,user needs & how everything connects."
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
                <GoProjectSymlink size={20} />
                Projects
              </p>
            </div>

            <div className={styles.action_right}>
              <p
                onClick={() => window.open("/INIOLUWA_KOMOLAFE.pdf", "_blank")}
                className={styles.btn}
              >
                <SiReaddotcv size={20} />
                Résumé
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about_section} id="about">
        <div className={styles.about_content}>
          <div className={styles.content_info}>
            <div className={styles.info_text}>
              <motion.p
                className={styles.header}
                initial={{ y: -60, opacity: 0 }} // start 60px above and invisible
                animate={{ y: 0, opacity: 1 }} // drop to normal spot and fade in
                transition={{
                  duration: 1.7, // total animation time
                  ease: [0.25, 0.8, 0.25, 1], // a smooth “ease-out” curve
                }}
              >
                about me
              </motion.p>
              <p className={styles.sub_title}>
                I’m a front-end engineer with a fresh Computer Science degree
                and a passion for building clean, accessible, and visually
                engaging web experiences. My current work centers on modern
                React development, but I’m also diving into mobile app
                development to broaden my skill set and eventually transition
                into full-stack engineering and Web3 projects.
              </p>
              <p className={styles.sub_title}>
                Outside the editor, I’m fascinated by the analysis and business
                of football—from tactical breakdowns to the economics behind the
                sport. I have a deep curiosity for human psychology, often
                exploring it through podcasts, as well as historical and
                narcotics-related documentaries that reveal how people and
                societies evolve.
              </p>
              <p className={styles.sub_title}>
                At my core, I’m motivated by learning, problem-solving, and the
                challenge of turning complex ideas into intuitive digital
                experiences.
              </p>
              <p className={styles.sub_title}></p>
            </div>
            <div className={styles.about_action}>
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
                <FaGithub size={30} />
              </a>
              <a
                href="https://x.com/INIstheguyy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={30} color="rgba(211, 233, 122, 1);" />
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
          <div className={styles.content_media}>
            <div className={styles.skill_img}>
              <img src={photo} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.skills}>
          <p className={styles.header}>Tech stack</p>
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ marginTop: "1rem" }}
            >
              <SkillCarousel direction="right" speed={40} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projects_section} id="projects">
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

      {/* Experience Section */}
      <section className={styles.experience_section} id="experience">
        <div className={styles.experience}>
          <div className={styles.experience_header}>
            <p className={styles.header}>Work History</p>
            <button
              onClick={() => window.open("/INIOLUWA_KOMOLAFE.pdf", "_blank")}
            >
              résumé
              <span>
                <SiReaddotcv color="white" size={20} />
              </span>
            </button>
          </div>

          <div className={styles.experience_content}>
            <ExperienceTable />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
