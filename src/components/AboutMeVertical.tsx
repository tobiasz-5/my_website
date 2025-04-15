'use client';

import { useState } from 'react';

export default function AboutMeVertical({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const textColor = isDarkMode ? '#00FF88' : '#0070f3';
  const arrow = isOpen ? '>' : '<';

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        right: isOpen ? '320px' : '50px',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 9997,
        width: isOpen ? '320px' : '50px',
        transition: 'width 0.5s ease',
        background: isDarkMode ? 'black' : 'white',
        padding: '10px 5px',
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
          height: '170%',
          backgroundColor: textColor,
        }}
      />

      {/* Scritta ABOUT ME in verticale */}
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
          ABOUT ME
        </h2>
      </div>

      {/* Freccia per toggle */}
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero non metus facilisis
          suscipit. Nulla facilisi. Vestibulum ullamcorper, libero a volutpat facilisis, purus metus
          fermentum est, sed sagittis diam purus nec arcu. Pellentesque ac feugiat risus. Integer
          condimentum lectus vitae orci eleifend, nec blandit mauris fermentum. Proin nec posuere lorem,
          vel fermentum diam. Ut laoreet, orci sed fringilla facilisis, risus eros commodo justo, sit amet
          tristique lorem magna a magna. Suspendisse potenti. Curabitur at felis velit. In hac habitasse
          platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
      </div>
    </div>
  );
}
