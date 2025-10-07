import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const supabase = await createClient();

  const { title } = await request.json();

  const { data, error } = await supabase
    .from("notes")
    .insert([{ title }])
    .select("*");

  if (error) {
    return Response.json({ error: error.message }, { status: 400 });
  }

  return Response.json(data[0], { status: 201 });
}
