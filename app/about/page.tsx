import React from "react";
import ClientWord from "../components/ClientWord";
import ClientTechView from "../components/ClientTechView";

const About: React.FC = () => {
	const titlewords = [
		"Documentation",
		"Outline",
		"Summary",
		"Rundown",
		"Synopsis",
		"Overview",
	];
	const computerwords = [
		"tech support",
		"IT guy",
		"digital guru",
		"computer expert",
		"sysadmin",
		"technician",
	];
	const bucketlist = [
		"visit 195 countries 🌍",
		"go skydiving 🪂",
		"start a business 💼",
		"change the world 🌐",
		"create equality 🤝🏼",
		"learn languages 🔊",
		"increase discipline 😶",
		"run marathons 🏃🏼‍♂️",
		"climb mountains 🗻",
	];
	const techwords = ["Technology", "Stacks", "Services"];
	return (
		<main className="font-body p-8">
			<span className="text-3xl">📝</span>{" "}
			<ClientWord
				initial="Documentation"
				words={titlewords}
				className="underline text-3xl cursor-pointer transition-all duration-200 ease-in-out hover:text-nice-blue"
			/>
			<p className="mt-8">
				For as long as I can remember, I've always been the{" "}
				<ClientWord
					initial="tech support"
					words={computerwords}
					className="underline cursor-pointer transition-all duration-200 ease-in-out hover:text-nice-blue"
				/>{" "}
				in my family 💻. Honestly, I have to give credit to gaming for
				starting me off.
			</p>
			<p className="mt-6 mb-8">
				Of course, I exist outside of tech. I love doing more than
				watching, leading more than following. I learn through
				application and live off logic. In the future, I hope to{" "}
				<ClientWord
					initial="visit 195 countries 🌍"
					words={bucketlist}
					className="underline cursor-pointer transition-all duration-200 ease-in-out hover:text-nice-blue"
				/>
				.
			</p>
			<span className="text-3xl">🔧</span>{" "}
			<ClientWord
				initial="Skills"
				words={techwords}
				className="underline text-3xl p- cursor-pointer transition-all duration-200 ease-in-out hover:text-nice-blue"
			/>
			<p className="mt-8">
				I'm quite a multi-disciplinary engineer having dabbled in all
				the fun stuff:
			</p>
			<ClientTechView />
		</main>
	);
};

export default About;
