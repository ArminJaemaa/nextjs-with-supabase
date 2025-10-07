import { createClient } from "@/lib/supabase/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const supabase = await createClient();

  const id = Number(params.id);
  const { error } = await supabase.from("notes").delete().eq("id", id);

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json({ success: true });
}
