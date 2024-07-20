import React from "react";
import styles from "../styles/Home.module.css";
import contact from "../Assets/icon/contact.svg";
import github from "../Assets/icon/github.svg";
import linkedin from "../Assets/icon/linkedin.svg";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <section className={styles.first_section} id="">
        <div className={styles.hero_content}>
          <div className={styles.hero_content_text}>
            <p className={styles.header}>
              Hi, I am <span>Ini</span>oluwa Komolafe.
            </p>
            <p className={styles.sub_header}>
              {" "}
              A Nigerian based front-end developer passionate about building
              accessible and user friendly websites.
            </p>
          </div>
          <div className={styles.action}>
            <div className={styles.action_first}>
              <button>
                Contact me
                <span>
                  <img src={contact} alt="contact-me" />
                </span>
              </button>
              <span>
                <a
                  className={styles}
                  href="https://www.linkedin.com/in/inioluwa-komolafe-21684a213/"
                >
                  <img src={linkedin} alt="" />
                </a>
              </span>
              <span>
                <a className={styles} href="https://github.com/INIstheguyy">
                  <img src={github} alt="" />
                </a>
              </span>
            </div>
            <div className={styles.action_second}>
              <p
                className={styles.more_projects}
                onClick={() => navigate("/about")}
              >
                {" "}
                <span>
                  {" "}
                  more about me <img src={contact} alt="contact-me" />
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className={styles.second_section} id="">
        <div className={styles.projects_header}>
          <p className={styles.header}>Featured Projects</p>
          <p className={styles.sub_header}>
            Here are some of the selected projects that showcase my passion for
            front-end development.
          </p>
        </div>
        <div className={styles.projects_body}></div>

        <p
          className={styles.more_projects}
          onClick={() => navigate("/project")}
        >
          {" "}
          <span>
            {" "}
            more projects <img src={contact} alt="contact-me" />
          </span>
        </p>
      </section>
    </div>
  );
}

export default Home;
