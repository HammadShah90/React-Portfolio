import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(
    window.innerWidth <= 950
  );

  useEffect(() => {
    const handleResize = () => {
      setShowMenuButton(window.innerWidth <= 950);
      setMenuOpen(false); // Resize par menu ko band karein
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        {showMenuButton && (
          <img
            className={styles.menuBtn}
            src={getImageUrl(menuOpen ? "nav/closeIcon.png" : "nav/menuIcon.png")}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={styles.menuList}>
            <a href="#about">About</a>
          </li>
          {/* <li className={styles.menuList}>
            <a href="#skills">Skills</a>
          </li> */}
          <li className={styles.menuList}>
            <a href="#experience">Experience</a>
          </li>
          <li className={styles.menuList}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.menuList}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
