import { createFileRoute, Link } from "@tanstack/react-router";
import { Smile, ShieldCheck, Clock, Star } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clínica Sorriso — Dentista de confiança" },
      { name: "description", content: "Odontologia moderna e acolhedora: limpeza, clareamento, implantes e ortodontia." },
      { property: "og:title", content: "Clínica Sorriso — Dentista de confiança" },
      { property: "og:description", content: "Odontologia moderna e acolhedora para toda a família." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-block rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
            Atendimento humanizado
          </p>
          <h1 className="text-5xl leading-tight font-semibold md:text-6xl">
            Seu sorriso merece <em className="text-primary">cuidado</em> de verdade.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Tratamentos odontológicos modernos, sem dor e sem pressa, para você e toda a sua família.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/contato" className="rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
              Agendar consulta
            </Link>
            <Link to="/servicos" className="rounded-full border px-6 py-3 font-semibold hover:bg-muted">
              Ver tratamentos
            </Link>
          </div>
        </div>
        <div className="relative aspect-square rounded-[3rem] bg-secondary">
          <Smile className="absolute inset-0 m-auto h-1/2 w-1/2 text-primary" strokeWidth={1.2} />
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card p-5 shadow-lg">
            <div className="flex gap-1 text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
            </div>
            <p className="mt-1 text-sm font-semibold">+2.000 pacientes felizes</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
        {[
          { icon: ShieldCheck, t: "Segurança total", d: "Esterilização rigorosa e equipamentos de última geração." },
          { icon: Smile, t: "Sem dor", d: "Técnicas suaves e anestesia moderna para seu conforto." },
          { icon: Clock, t: "Horários flexíveis", d: "Atendemos de segunda a sábado, inclusive à noite." },
        ].map(({ icon: Icon, t, d }) => (
          <div key={t} className="rounded-2xl border bg-card p-8">
            <Icon className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-xl font-semibold">{t}</h3>
            <p className="mt-2 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
