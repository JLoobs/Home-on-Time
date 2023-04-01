import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { startJourney } from '@/lib/start-journey'
import { sosMessage } from '@/lib/sos-message'
import { homeSafeMessage } from '@/lib/home-safe-message'
import Link from 'next/link'
import Image from 'next/image'

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

        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>src/pages/index.js</code>
          </p>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
            onClick = { () => sosMessage({number: '+447594113444', name: 'Rachel'}) }
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
              onClick = { () => homeSafeMessage({number: '+447852249988', name: 'Rachel'}) }
            />
          </div>
        </div>

      </main>
    </>
  )
}
