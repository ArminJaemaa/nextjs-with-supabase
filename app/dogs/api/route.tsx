export async function GET(request: Request) {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch dog image" },
      { status: response.status }
    );
  }
  const data = await response.json();
  return Response.json(data);
}
