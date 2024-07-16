"use client"
import { useState } from "react"
import Letter from "./components/Letter/Letter";

export default function Home() {
  const [answer, setAnswer] = useState('TERMO');
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex min-h-screen items-center justify-between p-24">
          {answer.split('').map((letter, index, array) => (
            <Letter letter={letter} key={index} answer={array} />
          ))}
      </div>
    </main>
  );
}
