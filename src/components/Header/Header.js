import styles from './styles.module.css';
import Logo from '../../images/logo.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt='Логотип' className={styles.logo} />
    </header>
  );
}

export default Header;
