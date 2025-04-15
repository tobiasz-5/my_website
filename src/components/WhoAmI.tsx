'use client';

import { useState, useEffect } from 'react';
import styles from './WhoAmI.module.css';

export default function WhoAmI({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Rileva se siamo su mobile (larghezza < 600px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const textColor = isDarkMode ? '#00FF88' : '#0070f3';
  const titleFontSize = isMobile ? '1rem' : '1.2rem';
  const titleLetterSpacing = isMobile ? '0.2rem' : '0.42rem';
  const arrowSize = isMobile ? '1.5rem' : '2rem';

  return (
    // Posiziona il contenitore in cima alla pagina
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', textAlign: 'center', zIndex: 9999 }}>
      {/* Contenitore per "WHOAMI" e la freccia in una riga */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px 0',
        }}
      >
        <h1
          onClick={() => setIsOpen(!isOpen)}
          className={styles.title}
          style={{
            color: textColor,
            cursor: 'pointer',
            fontSize: titleFontSize,
            letterSpacing: titleLetterSpacing,
            margin: 0,
          }}
        >
          WHOAMI
        </h1>
        <div
          onClick={() => setIsOpen(!isOpen)}
          style={{
            marginLeft: '42px',
            cursor: 'pointer',
            fontSize: arrowSize,
            color: textColor,
            transition: 'transform 0.3s ease',
            // transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transform: isOpen ? 'rotate(180deg) translateY(-24px)' : 'rotate(0deg) translateY(0px)',
            transformOrigin: 'center',
            position: 'relative',
            bottom: '13px' // <-- alza leggermente la freccia rispetto al testo
          }}
        >
          ⌄
        </div>
      </div>

      {/* Contenitore animato per il testo espandibile */}
      <div
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '0.9rem',
            maxWidth: '800px',
            margin: '0 auto',
            color: textColor,
          }}
        >
          Hello, I&apos;m a developer passioned in new technologies and design.
        </p>
      </div>

      {/* Linea separatrice */}
      <hr
        style={{
          border: 'none',
          borderTop: `1px solid ${textColor}`,
          width: '100%',
          marginTop: 0,
        }}
      />
    </div>
  );
}
