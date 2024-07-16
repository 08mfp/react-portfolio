import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>You can reach me or find more info at:</p>
        <div className={styles.iconLinks}>
          <a href="mailto:email.contact@mohfarid.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email logo" />
          </a>
          <a href="https://www.linkedin.com/in/mohamedfaridpatel">
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn logo" />
          </a>
          <a href="https://www.github.com/08mfp">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github logo" />
          </a>
        </div>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email logo" />
          <a href="mailto:contact@mohfarid.com">contact@mohfarid.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn logo" />
          <a href="https://www.linkedin.com/in/mohamedfaridpatel">linkedin.com/in/mohamedfaridpatel</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github logo" />
          <a href="https://www.github.com/08mfp">github.com/08mfp</a>
        </li>
      </ul>
      <p className={styles.disclaimer}>*This website is best viewed on a desktop.</p>
    </footer>
  );
};
