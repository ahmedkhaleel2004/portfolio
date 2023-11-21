"use client";

import React, { useState } from "react";

interface ClientWordProps {
	initial: string;
	words: Array<string>;
	className: string;
}

const ClientWord: React.FC<ClientWordProps> = ({
	initial,
	words,
	className,
}) => {
	const [currentWord, setCurrentWord] = useState(initial);
	// event handler
	const changeWord = () => {
		if (words) {
			const currentIndex = words.indexOf(currentWord);
			let newIndex = currentIndex + 1;
			if (newIndex === words.length) {
				newIndex = 0;
			}

			const newWord = words[newIndex];
			setCurrentWord(newWord);
		}
	};
	return (
		<span className={className} onClick={changeWord}>
			{currentWord}
		</span>
	);
};

export default ClientWord;
