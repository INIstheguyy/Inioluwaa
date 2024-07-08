import React from "react";
import styles from "../styles/ProjectTemp.module.css";
import contact from "../Assets/icon/contact.svg";
import github from "../Assets/icon/github.svg";
function ProjectTemp({ liveUrl, githubUrl }) {
  return (
    <section className={styles.template}>
      <div className={styles.temp_header}>
        <p className={styles.proj_name}> <span></span></p>
        <div className={styles.proj_img}></div>
      </div>
      <div className={styles.temp_body}>
        <div className={styles.temp_info}>
          <div className={styles.top_layer}>
            <p className={styles.title}></p>
            <p className={styles.description}></p>
          </div>
          <div className={styles.bottom_layer}>
            <p className={styles.project_info}>PROJECT INFO</p>
            <div className={styles.info_details}>
            <hr />
            <p className={styles.detail}><span className={styles.topic}>Year</span> <span className={styles.value}></span></p>
            <hr />
            <p className={styles.detail}><span className={styles.topic}>Role</span> <span className={styles.value}></span></p>
            <hr />
            </div>
          </div>
        </div>
        <div className={styles.temp_links}>
          <a href={liveUrl}>
            <span>LIVE DEMO </span>
            {""} <img src={contact} alt="" />
          </a>
          <a href={githubUrl}>
            <span>SEE ON GITHUB</span>
            {""} <img src={github} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectTemp;
