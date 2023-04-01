import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import  Router  from 'next/router'
import { useState } from 'react'

export default function Home() {
    const [duration, setDuration] = useState(0);
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState('+15005550006');

    const handleSubmit = (event) => {
        event.preventDefault();
        Router.push({ pathname: "/journey_progress", query: { name, phoneNumber, duration }});
    }

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
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input 
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your contact's name" />

            <label>Phone number</label>
            <input type="tel" 
            placeholder="0762676690"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required/>

            <label>Duration (in minutes)</label>
            <input type="min" placeholder=""             
            value={duration} 
            onChange={(e) => setDuration(e.target.value)}
            required/>

            <button type="submit">Submit</button>
        </form>

      </main>
    </>
  )
}