import Link from "next/link";
import { links } from "../fields/NavFields";

export default function NavBar() {
  return (
    <nav
      className="hidden fixed md:flex justify-between items-center p-2 shadow-lg w-[100vw] bg-[var(--corPrincipal2)] z-20 lg:px-16"
      aria-label="Menu de navegação principal"
    >
      {/* Logo ou nome da empresa */}
      <div className="hidden md:block">
        <Link href="/" className="font-especial text-[var(--base)] hover:scale-105 ease-in duration-300 md:text-3xl lg:text-4xl">
          EPS Soluções
        </Link>
      </div>

      {/* Links de navegação */}
      <ul className="flex gap-2 md:gap-6 text-xl font-semibold">
        {links.map((link) => (
          <li key={link.text}>
            <Link href={link.link} className="navLink">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
