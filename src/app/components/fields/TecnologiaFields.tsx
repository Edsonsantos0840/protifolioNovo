//Ícones.
import { ReactElement } from "react";
import { FaCss3Alt, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa6";
import {
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandMongodb,
} from "react-icons/tb";

interface TecnologiaFieldsProps{
    text: string,
    ico:  ReactElement
}

export const  TecnologiaFieldsFields: TecnologiaFieldsProps[] = [
    {
        text: "HTML" ,
        ico: <FaHtml5 className="tecIcone2"  />
    },
    {
        text: "CSS"  ,
        ico: <FaCss3Alt className="tecIcone2"  />
    },
    {
        text: "JAVASCRIPT" ,
        ico: <TbBrandJavascript className="tecIcone2"  />
    },
    {
        text: "REACT" ,
        ico: <FaReact className="tecIcone2"  />
    },
    {
        text: "NEXT.JS" ,
        ico: <TbBrandNextjs className="tecIcone2" />
    },
    {
        text: "TAILWIND"  ,
        ico: <TbBrandTypescript className="tecIcone2" />
    },
    {
        text: "TYPESCRIPT" ,
        ico: <TbBrandTailwind className="tecIcone2"  />
    },
    {
        text: "MONGODB" ,
        ico: <TbBrandMongodb className="tecIcone2" />
    },
]