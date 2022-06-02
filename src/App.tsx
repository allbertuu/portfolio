import { useEffect } from 'react';
// scripts
import sr, { initScrollReveal } from './assets/scripts/main';
import projectsList from './assets/scripts/projectsList';
// components
import Header from './components/Header';
import Button from './components/Button';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
// imgs and icons
import imgLogoTransparent from './assets/imgs/logo-transparent.png';
import imgLogo from './assets/imgs/logo.png';
import profileImg from './assets/imgs/developer.png';
// general styles
import './App.scss';

function App() {

  useEffect(() => {
    initScrollReveal();

    const item_1 = {
      origin: 'top',
      delay: 200,
    }
    const item_2 = {
      origin: 'top',
      delay: 2200,
    }
    const item_3 = {
      origin: 'top',
      delay: 4000,
    }

    sr.reveal('.item_1', item_1);
    sr.reveal('.item_2', item_2);
    sr.reveal('.item_3', item_3);

  }, [])

  return (
    <>
      <Header />

      <main>
        <section id='s-welcome'>
          <div>
            <div>
              <h3 className="item_1">Olá, me chamo</h3>
              <h1 className="item_2">Alberto Albuquerque</h1>
              <h2 className="item_3">Desenvolvedor Front-end</h2>
            </div>
            <Button text="Quero conhecê-lo!" to='s-aboutMe' />
          </div>
          <img src={profileImg} alt="Criador do site dentro de um design baseado na sua logotipo" />
        </section>

        <section id='s-aboutMe'>
          <div className="box delaySmallReveal intervalCardReveal">
            <img src={imgLogoTransparent} alt="Logo branca" />
          </div>
          <div className="c_aboutMe intervalCardReveal">
            <h1 className="delaySmallReveal">
              Sobre mim
            </h1>
            <p className="delayMediumReveal">
              Meu nome é Alberto Albuquerque, tenho 19 anos e sou desenvolvedor Front-end. <br />
              Meu início no mundo da programação se deu em 2019, onde tive meu primeiro contato com uma
              linguagem de programação: <i>C#</i>. <br />
              Me encantei pela forma de como alguns problemas recorrentes e necessários
              podem facilmente serem resolvidos com o auxílio da tecnologia e, desde então,
              desenvolvo tudo que possa vir à ser útil para alguém.
            </p>
          </div>
        </section>

        <section id="s-projects">
          <h1>Projetos</h1>
          <div className='c_projects_cards delaySmallReveal'>
            {projectsList.map((project) => (
              <ProjectCard key={project.name} title={project.name} imgSrc={project.overviewImg} url={project.liveSite} socials={project.socials} />
            ))}
          </div>
        </section>

        <section id="s-skills">
          <h1>Habilidades</h1>
          <div className='text-center text-xl uppercase -mt-4'>
              Em breve...
          </div>
        </section>

        <section id="s-contact-me">
          <h1>Contato</h1>

          <div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div>
          <p>Made by <a href="https://www.linkedin.com/in/albertov-albuquerque">Alberto Vinícius A. dos Santos</a></p>
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
