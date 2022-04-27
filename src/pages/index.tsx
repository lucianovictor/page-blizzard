import { Banner } from 'components/Banner'
import { Games } from 'components/Games'
import Head from 'next/head'

// import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blizzard</title>
      </Head>
      <Banner />
      <Games />
    </>
  )
}
