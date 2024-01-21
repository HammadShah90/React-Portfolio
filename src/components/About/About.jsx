import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" style={{marginBottom: "30px"}}/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a frontend developer, I specialize in crafting user
                interfaces and experiences for websites and web applications
                using React.js. Proficient in HTML, CSS, and JavaScript, I
                leverage the power of React's component-based architecture.
                Additionally, I have expertise in state management with Redux,
                ensuring efficient handling of complex application data.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" style={{marginTop: "16px"}}/>
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                As a backend developer, I specialize in managing server-side
                logic and databases. I have a strong proficiency in Node.js and
                Express.js, along with experience working with databases like
                MongoDB. I leverage RESTful architecture to create robust APIs
                for effective data handling.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
