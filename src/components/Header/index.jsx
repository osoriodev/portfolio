import Toggle from '../Toggle';
import { Menu } from 'react-feather';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <button
        className={styles.btn}
        aria-label="Menu"
        onClick={() => document.getElementById('menu').classList.toggle(styles.active)}
      >
        <Menu className={styles.icon} />
      </button>
      <a className={styles.logo} href="/">David<span>.</span></a>
      <nav className={styles.menu} id="menu">
        <ul className={styles.list}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <Toggle />
    </header>
  );
}
