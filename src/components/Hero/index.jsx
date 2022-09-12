import { Codepen, GitHub, Instagram, Linkedin, Twitter } from 'react-feather';
import profile from '../../assets/img/profile.png';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <img className={styles.img} src={profile} alt="Profile" />
      <h1 className={styles.title}>David Osorio</h1>
      <p className={styles.desc}>I'm a Front-End developer</p>
      <ul className={styles.social}>
        <li>
          <a
            href="https://github.com/osoriodev"
            aria-label="GitHub"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://codepen.io/osoriodev"
            aria-label="CodePen"
            target="_blank"
            rel="noreferrer"
          >
            <Codepen className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/osoriodev"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/osoriodev"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className={styles.icon} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/osorio.dev"
            aria-label="Instagram"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram className={styles.icon} />
          </a>
        </li>
      </ul>
      <a className={styles.cta} href="#work">My work</a>
      <p className={styles.advice}>Scroll Down</p>
      <span className={styles.mouse} aria-hidden="true"><i></i></span>
    </section>
  );
}
