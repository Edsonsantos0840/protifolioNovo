// Componentes
import Botao from "../botões/Botão";
import AnimaTexto from "../display/AnimaTexto";

// Módulos
import Image from "next/image";
import Link from "next/link";
import Container from "../Container";
import CardSocialMedia from "./CardSocialMedia";

export default function CardHeader() {
  return (
    <section id="inicio" className="body2 w-full md:alinha4">
      {/* Sessão de boas-vindas */}
      <header className="body2 w-full md:alinha4" role="banner">
        <div className="body w-full alinha5 lg:justify-center lg:gap-10 p-2 md:px-5 md:py-24">
          <figure
            className="hidden w-[120px] h-[120px] md:w-[250px] md:h-[250px] md:alinha3 bg-[#00ffff] hover:scale-105 p-1 rounded-full"
            aria-hidden="true"
          >
            <Image
              quality={100}
              src="/capa.png"
              alt="Foto de perfil de Edson Santos"
              width={250}
              height={250}
              className="md:max-h-[245px] rounded-full"
              priority
            />
          </figure>

          <div className="alinha md:text-left">
            <h1 className="text-[2.2rem] md:text-[3rem] lg:text-4xl">
              <AnimaTexto texto="Sou Edson Santos." />
            </h1>
            <p className="text-md md:text-[1.8rem] lg:text-xl">
              Desenvolvedor Front-End
            </p>

            <section
              aria-label="Redes sociais de Edson Santos"
              className="mt-2"
            >
              <CardSocialMedia backGround footer />
            </section>
          </div>
        </div>
      </header>

      {/* Seção sobre habilidades */}
      <Container>
        <section
          className="w-full"
          aria-labelledby="ajuda-heading"
          role="region"
        >
          <div className="alinha6 p-2 md:m-5 md:gap-2 text-center md:text-left">
            <h2
              id="ajuda-heading"
              className="text-[var(--corPrincipalEnd)] text-2xl font-bold"
            >
              Eu posso te ajudar.
            </h2>

            <h3 className="text-[var(--corTexto2)] font-semibold text-xl my-1">
              Tenho habilidades em HTML, CSS, JavaScript, TypeScript, React,
              Next.js, Tailwind CSS
            </h3>

            <p className="text-[var(--corPrincipalEnd)] text-justify">
              Desenvolvo interfaces web intuitivas e responsivas, que
              proporcionam uma excelente experiência do usuário. Crio designs
              modernos e atraentes, combinando estética e funcionalidade para
              alcançar os objetivos de cada projeto.
            </p>

            <Link
              href="https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full md:w-[90%] lg:w-[60%] mt-4"
              aria-label="Entre em contato com Edson Santos pelo WhatsApp"
            >
              <Botao texto="Fale Comigo" />
            </Link>
          </div>
        </section>
      </Container>
    </section>
  );
}
