"use client";
import React from "react";
import { toast } from "sonner";

export default function HomePage() {
  return (
    <button
      onClick={() =>
        toast.error(
          "Attempted to access a server-side environment variable on the client",
          {
            duration: Infinity,
          },
        )
      }
    >
      Give me toast
    </button>
  );
}
