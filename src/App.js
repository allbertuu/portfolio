import { useEffect } from 'react';

import Button from './components/Button';
import NavItem from './components/NavItem';
import sr from './assets/scripts/ScrollReveal'

import './App.scss';

function App() {

  useEffect(() => {

    const config = {
      origin: 'right',
      duration: 1500,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }
    const item_1 = {
      origin: 'top',
      duration: 1500,
      delay: 150,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }
    const item_2 = {
      origin: 'top',
      duration: 1500,
      delay: 2000,
      distance: '20px',
      scale: 1,
      easing: 'ease',
    }
    const item_3 = {
      origin: 'left',
      duration: 2000,
      delay: 4000,
      distance: '50px',
      scale: 1,
      easing: 'ease',
    }

    sr.reveal('.box', config);
    sr.reveal('.item_1', item_1);
    sr.reveal('.item_2', item_2);
    sr.reveal('.item_3', item_3);
  }, []);

  return (
    <>
      <header>
        <div className='l_logo'>
          Portfólio
        </div>

        <nav>
          <ul>
            <NavItem text="Início" link="/" />
            <NavItem text="Projetos" link="/" />
          </ul>
        </nav>
      </header>

      {/* aqui vai começar as rotas - pages */}
      <main>
        <section className='l_welcome'>
          <div className="welcome">
            <span className="item_1">Olá!</span>
            <span className="item_2">Me chamo Alberto.</span>
            <span className="item_3">Muito prazer o/</span>
          </div>
          <div>
            <Button text="Quero conhecê-lo!" />
          </div>
        </section>

        <section className='l_aboutMe'>
          <div className="box">
            Box
          </div>
          <div className="aboutMe">
            Sobre mim
          </div>
        </section>
      </main>
      {/* aqui vai terminar as rotas - pages */}

      <footer></footer>
    </>
  );
}

export default App;
