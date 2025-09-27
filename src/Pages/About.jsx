import React from "react";
import styles from "../styles/About.module.css";
import download from "../Assets/icon/download.svg";
import github from "../Assets/icon/github.svg";
import linkedin from "../Assets/icon/linkedin.svg";
import photo from "../Assets/image/IMG_3535.jpg";
import { FaGithub, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";
import ExperienceTable from "../components/ExperienceTable";
import { motion } from "framer-motion";
import SkillCarousel from "../components/SkillCarousel";

function About() {
  return (
    <div className={styles.about}>
      {/* <div className={styles.navigation} onClick={handleBackClick}>
        <MdArrowBack size={32} />
      </div> */}
      <section className={styles.first_section} id="">
        <div className={styles.hero_content}>
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
                I’m a front-end developer with a fresh Computer Science degree
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
            <div className={styles.action}>
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
          <div styles={styles.content_media}>
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

      <section className={styles.second_section} id="">
        <div className={styles.experience}>
          <div className={styles.experience_header}>
            <p className={styles.header}>Work History</p>
            <button>
              Download Resume
              <span>
                <img src={download} alt="contact-me" />
              </span>
            </button>
          </div>

          <div className={styles.experience_content}>
            <ExperienceTable />
          </div>
        </div>
        <div className={styles}></div>
      </section>
    </div>
  );
}

export default About;
