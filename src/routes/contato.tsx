import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato e agendamento — Clínica Sorriso" },
      { name: "description", content: "Agende sua consulta pelo WhatsApp ou visite a Clínica Sorriso." },
      { property: "og:title", content: "Contato — Clínica Sorriso" },
      { property: "og:description", content: "Agende sua consulta na Clínica Sorriso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contato,
});

function Contato() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-5xl font-semibold">Agende sua consulta</h1>
      <p className="mt-4 text-lg text-muted-foreground">Fale com a gente pelo WhatsApp — respondemos rapidinho.</p>
      <div className="mt-10 space-y-6 rounded-2xl border bg-card p-8">
        <p className="flex items-center gap-3"><Phone className="text-primary" /> (11) 99999-0000</p>
        <p className="flex items-center gap-3"><MapPin className="text-primary" /> Rua das Flores, 123 — São Paulo</p>
        <p className="flex items-center gap-3"><Clock className="text-primary" /> Seg a Sex 8h–20h · Sáb 8h–13h</p>
        <a href="https://wa.me/5511999990000" target="_blank" rel="noreferrer" className="inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
          Chamar no WhatsApp
        </a>
      </div>
    </main>
  );
}
