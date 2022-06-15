import { useEffect, useState } from "react";
// scripts
import { sr, initScrollReveal, scrollWindowToTop } from "./assets/scripts/main";
import projectsList from "./assets/scripts/projectsList";
import skillsList from "./assets/scripts/skillsList";
// components
import Header from "./components/Header";
import Button from "./components/Button";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import ContactForm from "./components/ContactForm";
// imgs and icons
import imgLogoTransparent from "./assets/imgs/logo-transparent.png";
import imgLogo from "./assets/imgs/logo.png";
import profileImg from "./assets/imgs/developer.png";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// general styles
import "./App.scss";

function App() {
  const [arrowUpVisibility, setArrowUpVisibility] = useState(false);

  useEffect(() => {
    initScrollReveal();

    const item_1 = {
      delay: 200,
    };
    const item_2 = {
      delay: 2200,
    };
    const item_3 = {
      delay: 4000,
    };
    const profileImg = {
      delay: 500,
    };

    sr.reveal(".item_1", item_1);
    sr.reveal(".item_2", item_2);
    sr.reveal(".item_3", item_3);
    sr.reveal("#profileImg", profileImg);

    const scrollListener = () => {
      window.scrollY > 200
        ? setArrowUpVisibility(true)
        : setArrowUpVisibility(false);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <Header />

      <main>
        <section
          id="s-welcome"
          className="grid lg:grid-cols-2 content-center justify-items-center relative h-screen gap-4"
        >
          <div>
            <div>
              <h3 className="item_1">Olá, me chamo</h3>
              <h1 className="item_2">Alberto Vinícius</h1>
              <h2 className="item_3">Desenvolvedor Front-end</h2>
            </div>
            <Button text="Quero conhecê-lo!" to="s-about-me" />
          </div>
          <img
            id="profileImg"
            src={profileImg}
            alt="Criador do site dentro de um design baseado na sua logotipo"
          />
        </section>

        <section
          id="s-about-me"
          className="grid lg:grid-cols-2 items-center justify-items-center py-20 lg:py-32 pb-32 gap-12 xl:gap-0"
        >
          <div className="delaySmallReveal intervalCardReveal">
            <img src={imgLogoTransparent} alt="Logo branca" />
          </div>
          <div className="intervalCardReveal">
            <h1 className="delaySmallReveal">Sobre mim</h1>
            <p className="delayMediumReveal">
              Meu nome é Alberto Vinícius A. dos Santos, tenho 19 anos e sou
              desenvolvedor Front-end. <br />
              Meu início no mundo da programação se deu em 2019, onde tive meu
              primeiro contato com uma linguagem de programação: <i>C#</i>.{" "}
              <br />
              Me encantei pela forma de como alguns problemas recorrentes e
              necessários podem facilmente serem resolvidos com o auxílio da
              tecnologia e, desde então, desenvolvo tudo que possa vir à ser
              útil para alguém. Sou um jovem ambicioso, com uma sede invejável e
              constante por conhecimento.
            </p>
          </div>
        </section>

        <section id="s-projects" className="grid gap-16 pt-20 pb-32">
          <h1 className="delaySmallReveal">Projetos</h1>
          <div className="delayLargeReveal">
            {projectsList.map((project) => (
              <ProjectCard
                key={project.name}
                title={project.name}
                imgSrc={project.overviewImg}
                url={project.liveSite}
                socials={project.socials}
              />
            ))}
          </div>
        </section>

        <section id="s-skills" className="grid gap-16 pt-20 pb-32">
          <h1 className="delaySmallReveal">Habilidades</h1>
          <div className="delayMediumReveal grid lg:grid-cols-2 xl:grid-cols-3 justify-items-center items-start gap-8">
            {skillsList.map((skill) => (
              <SkillCard
                key={skill.name}
                name={skill.name}
                description={skill.description}
                iconPath={skill.iconPath}
                iconViewBox={skill.iconViewBox}
                yearsExperience={skill.yearsExperience}
                colorOnHover={skill.colorOnHover}
              />
            ))}
          </div>
        </section>

        <section id="s-contact-me" className="grid gap-20 pt-20 pb-32">
          <h1 className="delaySmallReveal">Contato</h1>
          <ContactForm />
        </section>
      </main>

      <button
        className={
          arrowUpVisibility
            ? "fixed right-6 bottom-6 bg-white rounded-full px-2 py-1.5 text-rose-600 transition-all duration-500 opacity-100"
            : "opacity-0"
        }
        onClick={scrollWindowToTop}
      >
        <ArrowUpwardIcon fontSize="medium" />
      </button>

      <footer className="py-10">
        <div>
          <p>
            Made by{" "}
            <a href="https://www.linkedin.com/in/albertov-albuquerque">
              Alberto Vinícius A. dos Santos
            </a>
          </p>
          <div>
            <p>Powered by</p>
            <img src={imgLogo} alt="Logo branca" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
