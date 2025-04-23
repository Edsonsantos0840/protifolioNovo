import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import CardSocialMedia from "./CardSocialMedia";

export default function Footer() {
  return (
    <footer
      className="body w-full lg:w-[98vw] flex flex-col items-center justify-center gap-3 mt-4 p-4 text-center"
      aria-labelledby="rodape"
    >
      <h2 id="rodape" className="text-[var(--base)] text-xl font-semibold">
        Esse sou eu.
      </h2>
      <p className="text-white/80 max-w-lg">
        Espero que tenha gostado, aguardo seu contato.
      </p>

      <nav
        className="flex justify-center items-center gap-3 md:gap-5 my-2"
        aria-label="Redes sociais"
      >
        <CardSocialMedia backGround footer />
      </nav>
    </footer>
  );
}
