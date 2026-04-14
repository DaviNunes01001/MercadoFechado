import styles from "./404Error.module.css";
import { Link } from "react-router-dom";

function Error404() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <span className={styles.code}>404</span>
        <h1>Página não encontrada</h1>
        <p>
          A rota que você tentou acessar não existe. Volte para a página inicial
          ou confira o menu.
        </p>
        <Link className={styles.button} to="/">
          Voltar Para Home
        </Link>
      </div>
    </section>
  );
}

export default Error404;
