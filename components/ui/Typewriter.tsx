"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
}

export function Typewriter({ text }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(interval);
      }
    }, 10);
    return () => clearInterval(interval);
  }, [text]);

  return <p className="text-lg leading-relaxed">{displayedText}</p>;
}
