import { useEffect } from 'react';
import { initScrollReveal } from '../assets/scripts/initScrollReveal';
import '../assets/sass/Projetos.scss';
import CardProject from '../components/CardProject';

function Projetos() {

  useEffect(() => {
    initScrollReveal();
  },[])

  return (
    <main>
      <section className="l_projects">
        <div className='projects_cards delaySmallReveal'>
          <CardProject />
          <CardProject />
          <CardProject />
        </div>
      </section>
    </main>
  );
}

export default Projetos