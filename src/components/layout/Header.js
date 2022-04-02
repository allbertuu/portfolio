import NavItem from '../../components/NavItem';

import '../../assets/sass/Header.scss';

function Header() {
  return (
    <header>
      <div className='l_logo'>
        Portfólio
      </div>

      <nav>
        <ul>
          <NavItem text="Início" link="/" />
          <NavItem text="Projetos" link="/projects" />
          <NavItem text="Habilidades" link="/skills" />
        </ul>
      </nav>
    </header>
  );
}

export default Header