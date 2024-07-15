import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experiences & Skills</h2>
      <br />
      <div className={styles.content}>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, expId) => {
                      if (typeof experience === 'string') {
                        return <li key={expId}>{experience}</li>;
                      } else if (typeof experience === 'object' && experience.url) {
                        return (
                          <li key={expId}>
                            <a href={experience.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                              {experience.description}
                            </a>
                          </li>
                        );
                      }
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <br/>        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <p className={styles.disclaimer}>*Better when viewed on desktop.</p>
    </section>
  );
};
