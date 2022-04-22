import { Banner } from 'components/Banner'
import Head from 'next/head'

// import styles from 'styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Blizzard</title>
      </Head>
      <Banner />
    </>
  )
}
