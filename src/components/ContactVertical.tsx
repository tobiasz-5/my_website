'use client';

import { useState, useEffect } from 'react';

export default function ContactVertical({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const textColor = isDarkMode ? '#00FF88' : '#0070f3';
  const arrow = isOpen ? '>' : '<';

  // Gestisce il resize per determinare se siamo su mobile (max-width:600px)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Valori condizionali per mobile
  const closedWidth = isMobile ? '22px' : '50px';//qui
  const openWidth = isMobile ? '280px' : '320px';
  const padding = isMobile ? '8px 4px' : '10px 5px';
  const fontSizeTitle = isMobile ? '0.9rem' : '1.1rem';
  const fontSizeArrow = isMobile ? '0.9rem' : '1.1rem';
  const fontSizeContent = isMobile ? '0.7rem' : '0.8rem';

  return (
    <div
      style={{
        position: 'fixed',
        top: '54%',
        right: 0,
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 9998,
        width: isOpen ? openWidth : closedWidth,
        transition: 'all 0.5s ease',
        background: isDarkMode ? 'black' : 'white',
        padding: padding,
        boxShadow: isOpen ? `-4px 0 12px rgba(0, 0, 0, 0.2)` : 'none',
        overflow: 'visible',
      }}
    >
      {/* Linea verticale sempre visibile */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '1px',
          height: '180%',
          backgroundColor: textColor,
        }}
      />

      {/* Scritta CONTACT in verticale */}
      <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
        <h2
          style={{
            margin: 0,
            fontSize: fontSizeTitle,
            color: textColor,
            cursor: 'pointer',
            userSelect: 'none',
            letterSpacing: '0.2rem',
          }}
          onClick={() => setIsOpen(!isOpen)}
        >
          CONTACT
        </h2>
      </div>

      {/* Freccia per toggle */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          marginTop: '10px',
          fontSize: fontSizeArrow,
          color: textColor,
          cursor: 'pointer',
          transition: 'transform 0.3s ease',
        }}
      >
        {arrow}
      </div>

      {/* Contenuto espandibile */}
      <div
        style={{
          marginTop: '20px',
          maxHeight: isOpen ? '1000px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
          opacity: isOpen ? 1 : 0,
          color: textColor,
          paddingLeft: isOpen ? '10px' : '0',
          paddingRight: isOpen ? '10px' : '0',
          textAlign: 'left',
          fontSize: fontSizeContent,
          lineHeight: '1.4',
        }}
      >
        <p>
          <strong>schettinitobia@gmail.com</strong> <br />
          always open to collaborations and freelance projects!
        </p>
      </div>
    </div>
  );
}
