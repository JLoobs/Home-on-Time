import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import CountdownTimer from '/CountdownTimer';

export default function Home() {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
      <Head>
        <title>Safe on Time</title>
        <meta name="description" content="An app to make sure women have arrived home on time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Journey in progress</h1>
        <Link href="/">
            <button>I'm home</button>
        </Link> 

        <Timer />

        <Link href="/">
            <button>SOS</button>
        </Link> 

        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
      </main>
    </>
  )
}