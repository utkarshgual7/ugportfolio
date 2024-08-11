import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")}></img>
          <a href="mailto:gu.meet.07@gmail.com">gu.meet.07@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")}></img>
          <a href="https://www.linkedin.com/in/utkarsh-gual" target="_blank">
            LinkedIn/Utkarsh Gual
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")}></img>
          <a href="https://github.com/utkarshgual7" target="_blank">
            Github/Utkarsh Gual
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
