'use client';

import { useEffect, useRef, useState } from 'react';

type Trail = { x: number; y: number; id: number; color: string };

export default function MouseTrail() {
  const [trails, setTrails] = useState<Trail[]>([]);
  const idCounter = useRef(0); // Ref per evitare duplicati

  useEffect(() => {
    const handleMove = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      const y = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
      const absoluteY = y + window.scrollY;

      const pageHeight = window.innerHeight;
      const currentColor = absoluteY < pageHeight ? '#FF0000' : '#FF5500';

      const id = idCounter.current++;
      setTrails((prev) => [...prev, { x, y: absoluteY, id, color: currentColor }]);

      setTimeout(() => {
        setTrails((prev) => prev.filter((t) => t.id !== id));
      }, 1442);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return (
    <>
      {trails.map((trail) => (
        <div
          key={trail.id}
          style={{
            position: 'absolute',
            top: trail.y,
            left: trail.x,
            width: 9,
            height: 1,
            backgroundColor: trail.color,
            borderRadius: '100%',
            pointerEvents: 'none',
            transform: 'translate(-50%, -50%)',
            // opacity: 0.51,
            filter: 'blur(1px)',
            transition: 'opacity 0.5s ease-out',
            zIndex: 9999,
          }}
        />
      ))}
    </>
  );
}
