import { Link } from "react-router-dom";
import styles from "./Contato.module.css";

function Contato() {
  return (
    <div className={styles.Container}>
      <div className={styles.CardContato}>
        <div className={styles.Header}>
          <h1>Entre em Contato</h1>
          <p>Estamos aqui para ajudar! Talvez não funcione.</p>
        </div>

        <div className={styles.Content}>
          <div className={styles.InfoSection}>
            <h2>Informações de Contato</h2>
            <div className={styles.ContactInfo}>
              <div className={styles.InfoItem}>
                <span className={styles.Icon}>📞</span>
                <div>
                  <strong>Telefone</strong>
                  <p>+55 (19) 12213-4223</p>
                </div>
              </div>
              <div className={styles.InfoItem}>
                <span className={styles.Icon}>✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>contato@mercadofechado.com</p>
                </div>
              </div>
              <div className={styles.InfoItem}>
                <span className={styles.Icon}>📍</span>
                <div>
                  <strong>Endereço</strong>
                  <p>Rua do Mercado, 123 - Centro</p>
                  <p>São Paulo - SP</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.FormSection}>
            <h2>Envie uma Mensagem</h2>
            <form className={styles.ContactForm}>
              <div className={styles.FormGroup}>
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" required />
              </div>
              <div className={styles.FormGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.FormGroup}>
                <label htmlFor="mensagem">Mensagem</label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  rows="5"
                  required
                ></textarea>
              </div>
              <Link to='../404Error/' className={styles.SubmitButton}>
                Enviar Mensagem
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contato;
