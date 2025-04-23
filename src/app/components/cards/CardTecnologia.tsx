import { FaNodeJs } from "react-icons/fa";
import Container from "../Container";
import { TecnologiaFieldsFields } from "../fields/TecnologiaFields";

export default function CardTecnologia() {
  return (
    <section
      id="tecnologias"
      className="md:alinha4 body2 w-full p-2 pt-10 md:pt-14"
      aria-labelledby="titulo-tecnologias"
    >
      <Container>
        <div className="body2 w-full md:alinha6">
          <header className="text-center">
            <h2
              id="titulo-tecnologias"
              className="text-[var(--corPrincipalEnd)]"
            >
              Tecnologias
            </h2>
            <h3 className="text-[var(--corPrincipalEnd)]">
              Tecnologias que tenho me dedicado.
            </h3>
            <p className="text-[var(--corPrincipalEnd)] text-justify md:my-3">
              Tenho me identificado bastante com as tecnologias Front-end.
              Procuro focar nas mais utilizadas no mercado no momento, mas sem
              me limitar a elas.
            </p>
          </header>

          <section
            aria-labelledby="titulo-habilidades"
            className="w-full body lg:w-[98vw] text-center p-3 md:p-4"
          >
            <h3 id="titulo-habilidades" className="md:my-5">
              Minhas Habilidades Hoje.
            </h3>
            <ul className="alinha3 flex-wrap gap-3 md:gap-6 mt-2 md:mt-2">
              {TecnologiaFieldsFields.map((link) => (
                <li
                  key={link.text}
                  className="tecIcone group flex flex-col items-center"
                >
                  {link.ico}
                  <span className="tecLetras">{link.text}</span>
                </li>
              ))}
            </ul>
          <section aria-labelledby="titulo-estudo">
            <h3 id="titulo-estudo" className="my-5 md:mt-14 text-center">
              Tecnologias que estou estudando.
            </h3>
            <div className="alinha3 mb-3 justify-center">
              <div className="tecIcone group flex flex-col items-center">
                <FaNodeJs className="tecIcone2" />
                <span className="tecLetras">Node.js</span>
              </div>
            </div>
          </section>
          </section>

        </div>
      </Container>
    </section>
  );
}
