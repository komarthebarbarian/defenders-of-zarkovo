"use client";
import { useState, useEffect } from "react";

export default function Sound() {
  const [audio, setAudio] = useState(null); // State to hold the Audio object

  useEffect(() => {
    const audioElement = new Audio("/sound.wav"); // sound.wav is in the public directory
    setAudio(audioElement); // Store the Audio object in state
  }, []); // Empty dependency array to run only once on component mount

  const start = () => {
    if (audio) {
      audio.play().catch((error) => {
        console.error("Audio playback error:", error);
      });
    }
  };
  return <button onClick={start}>Audio</button>;
}
