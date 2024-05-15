"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Sound from "../components/Sound";

export default function Home() {
  const [gameStart, setGameStart] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Defenders of Zarkovo</h1>
      <Sound />
    </main>
  );
}
