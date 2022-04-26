import { Header } from 'components/Header'
import { IconPlay } from 'static'
import styles from './styles.module.scss'

export const Banner = () => (
  <section className={styles.container}>
    <div className={styles.content}>
      <Header />
      <div className={styles.info}>
        <div className={styles.info__images}>
          <img src="/games-logo/game-1.png" alt="" />
          <img src="/games-logo/game-2.png" alt="" />
          <img src="/games-logo/game-3.png" alt="" />
          <img src="/games-logo/game-4.png" alt="" />
          <img src="/games-logo/game-5.png" alt="" />
        </div>

        <div className={styles.info__text}>
          <h1>Retorne à escuridão com o game Diablo IV</h1>
          <p>O retorno de Lilith traz uma era de escuridão e sofrimento</p>
          <button type="button">Jogue agora</button>
        </div>

        <div className={styles.info__game}>
          <img src="/diablo-logo.png" alt="Logo do jogo diablo" />
          <strong>Assista o trailer</strong>

          <div className={styles.trailer}>
            <img src="/trailer.png" alt="Trailer do jogo diablo" />
            <button type="button">
              <IconPlay />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
)
