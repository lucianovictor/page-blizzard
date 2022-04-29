import styles from './styles.module.scss'
import Link from 'next/link'

import {
  IconBattleNet,
  IconLink,
  IconNintendo,
  IconPlaystation,
  IconXbox
} from 'static'

import games from 'data/games.json'
export const Games = () => (
  <section className={styles.container}>
    <div>
      <div className={styles.content}>
        <small>Games</small>
        <h2>Jogos exclusivos</h2>

        <div className={styles.platforms}>
          <IconBattleNet />
          <IconNintendo />
          <IconPlaystation />
          <IconXbox />
        </div>

        <Link href="/games">
          <a>
            <IconLink />
            Ver todos jogos
          </a>
        </Link>
      </div>
      <div className={styles.games}>
        {games.map(game => (
          <div className={styles.game} key={game.name}>
            <span />
            <img src={game.image} alt="" />
            <strong>{game.name}</strong>
            <p>{game.category}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)
