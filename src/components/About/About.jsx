import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <br />
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutme.png")}
          alt="avatar question mark"
          className={styles.aboutImage}
          style={{ width: '500px', height: '500px', marginRight: '50px' }} 
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/universityManchester.png")} 
              alt="University of Manchester" 
              style={{ width: '175px', height: '75px', marginRight: '20px' }} 
            />
            <div className={styles.aboutItemText}>
              <h3>The University of Manchester [2021 - 2025]:</h3>
              <p>
                BSc. Computer Science (Hons)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/metaLogo.png")} 
              alt="Meta Front-End Developer Professional Certification"
              style={{ width: '175px', height: '40px', marginRight: '20px' }}
            />
            <div className={styles.aboutItemText}>
              <h3>Meta Front-End Developer Professional Certification:</h3>
              <p>
                Courses: React, UI/UX Design, JavaScript, HTML, CSS, Version Control and Front-End Development. (under progress)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img 
              src={getImageUrl("about/islZambia2.png")} 
              alt="The International School of Lusaka"
              style={{ width: '175px', height: '75px', marginRight: '20px' }} 
            />
            <div className={styles.aboutItemText}>
              <h3>The International School of Lusaka:</h3>
              <p>
                International Baccalaureate Diploma Program
                36 (incl. A* in Maths & A in Comp Sci)
              </p>
            </div>
          </li>
        </ul>
      </div>
      <p className={styles.disclaimer}>*More information available when viewed on desktop.</p>
    </section>
  );
};
