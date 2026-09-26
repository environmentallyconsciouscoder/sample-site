"use client";

import { useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function useContactForm() {
  const [form, setForm] = useState<ContactFormData>({ name: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  return {
    form,
    status,
    errorMessage,
    handleChange,
    handleSubmit,
    isLoading: status === "loading",
    isSuccess: status === "success",
  };
}
