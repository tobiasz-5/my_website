// /src/app/page.tsx
'use client';

import styles from './page.module.css';
import AboutMeVertical from '../components/AboutMeVertical';
import ContactVertical from '../components/ContactVertical';
// import Link from 'next/link';
import MouseTrail from '../components/MouseTrail';
import SidebarNavigation from '../components/SidebarNavigation';
import DraggableLogoMenu from '../components/DraggableLogoMenu';
import WhoAmI from '../components/WhoAmI';
import { useEffect, useState } from 'react';

const links = [
  { href: 'https://github.com/tobiasz-5', label: 'GitHub' },
  { href: 'https://vercel.com/tobias-zs-projects', label: 'Vercel' },
  { href: 'https://www.linkedin.com/in/tobia-schettini-developer/', label: 'LinkedIn' },
  { href: '#', label: "What's Next" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<'white' | 'black'>('white');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      setActiveSection(scrollY < viewportHeight / 2 ? 'white' : 'black');
    };

    window.addEventListener('scroll', handleScroll);
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
      <DraggableLogoMenu />
      <AboutMeVertical isDarkMode={activeSection === 'black'} />
      <ContactVertical isDarkMode={activeSection === 'black'} />

      <section id="white" className={styles.whiteSection}>
        <WhoAmI isDarkMode={false} />
        <div className={styles.boxContainer}>
          {links.map((link, i) => (
            <a
              key={link.href + 'white'}
              href={link.href}
              className={`${styles.boxWhite} ${whiteBoxOrder[i]}`}
            >
              {link.label}
            </a>
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
        <WhoAmI isDarkMode={true} />
        <div className={styles.boxContainer}>
          {links.map((link, i) => (
            <a
              key={link.href + 'black'}
              href={link.href}
              className={`${styles.boxBlack} ${blackBoxOrder[i]}`}
            >
              {link.label}
            </a>
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
    </main>
  );
}
