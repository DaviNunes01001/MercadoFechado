import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className={styles.Container}>
      <h1>Mercado Fechado</h1>

      <nav>
        <Link to="/" className={styles.linkBnt}>Home</Link>
        <Link to="/sobre" className={styles.linkBnt}>Sobre</Link>
        <Link to="/contato" className={styles.linkBnt}>Contato</Link>
        <Link to="/services" className={styles.linkBnt}>Services</Link>
      </nav>
    </header>
  );
}

export default Header;