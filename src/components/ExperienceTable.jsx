import React from "react";
import styles from "../styles/ExperienceTable.module.css";
import { experiences } from "../Utils/SkillSet"; 

export default function ExperienceTable() {
  return (
    <div className={styles.experienceTable}>
      {experiences.map((exp, index) => (
        <div key={index} className={styles.expRow}>
          <div className={styles.expHeader}>
            <div>
              <p className={styles.expRole}>{exp.role}</p>
              <p className={styles.expCompany}>
                <a href={exp.link} target="_blank" rel="noreferrer">
                  {exp.company}
                </a>
              </p>
            </div>
            <p className={styles.expDate}>
              {exp.period}
            </p>
          </div>
        
        </div>
      ))}
    </div>
  );
}

