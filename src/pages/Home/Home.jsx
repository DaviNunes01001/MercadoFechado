import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.Container}>
        <section className={styles.Banner}>
          <h1>Conheça os Maiores Preços do Mercado 🎈</h1>
          <h2>Taxas Incriveis!!</h2>
        </section>

        <div className={styles.CardHero}>
          <img src="https://images.pexels.com/photos/4062467/pexels-photo-4062467.jpeg" alt="O melhor do Mercado" />
          <div className={styles.text}>
            <h2>Maiores Preços do Mercado</h2>
            <h5>Super Juros</h5>
            <p>Quer desconto? desiste, nois te daremos taxa!!</p>
          </div>
        </div>

        <div className={styles.CardContainer}>
          <div className={styles.Card}>
            <p className={styles.emoji}>💲</p>
            <p>Lider em Taxas</p>
          </div>

          <div className={styles.Card}>
            <p className={styles.emoji}>🤬</p>
            <p>Mais de 5K de reclamações não atendidas</p>
          </div>

          <div className={styles.Card}>
            <p className={styles.emoji}>🧠</p>
            <p>300 Processos perdidos</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
