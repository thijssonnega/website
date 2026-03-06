"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";

type Status = "idle" | "error" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const requiredFields = ["name", "organization", "email", "message"];
    const isValid = requiredFields.every((field) => String(formData.get(field) || "").trim().length > 1);

    if (!isValid) {
      setStatus("error");
      setMessage("Vul alstublieft alle verplichte velden in.");
      return;
    }

    setStatus("success");
    setMessage(
      "Bedankt voor uw bericht. Dit formulier gebruikt momenteel een veilige placeholderafhandeling. Koppel later bijvoorbeeld een Next.js Server Action, Formspree of Resend voor productiegebruik."
    );
    event.currentTarget.reset();
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-primary">
          Naam *
        </label>
        <input id="name" name="name" required className="w-full rounded-lg border border-border bg-white px-4 py-2.5" />
      </div>
      <div>
        <label htmlFor="organization" className="mb-1 block text-sm font-medium text-primary">
          Organisatie *
        </label>
        <input id="organization" name="organization" required className="w-full rounded-lg border border-border bg-white px-4 py-2.5" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-primary">
            E-mail *
          </label>
          <input id="email" name="email" type="email" required className="w-full rounded-lg border border-border bg-white px-4 py-2.5" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-primary">
            Telefoon
          </label>
          <input id="phone" name="phone" type="tel" className="w-full rounded-lg border border-border bg-white px-4 py-2.5" />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-primary">
          Bericht *
        </label>
        <textarea id="message" name="message" required rows={5} className="w-full rounded-lg border border-border bg-white px-4 py-2.5" />
      </div>
      <p className="text-xs text-foreground/70">Door dit formulier te versturen gaat u akkoord met verwerking van uw gegevens voor contactdoeleinden.</p>
      <Button type="submit">Verstuur bericht</Button>
      {status !== "idle" && (
        <p className={status === "success" ? "text-sm text-green-700" : "text-sm text-red-700"} aria-live="polite">
          {message}
        </p>
      )}
    </form>
  );
}
