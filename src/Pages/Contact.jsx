import React from "react";
import ContactForm from "../components/ContactForm";
import styles from "../styles/Contact.module.css"; // 👈 new module file

import { FaGithub, FaLinkedin, FaReddit, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <div className={styles.textBlock}>
        {/* <h1 className={styles.title}>Let’s connect</h1> */}
        <motion.h1
          className={styles.title}
          initial={{ y: -60, opacity: 0 }} // start 60px above and invisible
          animate={{ y: 0, opacity: 1 }} // drop to normal spot and fade in
          transition={{
            duration: 1.7, // total animation time
            ease: [0.25, 0.8, 0.25, 1], // a smooth “ease-out” curve
          }}
        >
          Let’s connect
        </motion.h1>
        <p className={styles.description}>
          Got a project or just want to say hello?
          <a
            href="mailto:komolafeinioluwa9@gmail.com"
            className={styles.highlight}
          >
            komolafeinioluwa9@gmail.com
          </a>
        </p>
        <p className={styles.description}>
          Need more info? Grab my{" "}
          <a href={".."} className={styles.highlight}>
            resume
          </a>
        </p>

        <div className={styles.socials}>
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

      <div className={styles.formBlock}>
        <ContactForm />
      </div>
    </section>
  );
}
