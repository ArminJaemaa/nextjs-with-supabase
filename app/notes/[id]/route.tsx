import { createClient } from "@/lib/supabase/server";

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const supabase = await createClient();
  const id = (await params).id;
  const note = await request.json();
  const { error } = await supabase
    .from("notes")
    .update({ title: note.title })
    .eq("id", id);
  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ success: true });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: number }> }
) {
  const id = (await params).id;
  const supabase = await createClient();
  console.log(id);
  const user = supabase.auth.getUser();
  console.log(user);
  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ success: true });
}
