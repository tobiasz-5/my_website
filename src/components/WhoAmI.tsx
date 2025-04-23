'use client';

import { useEffect, useState } from 'react';

export default function WhoAmI({ isDarkMode = false }: { isDarkMode?: boolean }) {
  const textColor = isDarkMode ? '#00FF88' : '#0070f3';

  const commandText = 'whoami';
  const outputText = "I'm a developer passionate about new technologies and digital design";

  const [typedCommand, setTypedCommand] = useState('');
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [loopCount, setLoopCount] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // 📱 Rileva se siamo su mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // ✅ Indica che il componente è montato 
  useEffect(() => {
    setHasMounted(true);
  }, []);

  // ⏳ Attesa iniziale prima della digitazione
  useEffect(() => {
    const delay = setTimeout(() => setStartTyping(true), 1500);
    return () => clearTimeout(delay);
  }, [loopCount]);

  // 🖋️ Digitazione del comando e poi mostra output
  useEffect(() => {
    if (!startTyping) return;

    if (index < commandText.length) {
      const timeout = setTimeout(() => {
        setTypedCommand((prev) => prev + commandText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else if (!showOutput) {
      const delay = setTimeout(() => setShowOutput(true), 1200);
      return () => clearTimeout(delay);
    }
  }, [index, startTyping, showOutput]);

  // 🔁 Riparte da capo dopo 42 secondi
  useEffect(() => {
    if (!showOutput) return;
    const delay = setTimeout(() => {
      setTypedCommand('');
      setIndex(0);
      setStartTyping(false);
      setShowOutput(false);
      setLoopCount((prev) => prev + 1);
    }, 12000);
    return () => clearTimeout(delay);
  }, [showOutput]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        left: isMobile ? '10px' : '50%',
        transform: isMobile ? 'none' : 'translateX(-50%)',
        textAlign: 'left',
        zIndex: 9999,
        padding: isMobile ? '5px 10px' : '10px 20px',
        fontFamily: 'monospace',
        fontSize: isMobile ? '14px' : '0.95rem',
        color: textColor,
        width: isMobile ? '90vw' : '80ch',
        whiteSpace: isMobile ? 'pre-wrap' : 'nowrap',
        visibility: hasMounted ? 'visible' : 'hidden',
      }}
    >
      <div>
        <span>ts@portfolio:~$ </span>
        <span style={{ display: 'inline-block', minWidth: '6ch' }}>
          {typedCommand}
          {!showOutput && <span className="cursor">_</span>}
        </span>
      </div>

      {showOutput && (
        <div>
          <span>ts@portfolio:~$ </span>
          <span>{outputText}</span>
          <span className="cursor">_</span>
        </div>
      )}

      {/* ✅ HR che taglia tutto lo schermo */}
      <hr
        style={{
          position: 'relative',
          left: 'calc(-50vw + 50%)',
          width: '100vw',
          border: 'none',
          borderTop: `1px solid ${textColor}`,
          marginTop: '10px',
        }}
      />

      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .cursor {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </div>
  );
}
