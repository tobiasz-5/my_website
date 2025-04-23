'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function DraggableLogoMenu() {
  const [activeSection, setActiveSection] = useState<'white' | 'black'>('white');
  const [constraints, setConstraints] = useState<{ left: number; top: number; right: number; bottom: number }>({
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  });
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // 👈 NEW

  useEffect(() => {
    const handleScroll = () => {
      const blackSection = document.getElementById('black');
      if (!blackSection) return;

      const rect = blackSection.getBoundingClientRect();
      if (rect.top + 200 < window.innerHeight / 2) {
        setActiveSection('black');
      } else {
        setActiveSection('white');
      }
    };

    const updateConstraints = () => {
      const width = isMobile ? 120 : 182; // 👈 width dinamico
      const height = isMobile ? 60 : 92;  // 👈 height dinamico

      setConstraints({
        left: 0,
        top: 0,
        right: window.innerWidth - width,
        bottom: window.innerHeight - height,
      });
    };

    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile); // 👈 aggiorna mobile state
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleResize();     // 👈 inizializza isMobile
    updateConstraints();
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]); // 👈 triggera su cambio mobile

  const logoSrc = activeSection === 'white' ? '/my_logo_blue.png' : '/my_logo_green.png';
  const logoWidth = isMobile ? 91 : 182; // 👈
  const logoHeight = isMobile ? 46 : 92;  // 👈

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={constraints}
      style={{
        position: 'fixed',
        top: 33,
        left: 42,
        width: logoWidth,  // 👈
        height: logoHeight, // 👈
        zIndex: 10000,
        cursor: 'grab',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={() => setClicked(!clicked)}
    >
      <motion.img
        src={logoSrc}
        alt="Logo menu"
        style={{ width: '100%', height: '100%' }}
        draggable={false}
      />
      {clicked && (
        <span
          style={{
            color: activeSection === 'white' ? '#0070ff' : '#00ff64',
            fontSize: isMobile ? '0.7rem' : '0.8rem', // 👈 adattabile
            marginTop: 8,
            fontWeight: 'bold',
          }}
        >
          it will be a menu
        </span>
      )}
    </motion.div>
  );
}
