// /src/components/SidebarNavigation.tsx
'use client';

import styles from './sidebar.module.css';

type Props = {
  activeSection: 'white' | 'black';
};

export default function SidebarNavigation({ activeSection }: Props) {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const wrapperClass = `${styles.sidebar} ${activeSection === 'white' ? styles.white : styles.black}`;

  return (
    <nav className={wrapperClass}>
      <button
        onClick={() => scrollTo('white')}
        className={`${styles.dot} ${activeSection === 'white' ? styles.activeWhite : ''}`}
        aria-label="Go to white section"
      />
      <div className={styles.separator}></div>
      <button
        onClick={() => scrollTo('black')}
        className={`${styles.square} ${activeSection === 'black' ? styles.activeBlack : ''}`}
        aria-label="Go to black section"
      />
    </nav>
  );
}
