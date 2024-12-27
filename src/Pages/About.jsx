import React from "react";
import styles from "../styles/About.module.css";
import download from "../Assets/icon/download.svg";
import github from "../Assets/icon/github.svg";
import linkedin from "../Assets/icon/linkedin.svg";
import photo from "../Assets/image/IMG_3535.jpg";
import { skills, experiences } from "../Utils/SkillSet";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
function About() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <div className={styles.about}>
      <div className={styles.navigation} onClick={handleBackClick}>
        <MdArrowBack size={32} />
      </div>
      <section className={styles.first_section} id="">
        <div className={styles.hero_content}>
          <p className={styles.header}>about me</p>
          <div className={styles.content_info}>
            <div className={styles.info_text}>
              <p className={styles.title}>
                I am a front-end developer based in Nigeria.
              </p>
              <p className={styles.sub_title}>
                I LOVE exciting opportunities. However, I am Passionate about
                accessibility when developing and curious about solving
                problems. Currently, I’m exploring Reactjs, Webflow and a bit of
                Designing. While I am not programming, I enjoy playing football,
                spending time with my friends & family and staying indoor.I do
                have a Computer Science background and I'm always Learning more
                to improve skill
              </p>
            </div>
            <div className={styles.action}>
              <button>
                Download Resume
                <span>
                  <img src={download} alt="contact-me" />
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
          </div>
        </div>
        <div className={styles.skill}>
          <div className={styles.skill_img}>
            <img src={photo} alt="" />
          </div>
          <div className={styles.skill_content}>
            <p className={styles.header}>Tech stack</p>
            <div className={styles.skill_content_info}>
              <p className={styles.sub_title}>
                I am always looking to add more skills.I specialize in
                transforming design concepts into clean and user-friendly
                interfaces & crafting responsive websites. With a keen eye for
                detail and a passion for creativity, I strive to deliver
                engaging, visually appealing, and functional solutions that
                exceed expectations.
              </p>
              <div className={styles.skill_set}>
                {skills.map((skill, index) => (
                  <button key={index}>{skill.skill}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section className={styles.second_section} id="">
        <div className={styles.experience}>
          <p className={styles.header}>my experience</p>
          <div className={styles.experience_content}>
            {experiences.map((experience, index) => (
              <div key={index} className={styles.exp_content_info}>
                <div className={styles.info_top_layer}>
                  <div className={styles.upper_layer}>
                    <p className={styles.title}>{experience.role}</p>
                    <p className={styles.sub_title}>
                      <span>{experience.startDate}</span> -{" "}
                      <span>{experience.endDate}</span>
                    </p>
                  </div>
                  <p className={styles.company}>
                    {" "}
                    <a href="https://www.motormata.com">
                      {experience.company}
                    </a>{" "}
                  </p>
                </div>
                <div className={styles.info_bottom_layer}>
                  <p className={styles.sub_title}>{experience.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles}></div>
      </section>
    </div>
  );
}

export default About;
