import { useEffect } from 'react';
import { initScrollReveal } from '../assets/scripts/initScrollReveal';

import CardProject from '../components/CardProject';

//imgs

import '../assets/sass/Projetos.scss';

function Projetos() {

  useEffect(() => {
    //fetch API Github pinned projects
    initScrollReveal();
  }, [])

  return (
    <main>
      <section className="s_projects">
        <div className='projects_cards delaySmallReveal'>
          <CardProject title='Sneakers' img={0} />
          <CardProject title='Netflix Clone' img={0} />
          <CardProject title='Letmeask' img={0} />
        </div>
      </section>
    </main>
  );
}

export default Projetos