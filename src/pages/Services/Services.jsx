import { Link } from 'react-router-dom';
import styles from './Services.module.css';

function Services() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Produtos</h1>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <img className={styles.image} src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg" alt="Celular" />
                    <h2 className={styles.productTitle}>Celular Samsung</h2>
                    <p className={styles.price}>R$ 2000</p>
                    <Link className={styles.button} to="/404Error">Comprar</Link>
                </div>

                <div className={styles.card}>
                    <img className={styles.image} src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg" alt="Notebook" />
                    <h2 className={styles.productTitle}>Notebook Dell</h2>
                    <p className={styles.price}>R$ 3000</p>
                    <Link className={styles.button} to="/404Error">Comprar</Link>
                </div>
            </div>
        </div>
    )
}

export default Services