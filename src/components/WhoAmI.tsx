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
      <hr
        style={{
          border: 'none',
          borderTop: `1px solid ${textColor}`,
          width: '100%',
          margin: '2rem 0',
        }}
      />
      {isOpen && (
        <p
          style={{
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
            color: textColor,
            lineHeight: 1.6,
          }}
        >
          Hello, I'm Tobia Schettini, a full stack developer passioned in new technologies and design.
        </p>
      )}
    </div>
  );
}
