import '../assets/sass/Projetos.scss';
import CardProject from '../components/CardProject';

function Projetos() {
  return (
    <main>
      <section className="l_projects">
        <CardProject />
        <CardProject />
        <CardProject />
      </section>
    </main>
  );
}

export default Projetos