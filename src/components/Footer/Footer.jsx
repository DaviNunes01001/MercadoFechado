import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.TextFooter}>Feito Por Davi Nunes</p>
      <a href="https://github.com/DaviNunes01001/DaviNunes01001"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub"/></a>
    </footer>
  );
}

export default Footer;
