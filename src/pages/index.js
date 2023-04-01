import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home on Time</title>
        <meta name="description" content="An app to make sure women have arrived home on time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Home on Time</h1>
        <p>So your friend knows that you arrived home safely.</p>
        <div>
          <Link href="/journey_start">
          <button>Start my Journey</button>
          </Link>
        </div> 
      </main>
    </>
  )
}
