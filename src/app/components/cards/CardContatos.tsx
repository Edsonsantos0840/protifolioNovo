
import CardSocialMedia from "./CardSocialMedia";
import Container from "../Container";

export default function CardContatos() {
  return (
    <section
      id="contato"
      className="body2 w-full pt-10 md:pt-14"
      aria-labelledby="titulo-contato"
    >
      <Container>
        <header className="text-center mb-6">
          <h2
            id="titulo-contato"
            className="text-[var(--corPrincipalEnd)] text-2xl font-bold"
          >
            Meus Contatos
          </h2>
          <h3 className="text-[var(--corPrincipalEnd)] text-lg mt-2">
            Quer me conhecer melhor?
          </h3>
          <p className="text-[var(--corPrincipalEnd)] mt-4">
            Entre em contato comigo pelos links abaixo:
          </p>
        </header>

        <section aria-labelledby="titulo-redes" className="alinha4">
          <h4 id="titulo-redes" className="sr-only">
            Redes sociais
          </h4>
          <CardSocialMedia />
        </section>
      </Container>
    </section>
  );
}
