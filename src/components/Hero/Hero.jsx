import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Mohamed Farid Patel</h1>
        <p className={styles.description}>
          I am a Third-year Computer Science student at The University of Manchester, graduating in July 2025.
          I have worked on multiple projects, ranging from web development to machine learning, which you can check out on this website or on my LinkedIn.
          <br />
          <br />
          {/* If you have any questions, or would like to reach out, you can find my contact details at the bottom of this page. */}
          {/* If you have any questions, or would like to reach out, you can find my details below: */}
        </p>
        <div style={{ display: 'flex' }}>
          {/* <a href="mailto:contact@mohfarid.com" className={styles.contactBtn} style={{ marginRight: '10px' }}>
            Email Me
          </a> */}
          <a href="/#contact" className={styles.contactBtn}>
            Contact Me
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("main/mohamedPhoto.png")}
        alt="Profile/LinkedIn image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
