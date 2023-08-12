import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home on Time</h1>
      <p>So your friend knows that you arrived home safely.</p>
        <Link href="/journey_start">Start my Journey</Link>
    </>
  )
}
