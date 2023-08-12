import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { homeSafeMessage } from "@/lib/home-safe-message";
import { sosMessage } from "@/lib/sos-message";

export default function JourneyEnd() {
	const router = useRouter();
	const { name, phoneNumber, duration } = router.query;

	return (
		<>
			<h1>Your journey has ended</h1>
			<Link
				href="/"
				className="home-btn"
				onClick={() => homeSafeMessage({ number: phoneNumber, name: name })}
			>
				I'm home - send a message
			</Link>

				<Link
					href="/"
					className="sos-btn"
					onClick={() => sosMessage({ number: phoneNumber, name: name })}
				>
					SOS
				</Link>
				<p className="distress-msg">*If you choose SOS, a distress message will be sent to {name}.</p>
		</>
	);
}
