"use client";

import { Button, Group } from "@mantine/core";
import { useState } from "react";

export default function Dogpic() {
  const [dogUrl, setDogUrl] = useState<string | null>(null);
  async function handleDogPic() {
    const res = await fetch(`/dogs/api`, { method: "GET" });
    const data = await res.json();
    console.log(data);
    setDogUrl(data.message);
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      <Group justify="flex" mt="md">
        <Button onClick={() => handleDogPic()}>Vaata koera</Button>
      </Group>
      {dogUrl && (
        <div
          style={{
            maxWidth: "400px",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <img
            src={dogUrl}
            alt="just a random dog"
            style={{ maxWidth: "400px" }}
          />
        </div>
      )}
    </div>
  );
}
