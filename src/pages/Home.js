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
      <section className='s_welcome'>
        <div className="c_knowMe">
          <div className="text">
            <span className="item_1">Olá!</span>
            <span className="item_2">Me chamo Alberto</span>
            <span className="item_3">Desenvolvedor Front-end</span>
          </div>
          <div className='c_btn'>
            <Button text="Quero conhecê-lo!" />
          </div>
        </div>
        <div className=''>

        </div>
      </section>

      <section className='s_aboutMe'>
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