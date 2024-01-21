import React, { useEffect, useState } from "react";
import styles from "./GoToTop.module.css";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      left: 0,
    });
  };

  const listenToScroll = () => {
    let heightToHidden = 300;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <section className={styles.container}>
      {isVisible && (
        <div className={styles.topBtn} onClick={goToBtn}>
          <FaArrowUp className={styles.topBtnIcon} />
        </div>
      )}
    </section>
  );
};

export default GoToTop;
