import CSSIcon from "../imgs/icons/css";
import GitIcon from "../imgs/icons/git";
import HTMLIcon from "../imgs/icons/html";
import JavaScriptIcon from "../imgs/icons/javascript";
import ReactIcon from "../imgs/icons/react";
import SassIcon from "../imgs/icons/sass";
import TailwindCSSIcon from "../imgs/icons/tailwind";
import TypeScriptIcon from "../imgs/icons/typescript";

type SkillsList = {
  name: string;
  description: string;
  yearsExperience: number;
  colorOnFocus: string;
  iconSVG: JSX.Element;
}[];

const skillsList: SkillsList = [
  {
    name: "React.js",
    description: "Biblioteca JavaScript para criação de Interfaces de Usuário",
    yearsExperience: 1,
    iconSVG: ReactIcon,
    colorOnFocus: "rgb(97, 218, 251)",
  },
  {
    name: "JavaScript",
    description:
      "Linguagem de programação interpretada, de alto nível com tipagem dinâmica fraca e multiparadigma.\nO JavaScript é uma das três principais tecnologias da World Wide Web.",
    yearsExperience: 2,
    colorOnFocus: "rgb(240, 219, 79)",
    iconSVG: JavaScriptIcon,
  },
  {
    name: "CSS3",
    description:
      "Linguagem de folhas de estilos para estilização de elementos em páginas web",
    yearsExperience: 1,
    iconSVG: CSSIcon,
    colorOnFocus: "rgb(42, 119, 219)",
  },
  {
    name: "HTML5",
    description: "Linguagem de marcação para elementos em uma página web",
    yearsExperience: 1,
    iconSVG: HTMLIcon,
    colorOnFocus: "rgb(240, 101, 41)",
  },
  {
    name: "Sass/SCSS",
    description:
      "Linguagem de extensão CSS para dar mais poder ao CSS vanilla e facilidade de manutenção e desenvolvimento",
    yearsExperience: 1,
    iconSVG: SassIcon,
    colorOnFocus: "rgb(205, 103, 153)",
  },
  {
    name: "TailwindCSS",
    description:
      "Framework CSS para criações de páginas web altamente responsivas, modernas e bonitas",
    yearsExperience: 1,
    iconSVG: TailwindCSSIcon,
    colorOnFocus: "rgb(68, 168, 179)",
  },
  {
    name: "Typescript",
    description:
      "Superset do JavaScript. Auxilia no desenvolvimento de aplicações completas e com o mínimo de bugs",
    yearsExperience: 1,
    iconSVG: TypeScriptIcon,
    colorOnFocus: "rgb(68, 109, 179)",
  },
  {
    name: "Git",
    description:
      "Sistema de controle de versões, usado no desenvolvimento de software para registrar o histórico de edições em um arquivo",
    yearsExperience: 1,
    iconSVG: GitIcon,
    colorOnFocus: "rgb(241, 80, 47)",
  },
];

export default skillsList;
