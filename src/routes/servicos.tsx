import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/servicos")({
  head: () => ({
    meta: [
      { title: "Tratamentos — Clínica Sorriso" },
      { name: "description", content: "Limpeza, clareamento, implantes, ortodontia, canal e odontopediatria." },
      { property: "og:title", content: "Tratamentos — Clínica Sorriso" },
      { property: "og:description", content: "Conheça todos os tratamentos odontológicos da Clínica Sorriso." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Servicos,
});

const servicos = [
  ["Limpeza e prevenção", "Profilaxia, remoção de tártaro e orientação de higiene."],
  ["Clareamento dental", "Dentes mais brancos com segurança, no consultório ou em casa."],
  ["Implantes", "Reponha dentes perdidos com resultado natural e duradouro."],
  ["Ortodontia", "Aparelhos fixos e alinhadores invisíveis."],
  ["Tratamento de canal", "Endodontia moderna, rápida e confortável."],
  ["Odontopediatria", "Cuidado lúdico e carinhoso para os pequenos."],
];

function Servicos() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-semibold">Tratamentos</h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">Tudo o que seu sorriso precisa, em um só lugar.</p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicos.map(([t, d], i) => (
          <div key={t} className="rounded-2xl border bg-card p-8">
            <span className="font-display text-3xl text-accent">0{i + 1}</span>
            <h3 className="mt-3 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <Link to="/contato" className="mt-12 inline-block rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
        Agendar avaliação
      </Link>
    </main>
  );
}
