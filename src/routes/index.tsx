import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  Heart,
  Instagram,
  Plus,
  Sparkles,
  Smile,
  ShieldCheck,
} from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import { clinic } from "../lib/clinic";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Jennifer Figueiredo | Um cuidado especial para o seu sorriso" },
      {
        name: "description",
        content:
          "Conheça a Dra. Jennifer Figueiredo, cirurgiã-dentista, CRO-PR 35.963. Um olhar atento para você e seu sorriso. Entre em contato e agende uma avaliação.",
      },
      { property: "og:title", content: "Dra. Jennifer Figueiredo · Odontologia" },
      { property: "og:description", content: "Cuidar do seu sorriso começa por conhecer você." },
      { property: "og:image", content: "/images/jennifer-portrait.png" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});
const care = [
  {
    icon: ShieldCheck,
    title: "Saúde em primeiro lugar",
    text: "Entenda suas necessidades e converse sobre prevenção, rotina de higiene e saúde bucal.",
    tag: "PREVENÇÃO & BEM-ESTAR",
  },
  {
    icon: Sparkles,
    title: "Beleza com naturalidade",
    text: "Compartilhe o que deseja melhorar no seu sorriso e descubra as possibilidades para o seu caso.",
    tag: "ESTÉTICA DO SORRISO",
  },
  {
    icon: Smile,
    title: "Cuidado em cada detalhe",
    text: "Uma avaliação é o primeiro passo para esclarecer dúvidas e planejar os próximos cuidados.",
    tag: "AVALIAÇÃO INDIVIDUAL",
  },
];
const questions = [
  [
    "Como agendar minha primeira consulta?",
    "É só tocar em “Agendar avaliação” e enviar uma mensagem pelo WhatsApp. Você poderá consultar a disponibilidade, o endereço e as informações para sua primeira visita.",
  ],
  [
    "Como saber qual tratamento é indicado para mim?",
    "A indicação depende de uma avaliação individual. Na consulta, você pode conversar sobre suas necessidades, tirar dúvidas e conhecer as possibilidades de cuidado.",
  ],
  [
    "Posso conversar sobre a estética do meu sorriso?",
    "Sim. Conte o que você gostaria de melhorar. A avaliação permite discutir possibilidades, limites e um planejamento adequado para você.",
  ],
  [
    "Onde consulto os horários e o endereço?",
    "Fale diretamente com o consultório pelo WhatsApp para confirmar o endereço, os horários disponíveis e as orientações de chegada.",
  ],
];
export function CareSection() {
  return (
    <section id="cuidados" className="section care-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">UM OLHAR COMPLETO</p>
            <h2>
              Seu sorriso.
              <br />
              <em>Seu jeito de ser.</em>
            </h2>
          </div>
          <p>
            Cada pessoa tem uma história.
            <br />O cuidado com o seu sorriso começa por entender a sua.
          </p>
        </div>
        <div className="care-grid">
          {care.map(({ icon: Icon, title, text, tag }, i) => (
            <article className="care-card" key={title}>
              <div className="care-top">
                <Icon size={31} strokeWidth={1.3} />
                <span>0{i + 1}</span>
              </div>
              <p className="eyebrow">{tag}</p>
              <h3>{title}</h3>
              <p>{text}</p>
              <a href={clinic.whatsapp} target="_blank" rel="noreferrer">
                Conversar sobre meu sorriso <ArrowUpRight size={18} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export function ContactSection() {
  return (
    <section className="contact-section" id="contato">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">
            <span className="status-dot" /> SEU PRÓXIMO PASSO
          </p>
          <h2>
            Seu novo motivo
            <br />
            para <em>sorrir.</em>
          </h2>
          <p>
            Vamos conversar sobre você e o seu sorriso?
            <br />
            Agende uma avaliação com a Dra. Jennifer.
          </p>
          <a
            className="button button-light"
            href={clinic.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={20} /> Agendar pelo WhatsApp <ArrowUpRight size={18} />
          </a>
          <span className="contact-phone">{clinic.phone}</span>
        </div>
        <div className="contact-orbit" aria-hidden="true">
          <div />
          <div />
          <span>
            jf<small>O CUIDADO COMEÇA AQUI</small>
          </span>
        </div>
      </div>
    </section>
  );
}
function Index() {
  return (
    <main id="conteudo">
      <section className="hero">
        <div className="hero-aura" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> ODONTOLOGIA COM UM OLHAR HUMANO
            </p>
            <h1>
              Um sorriso
              <br />
              leve. Uma nova
              <br />
              <em>confiança.</em>
            </h1>
            <p className="hero-description">
              Cuidar do seu sorriso começa por conhecer você. Um encontro entre saúde, naturalidade
              e atenção aos detalhes.
            </p>
            <div className="hero-actions">
              <a className="button" href={clinic.whatsapp} target="_blank" rel="noreferrer">
                Agendar minha avaliação <ArrowUpRight size={19} />
              </a>
              <a className="text-link" href="#sobre">
                Conheça a doutora <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-signature">
              <span className="signature-line" />
              <div>
                <strong>Dra. Jennifer Figueiredo</strong>
                <small>CIRURGIÃ-DENTISTA · {clinic.registration}</small>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-orbit" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src="/images/jennifer-portrait.png"
                alt="Dra. Jennifer Figueiredo no consultório odontológico"
                width="1024"
                height="1280"
                fetchPriority="high"
              />
              <div className="photo-caption">
                <span className="status-dot" /> CUIDADO QUE ACOLHE. SORRISOS QUE CONECTAM.
              </div>
            </div>
            <div className="floating-note">
              <span>
                <Heart size={23} strokeWidth={1.5} />
              </span>
              <div>
                Mais que um sorriso.<strong>É sobre você.</strong>
              </div>
              <Sparkles size={17} />
            </div>
            <span className="vertical-note">SAÚDE + ESTÉTICA + BEM-ESTAR</span>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>UM CUIDADO TÃO ÚNICO QUANTO VOCÊ</span>
          <a href="#cuidados">
            Explore o seu próximo sorriso <ArrowDown size={15} />
          </a>
        </div>
      </section>
      <div className="values-strip">
        <div className="container">
          <span>
            <Heart /> Acolhimento
          </span>
          <i />
          <span>
            <Sparkles /> Naturalidade
          </span>
          <i />
          <span>
            <ShieldCheck /> Atenção aos detalhes
          </span>
          <i />
          <span>
            <Smile /> Confiança para sorrir
          </span>
        </div>
      </div>
      <CareSection />
      <section className="section about-section" id="sobre">
        <div className="container about-grid">
          <div className="about-image">
            <img
              src="/images/jennifer-care.png"
              alt="Dra. Jennifer demonstrando o cuidado com a saúde bucal"
              width="1024"
              height="1024"
              loading="lazy"
            />
            <span className="image-label">PRAZER, SUA DENTISTA.</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">QUEM CUIDA DE VOCÊ</p>
            <h2>
              Um olhar atento.
              <br />
              Um cuidado <em>de perto.</em>
            </h2>
            <p className="about-name">
              Dra. Jennifer Figueiredo <span>{clinic.registration}</span>
            </p>
            <p>
              Por trás de cada sorriso, existe uma pessoa. Conheça a cirurgiã-dentista Jennifer
              Figueiredo e dê o primeiro passo para conversar sobre a sua saúde bucal.
            </p>
            <p>
              Este é um espaço para conhecer o trabalho da doutora, esclarecer suas dúvidas e se
              aproximar de um cuidado pensado para você.
            </p>
            <ul className="about-checks">
              <li>
                <Check /> Espaço para suas dúvidas
              </li>
              <li>
                <Check /> Atenção à sua individualidade
              </li>
              <li>
                <Check /> Planejamento a partir da avaliação
              </li>
            </ul>
            <a className="text-link" href={clinic.instagram} target="_blank" rel="noreferrer">
              <Instagram size={18} /> Conheça mais no Instagram <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>
      <section className="journey-section section">
        <div className="container">
          <p className="eyebrow">SIMPLES, DESDE O PRIMEIRO CONTATO</p>
          <div className="section-heading">
            <h2>
              O primeiro passo
              <br />é <em>uma conversa.</em>
            </h2>
            <a className="text-link" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              Vamos começar <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="journey-grid">
            {[
              [
                "01",
                "Conte sua história",
                "Entre em contato pelo WhatsApp e compartilhe o que você busca para seu sorriso.",
              ],
              [
                "02",
                "Conheça as possibilidades",
                "Agende uma avaliação para conversar sobre suas necessidades e esclarecer dúvidas.",
              ],
              [
                "03",
                "Planeje seu cuidado",
                "Conheça as orientações e os próximos passos indicados para o seu caso.",
              ],
            ].map(([n, t, d]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section instagram-section">
        <div className="container instagram-panel">
          <div className="instagram-mark">
            <Instagram size={40} strokeWidth={1} />
          </div>
          <div>
            <p className="eyebrow">MAIS PERTO DE VOCÊ</p>
            <h2>
              O cuidado continua
              <br />
              <em>fora do consultório.</em>
            </h2>
            <p>
              Acompanhe o perfil da Dra. Jennifer para conhecer mais do seu trabalho e dos sorrisos
              que fazem parte dele.
            </p>
          </div>
          <a
            className="button button-outline"
            href={clinic.instagram}
            target="_blank"
            rel="noreferrer"
          >
            @drajenniferf <ArrowUpRight size={19} />
          </a>
        </div>
      </section>
      <section className="section faq-section" id="duvidas">
        <div className="container faq-grid">
          <div>
            <p className="eyebrow">PODE PERGUNTAR</p>
            <h2>
              Mais clareza.
              <br />
              <em>Mais tranquilidade.</em>
            </h2>
            <p>Algumas respostas para o seu primeiro contato.</p>
            <a className="text-link" href={clinic.whatsapp} target="_blank" rel="noreferrer">
              Tenho outra dúvida <ArrowRight size={18} />
            </a>
          </div>
          <div className="faq-list">
            {questions.map(([q, a], i) => (
              <details key={q}>
                <summary>
                  <span className="faq-number">0{i + 1}</span>
                  {q}
                  <Plus size={19} />
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
