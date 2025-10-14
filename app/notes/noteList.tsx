"use client";

interface Note {
  id: number;
  title: string;
}

export default function NoteList({
  notes,
  onChanged,
}: {
  notes: Note[];
  onChanged?: () => void;
}) {
  async function handleDelete(id: number) {
    await fetch(`/notes/${id}`, { method: "DELETE" });
    onChanged?.();
  }
  async function handleUpdate(id: number, oldNote: string) {
    const newNote = prompt("edit note", oldNote);
    await fetch(`/notes/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newNote }),
    });
    onChanged?.();
  }

  if (!notes.length) {
    return <p className="text-gray-500">No notes yet. Add your first one!</p>;
  }

  return (
    <ul className="space-y-3">
      {notes.map((note) => (
        <li
          key={note.id}
          className="bg-white shadow-sm border border-gray-200 p-4 rounded-lg flex justify-between items-start"
        >
          <div>
            <h3 className="font-semibold text-lg">{note.title}</h3>
          </div>
          <button onClick={() => handleUpdate(note.id, note.title)}>
            edit
          </button>
          <button
            onClick={() => handleDelete(note.id)}
            className="text-red-500 hover:text-red-700 font-medium ml-3"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}
