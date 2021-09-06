import styles from './styles.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
}

export default Footer;
