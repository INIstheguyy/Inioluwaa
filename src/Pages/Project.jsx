import React from "react";
import styles from "../styles/Product.module.css";
import ProjectTemp from "../components/ProjectTemp";
import { projectdetails } from "../Utils/ProjectDetails";
import { useNavigate } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
function Project() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <div>
    <div className={styles.navigation} onClick={handleBackClick}>
          <MdArrowBack size={32} />
        </div>
      <section id="" className={styles.first_section}>
        
        <div className={styles.hero_content}>
          <p className={styles.header}>Projects</p>
          <div className={styles.info_text}>
            <p className={styles.title}> Robust projects compilation.</p>
            <p className={styles.sub_title}>
              Below is an extended list of my personal projects across websites
              and web app development in their varieties. - ranging from landing
              pages to fully functional web apps - Explore.
            </p>
          </div>
        </div>
      </section>
      <section id="" className={styles.second_section}>
        <div className={styles.projects_body}>
          {projectdetails.map((projectdetail, index) => (
            <ProjectTemp
              key={index}
              liveUrl={projectdetail.liveUrl}
              githubUrl={projectdetail.githubUrl}
              projectImage={""}
              year={projectdetail.year}
              role={projectdetail.role}
              title={projectdetail.title}
              name={projectdetail.name}
              description={projectdetail.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Project;
