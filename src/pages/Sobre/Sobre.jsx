import { Link } from "react-router-dom";
import styles from "./Sobre.module.css";

function Sobre() {
  return (
    <div className={styles.SobreContainer}>
      <div className={styles.CardAbout}>
        <img
          src="https://images.pexels.com/photos/5498233/pexels-photo-5498233.jpeg"
          alt="Equipe Mercado Fechado"
        />
        <div className={styles.text}>
          <h1>Quem somos?</h1>
          <p>Eramos alguem, não somos mais</p>
          <h2>Nossa missão</h2>
          <h4>Tinhamos uma missão, não temos mais</h4>
        </div>
      </div>
      <div className={styles.CardAlert}>
        <div className={styles.block}>
          <span className={styles.icon}>❗</span>
        </div>
        <div className={styles.alertContent}>
          <p>
            Fechamos, mas você pode acessar uma rota ai que não sabemos pra onde vai.
          </p>
          <Link to="/404Error" className={styles.alertLink}>
            Sua conta e Risco 
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
