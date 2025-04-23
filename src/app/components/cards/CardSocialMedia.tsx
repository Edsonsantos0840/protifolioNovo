import Link from "next/link";
import { SocialMediaFields } from "../fields/SocialMediaFields";

export default function CardSocialMedia({
  backGround,
  footer
}: {
  backGround?: boolean,
  footer?: boolean
}) {
  return (
    <nav
      className="alinha3 flex gap-4 md:gap-6 md:mb-8"
      aria-label="Redes sociais"
    >
      <ul className="alinha2 gap-4">
        {SocialMediaFields.map((link) => (
          <li key={link.href} className={`${backGround ? "contatoLink2" : 'contatoLink'} `}>
            <Link href={link.href} target="_blank" aria-label={link.aria} className={footer && 'text-5xl' }>
              {link.ico}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
