"use client";

import { Button, Group, TextInput } from "@mantine/core";
import { DateInput, TimePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";

export default function Form() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      firstName: (value) => (value ? null : "Eesnime on vaja"),
      lastName: (value) => (value ? null : "vaja on perekonnanime"),
    },
  });
  return (
    <form
      onSubmit={form.onSubmit((values) => console.log(values))}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        marginTop: "2rem",
      }}
    >
      <TextInput
        withAsterisk
        label="First name"
        key={form.key("firstName")}
        {...form.getInputProps("firstName")}
      />
      <TextInput
        withAsterisk
        label="Last name"
        key={form.key("lastName")}
        {...form.getInputProps("lastName")}
      />
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key("email")}
        {...form.getInputProps("email")}
      />
      <TextInput
        withAsterisk
        label="Phone number"
        key={form.key("phoneNumber")}
        {...form.getInputProps("phoneNumber")}
      />
      <DateInput
        clearable
        label="Tänane kuupäev"
        key={form.key("date")}
        {...form.getInputProps("date")}
      />
      <TimePicker label="Praegune kellaaeg" />
      <Group justify="flex" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
