import Router from 'next/router'
import { useState } from 'react'

export default function JourneyStart() {
  const [duration, setDuration] = useState(30);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    Router.push({ pathname: "/journey_progress", query: { name, phoneNumber, duration } });
  }

  return (
    <>
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
          placeholder="+44762676690"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required />

        <label>Duration (in minutes)</label>
        <input type="min" placeholder=""
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}