"use client";

import { useState } from "react";

export default function NoteForm({ onAdded }: { onAdded?: () => void }) {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    console.log("Sending:", { title });
    await fetch("/notes/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title }),
    });
    setTitle("");
    setLoading(false);
    onAdded?.();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        className="border border-gray-300 w-full p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-4 py-2 rounded-lg transition disabled:opacity-50"
      >
        {loading ? "Adding..." : "Add Note"}
      </button>
    </form>
  );
}
