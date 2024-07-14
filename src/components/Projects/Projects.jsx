import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Projects</h2>
      <br/>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
      <br/>
      <h2>Note: *The Website Demo and Source Code is not available at the moment, You can still find my public repositories on GitHub </h2>
    </section>
  );
};
