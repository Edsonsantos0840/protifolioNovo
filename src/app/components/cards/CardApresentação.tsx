import Image from "next/image";
import Container from "../Container";

export default function CardApresentação() {
  return (
    <section
      id="sobre"
      className="body2 w-full md:alinha4 p-2 alinha mt-0 md:pt-14"
      aria-labelledby="titulo-sobre"
    >
      <Container>
        {/* Introdução pessoal */}
        <article
          className="text-center md:px-5 my-1 md:my-[-35px]"
          aria-labelledby="titulo-sobre"
        >
          <h2
            id="titulo-sobre"
            className="text-[var(--corTexto2)] md:my-4 text-2xl font-bold"
          >
            Quem sou eu?
          </h2>
          <h3 className="text-[var(--corTexto2)] md:my-4 text-xl">
            Olá, sou Edson Santos
          </h3>
          <p className="text-[var(--corTexto2)] text-justify md:my-4">
            Sempre fui apaixonado por tecnologia, e tudo que diz respeito a
            tecnologia me encanta. Passei muito tempo acreditando que a área da
            programação não era para mim, por conta do pouco tempo que tinha
            para estudar. Porém, descobri que trabalhar como programador é o que
            eu realmente quero para minha vida, tenho muito prazer em programar,
            e adoro aprender tudo sobre o mundo da tecnologia. Mesmo com as
            dificuldades, não vou desistir. Descobri também que com dedicação e
            uma boa organização, consigo potencializar o tempo e ter um bom
            resultado, e espero fazer parte do seu time. Prometo que vou me
            esforçar ao máximo para satisfazer as expectativas.
          </p>
        </article>

        {/* Imagens e descrição profissional */}
        <div className="flex flex-col md:alinha2 mt-4 md:p-3" role="group" aria-labelledby="grupo-imagens">
          <div className="w-full alinha5">
            <figure className="my-2 hover:scale-105">
              <Image
                quality={100}
                src="/um pouco.png"
                alt="Foto de perfil profissional de Edson Santos, sorrindo e olhando para a câmera"
                width={400}
                height={400}
              />
              <figcaption className="text-[var(--corTexto2)] text-center mt-2">
                Edson Santos - Perfil profissional
              </figcaption>
            </figure>

            <figure className="body3 hidden md:block hover:scale-105 my-2">
              <Image
                quality={100}
                src="/EPS_files/9.png"
                alt="Foto de Edson Santos apresentando seu trabalho com gráficos ao fundo"
                width={400}
                height={400}
              />
              <figcaption className="text-[var(--corTexto2)] text-center mt-2">
                Edson Santos - Trabalho e projetos
              </figcaption>
            </figure>
          </div>

          {/* Sobre habilidades interpessoais */}
          <article
            aria-labelledby="titulo-mais-sobre"
            className="w-full"
          >
            <h2
              id="titulo-mais-sobre"
              className="text-[var(--corTexto2)] my-4 text-xl font-bold"
            >
              Mais um pouco sobre mim.
            </h2>
            <p className="text-[var(--corTexto2)] text-justify my-4">
              Além de ser muito esforçado e focado nos meus objetivos, tenho
              muita facilidade de lidar com pessoas e trabalhar em equipe.
              Trabalhei bastante tempo como representante comercial, e parte
              desse tempo como gerente de equipe, onde era responsável por uma
              equipe de quinze pessoas.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
