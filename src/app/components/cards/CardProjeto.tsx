import BotaoInvertido from "../botões/BotãoInvertido";
import Carrossel from "../display/Carrossel";
import Link from "next/link";
import { ProdutoProps } from "@/app/interfaces";
import Container from "../Container";

export default function CardProjeto(props: ProdutoProps) {
  const imagens = [
    props.im1,
    props.im2,
    props.im3,
    props.im4,
    props.im5,
    props.im6,
    props.im7,
    props.im8,
    props.im9,
    props.im10,
  ].filter(Boolean);

  return (
    <Container>
      <article
        className="alinha shadow-lg bg-gray-200 p-2 my-2 md:my-4 rounded-lg md:p-4"
        aria-labelledby={`projeto-${props.nome.replace(/\s+/g, "-")}`}
      >
        <header className="w-full">
          <h2
            id={`projeto-${props.nome}`}
            className="text-[var(--corPrincipal)] my-2 font-bold text-xl"
          >
            {props.nome}
          </h2>
          <p className="text-[var(--corPrincipal)] my-2 line-clamp-2">
            {props.descrição}
          </p>
        </header>

        <Carrossel images={imagens} />

        <section className="w-full mt-4">
          <h3 className="sr-only">Tecnologias e links do projeto</h3>
          <div className="flex gap-4 mt-3">
            {/* Item 1 */}
            <div className="conTec" aria-label={`Tecnologia usada: ${props.tec1}`}>
              <h4 className="tec">{props.tec1}</h4>
              <Link
                href={props.site}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar o site do projeto ${props.nome}`}
                className="w-full"
              >
                <BotaoInvertido texto="Site" />
              </Link>
            </div>

            {/* Item 2 */}
            <div className="conTec" aria-label={`Tecnologia usada: ${props.tec2}`}>
              <h4 className="tec">{props.tec2}</h4>
              <Link
                href={props.git}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver o repositório GitHub do projeto ${props.nome}`}
                className="w-full"
              >
                <BotaoInvertido texto="GitHub" />
              </Link>
            </div>

            {/* Item 3 (opcional) */}
            <div
              className="conTec hidden md:alinha"
              aria-label={`Tecnologia usada: ${props.tec3}`}
            >
              <h4 className="tec">{props.tec3}</h4>
              <Link
                href={props.whats}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Entrar em contato pelo WhatsApp sobre o projeto ${props.nome}`}
                className="w-full"
              >
                <BotaoInvertido texto="Contato" />
              </Link>
            </div>
          </div>
        </section>
      </article>
    </Container>
  );
}
