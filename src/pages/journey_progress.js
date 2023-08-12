import Link from 'next/link'
import React, { useEffect } from 'react';
import Router, { useRouter } from "next/router";
import { useTimer } from 'react-timer-hook';
import { startJourney } from '@/lib/start-journey';
import { homeSafeMessage } from '@/lib/home-safe-message';
import { sosMessage } from '@/lib/sos-message';

export default function JourneyProgress() {
  const router = useRouter();
  const { name, phoneNumber, duration } = router.query;
  const durationInSeconds = duration * 60;

  const time = new Date();
  time.setSeconds(time.getSeconds() + durationInSeconds);

  const {
    seconds,
    minutes,
    hours,
  } = useTimer({ expiryTimestamp: time, onExpire: () => Router.push({ pathname: "/journey_end", query: { name, phoneNumber, duration } }) });

  useEffect(() => {
    startJourney({ duration: durationInSeconds, number: phoneNumber, name: name });
  }, [])

  return (
    <>
      <h1>Journey in progress</h1>
      <Link href="/journey_start" className="back-btn">Go Back</Link>
      <Link href="/"
        className="home-btn"
        onClick={() => homeSafeMessage({ number: phoneNumber, name: name })}>I'm home
      </Link>
      <div className="timer">
        <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <Link href="/"
        className="sos-btn"
        onClick={() => sosMessage({ number: phoneNumber, name: name })}>SOS
      </Link>
    </>
  )
}