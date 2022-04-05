import { useEffect } from 'react';
import { initScrollReveal } from '../assets/scripts/initScrollReveal';

import Button from '../components/Button';

import sr from '../assets/scripts/ScrollReveal';
import '../assets/sass/Home.scss';

function Home() {

  useEffect(() => {

    initScrollReveal();

    const item_1 = {
      origin: 'top',
      duration: 1500,
      delay: 150,
      distance: '50px',
      easing: 'ease',
    }
    const item_2 = {
      origin: 'top',
      duration: 1500,
      delay: 2000,
      distance: '20px',
      easing: 'ease',
    }
    const item_3 = {
      origin: 'left',
      duration: 2000,
      delay: 4000,
      distance: '50px',
      easing: 'ease',
    }
    const item_4 = {
      duration: 1000,
      delay: 6000,
      distance: '100px',
      scale: 0.6,
      easing: 'ease',
    }

    //welcome
    sr.reveal('.item_1', item_1);
    sr.reveal('.item_2', item_2);
    sr.reveal('.item_3', item_3);
    sr.reveal('.item_4', item_4);

  }, []);

  return (
    <main>
      <section className='l_welcome'>
        <div className="welcome">
          <span className="item_1">Olá!</span>
          <span className="item_2">Me chamo Alberto.</span>
          <span className="item_3">Muito prazer o/</span>
        </div>
        <div className='item_4'>
          <Button text="Quero conhecê-lo!" />
        </div>
      </section>

      <section className='l_aboutMe'>
        <div className="box delaySmallReveal intervalCardReveal">
          
        </div>
        <div className="aboutMe intervalCardReveal">
          <h2 className="delaySmallReveal intervalCardReveal">Sobre mim</h2>
          <p className="delayMediumReveal intervalCardReveal">
            Meu nome é Alberto Albuquerque, tenho 19 anos e sou desenvolvedor Front-end Jr. <br />
            Meu início no mundo da programação se deu em 2019, onde tive meu primeiro contato com uma
            linguagem de programação: <i>C#</i>. <br />
            Me encantei pela forma de como alguns problemas recorrentes e necessários
            podem facilmente serem resolvidos com o auxílio da tecnologia.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home