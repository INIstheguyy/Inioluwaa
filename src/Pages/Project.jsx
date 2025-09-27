import React from "react";
import styles from "../styles/Product.module.css";
import ProjectTemp from "../components/ProjectTemp";
import { projectdetails } from "../Utils/ProjectDetails";
import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { MdArrowBack } from "react-icons/md";
function Project() {
  // const navigate = useNavigate();

  // const handleBackClick = () => {
  //   navigate("/");
  // };
  return (
    <div>
      {/* <div className={styles.navigation} onClick={handleBackClick}>
        <MdArrowBack size={32} />
      </div> */}
      <section id="" className={styles.first_section}>
        <div className={styles.hero_content}>
          <motion.p
            className={styles.header}
            initial={{ y: -60, opacity: 0 }} // start 60px above and invisible
            animate={{ y: 0, opacity: 1 }} // drop to normal spot and fade in
            transition={{
              duration: 1.7, // total animation time
              ease: [0.25, 0.8, 0.25, 1], // a smooth “ease-out” curve
            }}
          >
            Projects
          </motion.p>

          <div className={styles.info_text}>
            {/* <p className={styles.title}> Robust projects compilation.</p> */}
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
              projectImage={projectdetail.img}
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
