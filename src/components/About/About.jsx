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
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/universityManchester.png")}
              alt="University of Manchester"
              className={styles.aboutItemImage}
            />
            <div className={styles.aboutItemText}>
              <h3>The University of Manchester:</h3>
              <br/>
              <p>
                BSc. Computer Science (Hons).
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/metaLogo.png")}
              alt="Meta Front-End Developer Professional Certification"
              className={styles.aboutItemImage}
            />
            <div className={styles.aboutItemText}>
              <h3>Meta Front-End Developer Professional Certification:</h3>
              <br/>
              <p>
                Classes in React, Advanced React, JavaScript, UI/UX Design, HTML, CSS, Version Control and Front-End Development.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/islZambia2.png")}
              alt="The International School of Lusaka"
              className={styles.aboutItemImage}
            />
            <div className={styles.aboutItemText}>
              <h3>The International School of Lusaka:</h3>
              <br/>
              <p>
                International Baccalaureate Diploma Program
                36 (incl. A* in Maths & A in Comp Sci).
              </p>
            </div>
          </li>
        </ul>
      </div>
      {/* <p className={styles.disclaimer}>*More information available when viewed on desktop.</p> */}
    </section>
  );
};
