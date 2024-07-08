import React from "react";
import styles from "../styles/Home.module.css";
import contact from "../Assets/icon/contact.svg";
import github from "../Assets/icon/github.svg";
import linkedin from "../Assets/icon/linkedin.svg";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <body>
      <section className={styles.first_section} id="">
        <div className={styles.hero_content}>
          <div className={styles.hero_content_text}>
            <p className={styles.header}>Hi, I am Inioluwa Komolafe.</p>
            <p className={styles.sub_header}>
              {" "}
              A Nigerian based front-end developer passionate about building
              accessible and user friendly websites.
            </p>
          </div>
          <div className={styles.action}>
            <button>
              Contact me
              <span>
                <img src={contact} alt="contact-me" />
              </span>
            </button>
            <span>
              <img src={linkedin} alt="linkedin" />
            </span>
            <span>
              <img src={github} alt="github" />
            </span>
          </div>
        </div>
        <div className={styles.hero_cotent_img}>
          <img src={"ini"} alt="" />
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
          <span> more projects</span> 
        </p>
      </section>
      <hr />
      <section className={styles} id=""></section>
      <section className={styles} id=""></section>
    </body>
  );
}

export default Home;
