"use client";
//Componentes.
import NavBar from "./components/navBar/NavBar";
import CardHeader from "./components/cards/CardHeader";
import CardApresentação from "./components/cards/CardApresentação";
import CardProjetoSessao from "./components/cards/CardProjetoSessao";
import CardTecnologia from "./components/cards/CardTecnologia";
import CardContatos from "./components/cards/CardContatos";
import Footer from "./components/cards/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full">
      <header>
        <NavBar />
      </header>

      <div className="w-full ">
        <section aria-labelledby="apresentacao-heading pt-32 ">
          <CardHeader />
        </section>

        <section aria-labelledby="sobre-heading scroll-mt-40">
          <CardApresentação />
        </section>

        <section aria-labelledby="projetos-heading scroll-mt-20">
          <CardProjetoSessao />
        </section>

        <section aria-labelledby="tecnologias-heading scroll-mt-20">
          <CardTecnologia />
        </section>

        <section aria-labelledby="contatos-heading scroll-mt-20">
          <CardContatos />
        </section>

        <footer>
          <Footer />
        </footer>
      </div>
    </main>
  );
}

