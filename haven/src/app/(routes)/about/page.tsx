// About.js
import React from "react";
import styles from "./about.module.css";
import Link from "next/link";

const About = () => (
  <div className={styles.aboutContainer}>
    <h2 className={styles.aboutTitle}>About Us</h2>
    <p className={styles.aboutText}>
      Welcome to our website! We are a team of dedicated individuals passionate
      about providing valuable information and services. Lorem ipsum dolor sit
      amet, consectetur adipiscing elit. Nulla at justo ac odio aliquet
      consequat.
    </p>

    <Link href="./">
      <p className={styles.aboutLink}>Home</p>
    </Link>
  </div>
);

export default About;
