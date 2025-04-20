import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-nb-purple to-nb-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl md:text-7xl font-bold animate-pulse text-nb-yellow drop-shadow-lg">
        Oli
      </h1>
      <p className="mt-4 text-lg md:text-xl text-center max-w-xl text-white/80">
        Forged in code. Focused on change. This is where tech meets intention — and ambition takes root.
      </p>

      <div className="flex gap-6 mt-8 text-3xl">
        <a
          href="https://github.com/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-nb-yellow transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/YOUR_USERNAME"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-nb-yellow transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
      </div>

      <a
        href="/dashboard"
        className="mt-10 px-6 py-3 border-2 border-nb-yellow text-nb-yellow hover:bg-nb-yellow hover:text-nb-black transition-all duration-300 rounded-full text-sm tracking-wider"
      >
        ENTER
      </a>
    </div>
  );
}