import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import NoteForm from "./noteForm";
import NoteList from "./noteList";

export default async function Page() {
  const supabase = await createClient();
  const { data: notes } = await supabase
    .from("notes")
    .select("*")
    .order("id", { ascending: false });

  async function refreshNotes() {
    "use server";
    revalidatePath("/notes");
  }
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">My Notes:</h1>
      <NoteForm onAdded={refreshNotes} />
    </div>
  );
}
