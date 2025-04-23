'use client';

import styles from './page.module.css';
import AboutMeVertical from '../components/AboutMeVertical';
import ContactVertical from '../components/ContactVertical';
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

// Mappa immagini per i loghi colorati
const iconMap: Record<string, { blue: string; green: string }> = {
  GitHub: {
    blue: '/icons/github_blue.png',
    green: '/icons/github_green.png',
  },
  Vercel: {
    blue: '/icons/vercel_blue.png',
    green: '/icons/vercel_green.png',
  },
  LinkedIn: {
    blue: '/icons/linkedin_blue.png',
    green: '/icons/linkedin_green.png',
  },
  "What's Next": {
    blue: '',
    green: '',
  },
};

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

      {/* Sezione Bianca */}
      <section id="white" className={styles.whiteSection}>
        <WhoAmI isDarkMode={false} />
        <div className={styles.boxContainer}>
          {links.map((link, i) => (
            <a
              key={link.href + 'white'}
              href={link.href}
              className={`${styles.boxWhite} ${whiteBoxOrder[i]}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              {iconMap[link.label]?.blue && (
                <img
                  src={iconMap[link.label].blue}
                  alt={`${link.label} logo`}
                  style={{ width: '24px', height: '24px', marginBottom: '6px' }}
                />
              )}
              <span>{link.label}</span>
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

      {/* Sezione Nera */}
      <section id="black" className={styles.blackSection}>
        <WhoAmI isDarkMode={true} />
        <div className={styles.boxContainer}>
          {links.map((link, i) => (
            <a
              key={link.href + 'black'}
              href={link.href}
              className={`${styles.boxBlack} ${blackBoxOrder[i]}`}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
            >
              {iconMap[link.label]?.green && (
                <img
                  src={iconMap[link.label].green}
                  alt={`${link.label} logo`}
                  style={{ width: '24px', height: '24px', marginBottom: '6px' }}
                />
              )}
              <span>{link.label}</span>
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
