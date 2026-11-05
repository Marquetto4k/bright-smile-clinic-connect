import { createFileRoute } from "@tanstack/react-router";
import { CareSection, ContactSection } from "./index";
export const Route = createFileRoute("/servicos")({head:()=>({meta:[{title:"Seu sorriso | Dra. Jennifer Figueiredo"},{name:"description",content:"Saúde, estética e atenção à sua individualidade. Converse sobre o cuidado com seu sorriso."}]}),component:()=> <main id="conteudo"><CareSection/><ContactSection/></main>});
