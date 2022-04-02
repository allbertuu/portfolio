import { useEffect } from 'react';

import Button from '../components/Button';

import sr from '../assets/scripts/ScrollReveal';
import '../assets/sass/Home.scss';

function Home() {

  useEffect(() => {

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

    sr.reveal('.item_1', item_1);
    sr.reveal('.item_2', item_2);
    sr.reveal('.item_3', item_3);
  }, []);

  return (
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
        <div>
          
        </div>
      </section>
    </main>
  );
}

export default Home