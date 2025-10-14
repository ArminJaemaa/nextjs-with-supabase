import { createClient } from "@/lib/supabase/server";

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
