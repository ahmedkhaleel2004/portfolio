import React from "react";
import ClientWord from "./components/ClientWord";

const Home: React.FC = () => {
	const words = [
		"portfolio",
		"lobby",
		"home",
		"arena",
		"dungeon",
		"server",
		"environment",
		"node",
		"interface",
	];

	return (
		<main className="font-body p-8">
			<h1 className="text-4xl mb-8">👋🏼 Hey, I'm Ahmed.</h1>
			<p className="mb-6">
				Welcome to my{" "}
				<ClientWord
					initial="portfolio"
					words={words}
					className="underline cursor-pointer transition-all duration-200 ease-in-out hover:text-nice-blue"
				/>
				!
			</p>
			<p className="mb-6">
				I'm a second year Computer Engineering student at McMaster
				University 🎓 based in Hamilton, ON.
			</p>
			<p className="mb-6">
				When I'm not clicking on virtual heads 🎮 and improving myself
				💪🏼, I dive into the{" "}
				<span className="">Software Engineering</span> rabbit hole 🕳️.
			</p>

			<p>
				Contact me at{" "}
				<a
					href="mailto:ahmedkhaleel2004@gmail.com"
					className="underline transition-colors duration-200 ease-in-out hover:text-nice-blue"
				>
					ahmedkhaleel2004@gmail.com
				</a>
				.
			</p>
		</main>
	);
};

export default Home;
