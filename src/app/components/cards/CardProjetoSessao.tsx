import { projetos } from "../fields/ProjetosFields";
import CardProjeto from "./CardProjeto";

export default function CardProjetoSessao() {
  return (
    <section
      id="projetos"
      className="lg:alinha md:pt-14 pt-10 p-2"
      aria-labelledby="titulo-projetos"
    >
      <h2
        id="titulo-projetos"
        className="text-[var(--corPrincipal)] text-center text-2xl font-bold mb-4"
      >
        Projetos
      </h2>

      <div
        role="list"
        aria-label="Lista de projetos desenvolvidos por Edson Santos"
        className="grid grid-cols-1 md:grid-cols-2 gap-3"
      >
        {projetos.map((projeto) => (
          <article
            key={projeto.nome}
            role="listitem"
            className=""
            aria-labelledby={`projeto-${projeto.nome.replace(/\s+/g, "-")}`}
          >
            <CardProjeto
              nome={projeto.nome}
              descrição={projeto.descrição}
              tec1={projeto.tec1}
              tec2={projeto.tec2}
              tec3={projeto.tec3}
              site={projeto.site}
              git={projeto.git}
              whats={projeto.whats}
              im1={projeto.imagens[0]}
              im2={projeto.imagens[1]}
              im3={projeto.imagens[2]}
              im4={projeto.imagens[3]}
              im5={projeto.imagens[4]}
              im6={projeto.imagens[5]}
              im7={projeto.imagens[6]}
              im8={projeto.imagens[7]}
              im9={projeto.imagens[8]}
              im10={projeto.imagens[9]}
            />
          </article>
        ))}
      </div>
    </section>
  );
}
