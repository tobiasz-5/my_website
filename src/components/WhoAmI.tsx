'use client';

import { useState } from 'react';

export default function WhoAmI({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = isDarkMode ? '#00FF88' : '#0070f3';
  const arrowColor = textColor;

  return (
    <div style={{ textAlign: 'center', paddingTop: '2rem', width: '100%' }}>
      <h1
        onClick={() => setIsOpen(!isOpen)}
        style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          color: textColor,
          cursor: 'pointer',
          marginBottom: '0.5rem',
        }}
      >
        whoami
      </h1>
      
      {/* Contenitore animato per il testo */}
      <div
        style={{
          maxHeight: isOpen ? '200px' : '0px',
          opacity: isOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
        }}
      >
        <p
          style={{
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto',
            color: textColor,
            lineHeight: 1.6,
          }}
        >
          Hello, I'm Tobia Schettini, a full stack developer passioned in new technologies and design.
        </p>
      </div>
      
      {/* Freccia per toggle */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          cursor: 'pointer',
          fontSize: '2rem',
          color: arrowColor,
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          marginBottom: '1rem',
        }}
      >
        ⌄
      </div>
      
      {/* Linea separatrice che occupa tutta la larghezza */}
      <hr
        style={{
          border: 'none',
          borderTop: `1px solid ${textColor}`,
          width: '100%',
          margin: '2rem 0',
        }}
      />
    </div>
  );
}
