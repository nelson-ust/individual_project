import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

// Navbar component
const Navbar = () => (
  <div className={styles.description}>
    <Link href="./about">
      About Us
    </Link>

    <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
      Visit Example.com
    </a>
  </div>
);

// Body component
const Body = () => (
  <div className={styles.center}>
    <Image
      className={styles.logo}
      src="/next.svg"
      alt="Next.js Logo"
      width={180}
      height={37}
      priority
    />
  </div>
);

// Footer component
const Footer = () => (
  <div className={styles.grid}>
    <p>Copyright © All rights reserved.</p>
  </div>
);

// Main component that integrates Navbar, Body, and Footer
const Home = () => (
  <main className={styles.main}>
    <Navbar />
    <Body />
    <Footer />
  </main>
);

export default Home;
