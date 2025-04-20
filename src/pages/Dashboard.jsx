import React from "react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [time, setTime] = useState(new Date());
  const [prompt, setPrompt] = useState("");

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePromptSubmit = () => {
    console.log("Prompt submitted:", prompt);
    // 🔮 Future: call your AI here
    setPrompt("");
  };

  return (
    <div className="min-h-screen bg-nb-black text-nb-yellow p-6 font-mono">
      <h1 className="text-4xl font-bold mb-6 animate-pulse">Welcome to your command deck, Oli</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* 🧠 User Info */}
        <div className="p-4 bg-nb-purple/20 border border-nb-purple rounded-2xl shadow">
          <h2 className="text-lg font-bold mb-1">👤 User</h2>
          <p>Name: Oli</p>
          <p>Status: Logged in</p>
        </div>

        {/* ⏱️ Live Clock */}
        <div className="p-4 bg-nb-purple/20 border border-nb-purple rounded-2xl shadow">
          <h2 className="text-lg font-bold mb-1">🕒 Local Time</h2>
          <p className="text-xl">{time.toLocaleTimeString()}</p>
        </div>

        {/* 📊 AI Usage */}
        <div className="p-4 bg-nb-purple/20 border border-nb-purple rounded-2xl shadow">
          <h2 className="text-lg font-bold mb-1">🧠 AI API Usage</h2>
          <p>Tokens used today: 1,342</p>
          <p>Requests: 27</p>
        </div>

        {/* 💬 Prompt Input */}
        <div className="md:col-span-2 p-4 bg-nb-purple/20 border border-nb-purple rounded-2xl shadow">
          <h2 className="text-lg font-bold mb-2">💬 Quick Prompt</h2>
          <div className="flex gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ask your AI something..."
              className="flex-1 px-3 py-2 bg-nb-black border border-nb-yellow text-white rounded"
            />
            <button
              onClick={handlePromptSubmit}
              className="px-4 py-2 bg-nb-yellow text-nb-black font-bold rounded hover:bg-nb-purple hover:text-nb-yellow transition"
            >
              GO
            </button>
          </div>
        </div>

        {/* 🎵 Music Queue */}
        <div className="p-4 bg-nb-purple/20 border border-nb-purple rounded-2xl shadow">
          <h2 className="text-lg font-bold mb-1">🎵 Now Playing</h2>
          <p className="text-sm text-white/60 italic">[ nothing queued — feed me beats ]</p>
        </div>

        {/* 🎮 Action Panel */}
        <div className="p-4 bg-nb-purple/20 border border-nb-purple rounded-2xl shadow flex flex-col gap-2">
          <h2 className="text-lg font-bold mb-1">🎮 Actions</h2>
          <button className="w-full px-4 py-2 bg-nb-yellow text-nb-black font-bold rounded hover:bg-nb-purple hover:text-nb-yellow transition">
            Run AI
          </button>
          <button className="w-full px-4 py-2 bg-nb-yellow text-nb-black font-bold rounded hover:bg-nb-purple hover:text-nb-yellow transition">
            Generate Beat
          </button>
        </div>
      </div>
    </div>
  );
}