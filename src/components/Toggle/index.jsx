import { useState, useEffect } from 'react';
import { Moon, Sun } from 'react-feather';
import styles from './Toggle.module.scss';

export default function Toggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <button
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />}
    </button>
  );
}
