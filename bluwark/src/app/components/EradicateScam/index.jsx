import React from 'react'
import phishing from "../../components/Assets/images/phishing.png"

const EradicateScam = () => {
  return (
		<div className="flex flex-col gap-12 ">
			<img src={phishing} />
			<div className="self-start border border-blue-950 w-full mx-auto p-4">
				<div className="my-4">
					<details className="border rounded p-4 shadow-md ">
						<summary className="font-bold">
							What is Scam Protection?
						</summary>
						<p className="mt-2 text-sm text-left">
							Scam Protection is a set of tools and services that help
							organizations detect, identify, prevent damage and protect
							from digital scam; it comprises both scam prevention and
							scam detection strategies. Scam Protection services are
							used to protect the digital identity of users, block bot
							activity and prevent fraud. Fraud Protection helps reduce
							fraud losses and improve user experience in automated
							customer systems. Bulwark Scam Protection allows you to
							detect the following types of Scam: social engineering
							attacks (phishing sites, email scams etc.),Payment fraud,
							account fraud, malware-related and credit frauds etc.
						</p>
					</details>
				</div>
				<div className="my-4">
					<details className="border rounded p-4 shadow-md">
						<summary className="font-bold">
							What change do we need to make to start protecting our
							website(s)?
						</summary>
						<p className="mt-2 text-sm text-left">
							To protect your website(s), you simply need to add our Web
							Snippet to your site. The Web Snippet is a client module
							that is built into the protected application, and from the
							moment the first page of the application is loaded, it
							transmits indicators of compromise, the behavioral
							characteristics of the user, and the environment in which
							the application is running to the server-side of the scam
							Protection.
						</p>
					</details>
				</div>
				<div className="my-4">
					<details className="border rounded p-4 shadow-md">
						<summary className="font-bold">
							Can you integrate Bulwark Scam Protection solution into my
							Risk Management platform?
						</summary>
						<p className="mt-2 text-sm text-left">
							The Scam Protection solution can integrate into any Risk
							Management Platform that uses API. We can provide Pull and
							Push mode APIs.
						</p>
					</details>
				</div>
			</div>
		</div>
  );
}

export default EradicateScam
