import { useState } from 'react'
import { IconArrowDown } from 'static'
import styles from './styles.module.scss'

const Games = [
  'COD:Warzone',
  'Diablo',
  'Starcraft',
  'Overwatch',
  'World of Warcraft'
]

const Sports = [
  'Copa Mundial de Overwatch',
  'Liga De Overwatch',
  'Hearthstone Masters',
  'StarCratf II Wcs',
  'Campeonato Mundial de Arean World of Warcraft'
]

type NavItemKeyProps = 'games' | 'e-sports' | ''

export const Header = () => {
  const [activeNavItem, setActiveNavItem] = useState<NavItemKeyProps>('')

  const handleActiveNavItem = (navItemKey: NavItemKeyProps): void => {
    const isClose = navItemKey === activeNavItem
    setActiveNavItem(isClose ? '' : navItemKey)
  }

  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <img src="/logo.png" alt="Logo da Blizzard" />

        <nav>
          <ul className={styles.navigation}>
            <li className={activeNavItem === 'games' ? styles.active : ''}>
              <span onClick={() => handleActiveNavItem('games')}>
                Jogos <IconArrowDown />
              </span>
              <ul className={styles.dropdown}>
                {Games.map(game => (
                  <li key={game} className={styles.dropdown__item}>
                    {game}
                  </li>
                ))}
              </ul>
            </li>
            <li className={activeNavItem === 'e-sports' ? styles.active : ''}>
              <span onClick={() => handleActiveNavItem('e-sports')}>
                E-sportes <IconArrowDown />
              </span>

              <ul className={styles.dropdown}>
                {Sports.map(sport => (
                  <li key={sport} className={styles.dropdown__item}>
                    {sport}
                  </li>
                ))}
              </ul>
            </li>
            <li>Loja</li>
            <li>Notícias</li>
            <li>Suporte </li>
          </ul>
        </nav>

        <div className={styles.buttons}>
          <button type="button">Criar conta</button>
          <button type="button">Logar</button>
        </div>
      </div>
    </header>
  )
}
