import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import React from 'react';
import { useTimer } from 'react-timer-hook';

export default function Home({ expiryTimestamp }) {
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
      } = useTimer({ expiryTimestamp});
    
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

        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        <Link href="/">
            <button>SOS</button>
        </Link> 

      </main>
    </>
  )
}