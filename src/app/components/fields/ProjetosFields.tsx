import { brasilCard, emidio, marmore, martinez, mingo, shangrila } from "../listas/ListImg";


interface ProjetosProps {
  nome: string;
  descrição: string;
  imagens: string[];
  tec1: string;
  tec2: string;
  tec3: string;
  site: string;
  git: string;
  whats: string;
}

export const projetos: ProjetosProps[] = [
  {
    nome: "M&A Marmores e Granitos.",
    descrição:
      "Este projeto Foi feito para um cliente com área de dashboard para controle dos funcionários.",
    imagens: marmore,
    tec1: "React.",
    tec2: "Next.Js.",
    tec3: "Tailwind",
    site: "https://site-marmormore.vercel.app/",
    git: "https://github.com/Edsonsantos0840/site-marmormore",
    whats:
      "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
   {
    nome: "Martinez Tattoo Stúdios.",
    descrição: "Este projeto foi desenvolvido para uma cliente, com um sistema de agendamento, utilizando as seguintes tecnologias.",
    imagens: martinez,
    tec1: "React.",
    tec2: "Next.Js.",
    tec3: "Tailwind",
    site: "https://site-tattoo-pearl.vercel.app/",
    git: "https://github.com/Edsonsantos0840/site-tattoo",
    whats:
      "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
    {
    nome: "Shangrilá Residencial para idosos.",
    descrição:
      "Este projeto foi desenvolvido para uma cliente empresária, utilizando as seguintes tecnologias.",
    imagens: shangrila,
    tec1: "React.",
    tec2: "Next.Js.",
    tec3: "Tailwind",
    site: "https://shangrila-casa-de-repouso.vercel.app",
    git: "https://github.com/Edsonsantos0840/casa-de-repouso",
    whats:
      "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
    {
    nome: "Mingo Doces, cada receita é uma demonstração de carinho.",
    descrição:
      "Este projeto foi desenvolvido para uma cliente empresária, utilizando as seguintes tecnologias.",
    imagens: mingo,
    tec1: "React.",
    tec2: "Next.Js.",
    tec3: "Tailwind",
    site: "https://mingo-doceria.vercel.app/",
    git: "https://github.com/Edsonsantos0840/mingo-doceria",
    whats:
      "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
  {
    nome: "Espaço Emídio e Sá.",
    descrição:
      "Este projeto foi desenvolvido para uma cliente conforme ela queria, utilizando as seguintes tecnologias.",
    imagens: emidio,
    tec1: "React.",
    tec2: "Next.Js.",
    tec3: "Tailwind",
    site: "https://emidio.vercel.app/",
    git: "https://github.com/Edsonsantos0840/emidio",
    whats:
      "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
  {
    nome: "BrasilCard.",
    descrição:
      "Este projeto foi desenvolvido para alguns representantes da empresa Brasilcard, utilizando as seguintes tecnologias.",
    imagens: brasilCard,
    tec1: "React.",
    tec2: "Next.Js.",
    tec3: "Tailwind",
    site: "https://cartao-marca-propria-sc71.vercel.app/",
    git: "https://github.com/Edsonsantos0840/cartao-marca-propria",
    whats:
      "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio.",
  },
 
];
