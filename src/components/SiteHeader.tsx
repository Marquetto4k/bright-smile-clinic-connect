import { useState } from "react";
import { ArrowUpRight, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { clinic } from "../lib/clinic";

export function Brand() {
  return <a className="brand" href="/" aria-label="Dra. Jennifer Figueiredo — início"><span className="monogram">jf<span>✧</span></span><span>JENNIFER FIGUEIREDO<small>ODONTOLOGIA · CUIDADO · ESTÉTICA</small></span></a>;
}
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><header className="site-header"><div className="container header-inner">
    <Brand />
    <nav aria-label="Navegação principal" id="main-navigation" className={open ? "navigation is-open" : "navigation"}>
      {[["/#sobre","A doutora"],["/#cuidados","Seu sorriso"],["/#duvidas","Dúvidas"]].map(([href,label])=><a href={href} key={href} onClick={()=>setOpen(false)}>{label}</a>)}
      <a className="button button-small" href={clinic.whatsapp} target="_blank" rel="noreferrer" onClick={()=>setOpen(false)}>Agendar avaliação <ArrowUpRight size={16}/></a>
    </nav>
    <button className="menu-toggle" aria-label={open?"Fechar menu":"Abrir menu"} aria-expanded={open} aria-controls="main-navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  </div></header></>;
}
export function SiteFooter() {
 return <><footer className="site-footer"><div className="container footer-top"><Brand/><p>O cuidado que você sente.<br/>A confiança que você leva.</p><a href={clinic.instagram} target="_blank" rel="noreferrer" className="social-link"><Instagram size={18}/> @drajenniferf <ArrowUpRight size={16}/></a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Dra. Jennifer Figueiredo</span><span>Cirurgiã-dentista · {clinic.registration}</span><a href="/contato">Fale com o consultório</a></div></footer><a className="floating-whatsapp" href={clinic.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com o consultório no WhatsApp"><MessageCircle size={25}/><span>Vamos conversar?</span></a></>;
}
