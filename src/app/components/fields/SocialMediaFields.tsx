import { ReactElement } from "react";
import { FaGithubSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

interface SocialMediaProps{
    href: string,
    aria: string,
    ico:  ReactElement
}

export const  SocialMediaFields: SocialMediaProps[] = [
    {
        href: "https://github.com/Edsonsantos0840" ,
        aria: "Perfil no GitHub de Edson Santos",
        ico: <FaGithubSquare  />
    },
    {
        href: "https://www.linkedin.com/in/edsonpsantos/"  ,
        aria: "Perfil no LinkedIn de Edson Santos",
        ico: <FaLinkedin  />
    },
    {
        href: "https://wa.me/5519982350898?text=Ol%C3%A1%20eu%20v%C3%AD%20seu%20portifolio." ,
        aria: "Enviar mensagem no WhatsApp de Edson Santos",
        ico: <FaWhatsapp  />
    },
    {
        href: "mailto:edsonpsantos@gmail.com" ,
        aria: "Enviar email para Edson Santos",
        ico: <TfiEmail  />
    },

]