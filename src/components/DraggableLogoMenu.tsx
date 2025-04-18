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

  useEffect(() => {
    const handleScroll = () => {
      const blackSection = document.getElementById('black');
      if (!blackSection) return;

      // Ottieni i dati di bounding rect
      const rect = blackSection.getBoundingClientRect();

      // Se la sezione "black" è a meno di "metà viewport" dal top, attiva "black"; altrimenti "white"
      if (rect.top + 200 < window.innerHeight / 2) {
        setActiveSection('black');
      } else {
        setActiveSection('white');
      }
    };

    const updateConstraints = () => {
      setConstraints({
        left: 0,
        top: 0,
        right: window.innerWidth - 182,
        bottom: window.innerHeight - 92,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateConstraints);

    updateConstraints();
    handleScroll(); // Chiama subito per inizializzare

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateConstraints);
    };
  }, []);

  const logoSrc = activeSection === 'white' ? '/my_logo_blue.png' : '/my_logo_green.png';

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={constraints}
      style={{
        position: 'fixed',
        top: 33,
        left: 42,
        width: 182,
        height: 92,
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
            fontSize: '0.8rem',
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
