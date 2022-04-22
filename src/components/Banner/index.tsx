import { Header } from 'components/Header'
import styles from './styles.module.scss'

export const Banner = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <Header />
      <div>Ola Mundo</div>
    </div>
  </section>
)
