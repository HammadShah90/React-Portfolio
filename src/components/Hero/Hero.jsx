import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  const resumeUrl = "../../../assets/resume/Muhammad's Resume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Muhammad_Hammad_Resume.pdf"; // Specify the default file name for download
    link.click();
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Muhammad Hammad</h1>
        <p className={styles.desc} style={{marginBottom: "10px"}}>
          Full Stack Developer with expertise in JavaScript, HTML, CSS, ReactJs,
          and NodeJs. Experienced in creating scalable and user-friendly web
          applications. Let's work together to bring your ideas to life!
        </p>
        <p className={styles.desc}>Feel free to check out my resume for more details.</p>
        <div className={styles.resumeBtns}>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewBtn}
          >
            View Resume
          </a>
          <button onClick={handleDownload} className={styles.viewBtn}>
            Download Resume
          </button>
        </div>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Img of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
