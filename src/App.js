import { useEffect } from 'react';
// scripts
import sr, { initScrollReveal } from './assets/scripts/ScrollReveal';
// components
import Header from './components/layout/Header';
import Button from './components/Button';
import CardProject from './components/CardProject';
// imgs and icons
import imgLogoTransparent from './assets/imgs/logo-transparent.png';
import imgLogo from './assets/imgs/logo.png';
import profileImg from './assets/imgs/developer.png';
// styles
import './App.scss';

function App() {

  useEffect(() => {
    //fetch API Github pinned projects
    initScrollReveal();

    const item_1 = {
      origin: 'top',
      distance: 0,
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
        <section id='s_welcome'>
          <div>
            <div>
              <h3 className="item_1">Olá, me chamo</h3>
              <h1 className="item_2">Alberto Albuquerque</h1>
              <h2 className="item_3">Desenvolvedor Front-end</h2>
            </div>
            <Button text="Quero conhecê-lo!" to='s_aboutMe' />
          </div>
          <img src={profileImg} alt="" />
        </section>

        <section id='s_aboutMe'>
          <div className="box delaySmallReveal intervalCardReveal">
            <img src={imgLogoTransparent} alt="White logo" />
          </div>
          <div className="c_aboutMe intervalCardReveal">
            <h1 className="delaySmallReveal section_title">
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

        <section id="s_projects">
          <h1 className='section_title'>Projetos</h1>
          <div className='c_projects_cards delaySmallReveal'>
            <CardProject title='Sneakers' img={0} />
            <CardProject title='Netflix Clone' img={0} />
            <CardProject title='Letmeask' img={0} />
          </div>
        </section>
      </main>

      <footer>
        <p>Made by Alberto Albuquerque</p>
        <div>
          <p>Powered by</p>
          <img src={imgLogo} alt="White logo" />
        </div>
      </footer>
    </>
  );
}

export default App;
