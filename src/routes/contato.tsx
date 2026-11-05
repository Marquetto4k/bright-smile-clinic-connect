import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "./index";
export const Route = createFileRoute("/contato")({head:()=>({meta:[{title:"Contato | Dra. Jennifer Figueiredo"},{name:"description",content:"Converse com o consultório da Dra. Jennifer Figueiredo e agende sua avaliação pelo WhatsApp."}]}),component:()=> <main id="conteudo"><ContactSection/></main>});
