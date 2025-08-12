"use client";
import React, { useState } from "react";

export default function Page() {
  const [input, setInput] = useState("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-6">
      <h1 className="text-4xl font-bold mb-8 text-center">
        True Cost AI
      </h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter something..."
        className="border rounded px-4 py-2 mb-4 w-full max-w-md"
      />

      <button
        onClick={() => alert(`You entered: ${input}`)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
      >
        Submit
      </button>

      {/* Highlighted Button for Hemang Upadhyay */}
      <button
        onClick={() => window.open("https://www.hemangupadhyay.com", "_blank")}
        className="mt-8 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded shadow-lg border-2 border-yellow-600 transition-all duration-200"
      >
        🚀 Built by Hemang Upadhyay
      </button>
    </main>
  );
}
