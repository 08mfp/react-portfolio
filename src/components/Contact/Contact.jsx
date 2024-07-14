import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>You can reach me or find more info at:</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email logo" />
          <a href="mailto:email.mohfarid@icloud.com">email.mohfarid@icloud.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn logo"
          />
          <a href="https://www.linkedin.com/mohamedfaridpatel">linkedin.com/mohamedfaridpatel</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github logo" />
          <a href="https://www.github.com/08mfp">github.com/08mfp</a>
        </li>
      </ul>
    </footer>
  );
};
