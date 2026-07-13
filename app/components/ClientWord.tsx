"use client";

import { useState } from "react";

interface ClientWordProps {
  initial: string;
  words: readonly string[];
  className: string;
}

function ClientWord({ initial, words, className }: ClientWordProps) {
  const [currentWord, setCurrentWord] = useState(initial);

  const changeWord = () => {
    if (words.length === 0) {
      return;
    }

    setCurrentWord((word) => {
      const nextIndex = (words.indexOf(word) + 1) % words.length;
      return words[nextIndex] ?? word;
    });
  };

  return (
    <button
      type="button"
      className={`${className} inline appearance-none border-0 bg-transparent p-0 font-[inherit] text-inherit`}
      onClick={changeWord}
    >
      {currentWord}
    </button>
  );
}

export default ClientWord;
