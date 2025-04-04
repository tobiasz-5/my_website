// /src/app/page.tsx
'use client';

import { motion } from 'framer-motion';
import styles from './page.module.css';
import Link from 'next/link';
import MouseTrail from '../components/MouseTrail';
import SidebarNavigation from '../components/SidebarNavigation';
import { useEffect, useState } from 'react';

const links = [
  { href: 'https://github.com/tobiasz-5', label: 'GitHub' },
  { href: 'https://vercel.com/tobias-zs-projects', label: 'Vercel' },
  { href: 'https://www.linkedin.com/in/tobia-schettini-developer/', label: 'LinkedIn' },
  { href: '#', label: "What's Next" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<'white' | 'black'>('white');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setActiveSection(scrollY < viewportHeight / 2 ? 'white' : 'black');
    };

    const detectTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    };

    window.addEventListener('scroll', handleScroll);
    detectTouch();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whiteBoxOrder = [
    `${styles.topLeft}`,
    `${styles.topRight}`,
    `${styles.bottomLeft}`,
    `${styles.bottomRight}`,
  ];

  const blackBoxOrder = [
    `${styles.topLeft}`,
    `${styles.topRight}`,
    `${styles.bottomLeft}`,
    `${styles.bottomRight}`,
  ];

  return (
    <main className={styles.wrapper}>
      <MouseTrail />
      <SidebarNavigation activeSection={activeSection} />

      <section id="white" className={styles.whiteSection}>
        <div className={styles.boxContainer}>
          {links.map((link, i) => (
            <motion.a
              key={link.href + 'white'}
              href={link.href}
              className={`${styles.boxWhite} ${whiteBoxOrder[i]}`}
              whileHover={!isTouchDevice ? { background: 'linear-gradient(to top, rgba(0, 112, 255, 0.3), transparent)' } : {}}
              whileTap={isTouchDevice ? { background: 'linear-gradient(to top, rgba(0, 112, 255, 0.3), transparent)' } : {}}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <video
          className={styles.video}
          src="/blue_flower_mysite.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </section>

      <section id="black" className={styles.blackSection}>
        <div className={styles.boxContainer}>
          {links.map((link, i) => (
            <motion.a
              key={link.href + 'black'}
              href={link.href}
              className={`${styles.boxBlack} ${blackBoxOrder[i]}`}
              whileHover={!isTouchDevice ? { background: 'linear-gradient(to top, rgba(0, 255, 100, 0.3), transparent)' } : {}}
              whileTap={isTouchDevice ? { background: 'linear-gradient(to top, rgba(0, 255, 100, 0.3), transparent)' } : {}}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <video
          className={styles.video}
          src="/black_tear_mysite.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </section>
    </main>
  );
}
