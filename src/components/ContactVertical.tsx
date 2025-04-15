'use client';

import { useState } from 'react';

export default function ContactVertical({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = isDarkMode ? '#00FF88' : '#0070f3';
  const arrow = isOpen ? '>' : '<';

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: 0, // si posiziona a sinistra rispetto a AboutMeVertical
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 9998,
        width: isOpen ? '320px' : '50px',
        transition: 'all 0.5s ease',
        background: isDarkMode ? 'black' : 'white',
        padding: '10px 5px',
        boxShadow: isOpen ? `-4px 0 12px rgba(0, 0, 0, 0.2)` : 'none',
        overflow: 'visible',
      }}
    >
      {/* Linea verticale */}
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

      {/* Scritta CONTACT verticale */}
      <div style={{ writingMode: 'vertical-rl', textOrientation: 'upright' }}>
        <h2
          style={{
            margin: 0,
            fontSize: '1.2rem',
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

      {/* Freccia */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          marginTop: '10px',
          fontSize: '1.5rem',
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
          fontSize: '0.9rem',
          lineHeight: '1.4',
        }}
      >
        <p>
          You can reach me at: <br />
          <strong>tobia@example.com</strong> <br />
          Or find me on LinkedIn, GitHub, and other platforms. <br /><br />
          I'm always open to collaborations, freelance projects, or just having a coffee chat about tech and design!
        </p>
      </div>
    </div>
  );
}
