import { useEffect } from 'react';
//components
import Button from '../components/Button';
//icons and imgs
// import imgCard from '../assets/imgs/img.png';
//scripts
import sr from '../assets/scripts/ScrollReveal';
import { initScrollReveal } from '../assets/scripts/initScrollReveal';
//styles
import '../assets/sass/Home.scss';

function Home() {

  useEffect(() => {

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
    const item_4 = {
      origin: 'bottom',
      duration: 850,
      delay: 6000,
      scale: 0.5,
      easing: 'ease',
    }

    //welcome
    sr.reveal('.item_1', item_1);
    sr.reveal('.item_2', item_2);
    sr.reveal('.item_3', item_3);
    sr.reveal('.c_btn', item_4);

  }, []);

  return (
    <main>
      <section id='s_welcome'>
        <div className="c_whoIAm">
          <div className="c_text">
            <h3 className="item_1">Olá, me chamo</h3>
            <h1 className="item_2">Alberto Albuquerque</h1>
            <h2 className="item_3">Desenvolvedor Front-end</h2>
          </div>
          <Button text="Quero conhecê-lo!" to='s_aboutMe' />
        </div>
        <div className=''>

        </div>
      </section>

      <section id='s_aboutMe'>
        <div className="box delaySmallReveal intervalCardReveal">

        </div>
        <div className="aboutMe intervalCardReveal">
          <h2 className="delaySmallReveal intervalCardReveal">
            Sobre mim
          </h2>
          <p className="delaySmallReveal intervalCardReveal">
            Meu nome é Alberto Albuquerque, tenho 19 anos e sou desenvolvedor Front-end. <br />
            Meu início no mundo da programação se deu em 2019, onde tive meu primeiro contato com uma
            linguagem de programação: <i>C#</i>. <br />
            Me encantei pela forma de como alguns problemas recorrentes e necessários
            podem facilmente serem resolvidos com o auxílio da tecnologia e, desde então,
            desenvolvo tudo que possa vir à ser útil para alguém.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home