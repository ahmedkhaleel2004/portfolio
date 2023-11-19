"use client";

import React, { useState } from "react";

interface ClientWordProps {
	initial: string;
	words: Array<string>; // Optional if you don't always pass it
}

const ClientWord: React.FC<ClientWordProps> = ({ initial, words }) => {
	const [currentWord, setCurrentWord] = useState(initial);
	// event handler
	const changeWord = () => {
		if (words) {
			const currentIndex = words.indexOf(currentWord);
			let newIndex = currentIndex + 1;
			if (newIndex === words.length) {
				newIndex = 0;
			}
			// Select a random word from the words array
			const newWord = words[newIndex];
			setCurrentWord(newWord);
		}
	};
	return (
		<span
			className="cursor-pointer transition-all duration-200 ease-in-out hover:text-nice-blue"
			onClick={changeWord}
		>
			{currentWord}
		</span>
	);
};

export default ClientWord;
