import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/web.png")}
              className={styles.image}
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer proficient in creating optimized
                websites. I specialize in crafting fast and responsive user
                interfaces that elevate the browsing experience.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/server.png")}
              className={styles.image}
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I possess hands-on experience in building lightning-fast and
                optimized backends for websites and APIs using technologies like
                Node.js and Express.js.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/python.png")}
              className={styles.image}
            ></img>
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
                I'm a Python developer adept at crafting powerful and
                user-friendly applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/java.png")}
              className={styles.image}
            ></img>
            <div className={styles.aboutItemText}>
              <h3>JAVA Developer</h3>
              <p>
                I'm a Java developer skilled in building powerful software
                solutions, expertise in Java and its frameworks.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
