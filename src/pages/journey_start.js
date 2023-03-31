import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Head>
        <title>Safe on Time</title>
        <meta name="description" content="An app to make sure women have arrived home on time." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Set your emergency contact</h1>
        <form>
            <label>Name</label>
            <input type="text" placeholder="Enter your contact's name" />
            <label>Phone number</label>
            <input type="tel" placeholder="07626766" required/>
            <label>Duration</label>
            <input type="min" placeholder="" required/>

            <Link href="/journey_progress">
            <button>Start Journey</button>
            </Link>    
        </form>

      </main>
    </>
  )
}