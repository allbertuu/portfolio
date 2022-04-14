// components
import NavItem from '../../components/NavItem';
// hooks
import { useToggle } from '../../hooks/useToggle';
// styles
import '../../assets/sass/Header.scss';

function Header({headerVisibility}) {

  const [isMenuOpen, toggle] = useToggle();

  return (
    <header className={headerVisibility ? 'headerVisible' : undefined}>
      <div className='c_logo'>
        Portfólio
      </div>

      <nav>
        {isMenuOpen &&
          <div className="fixed inset-0 c_menu_sm">
            <button className='text-white absolute' onClick={toggle}>Close</button>
            <ul className="flex flex-col items-center justify-center h-full list-none gap-6">
              <NavItem text="Início" link="/" toggle={toggle} isMenuOpen={isMenuOpen} />
              <NavItem text="Projetos" link="/projects" toggle={toggle} isMenuOpen={isMenuOpen} />
              <NavItem text="Habilidades" link="/skills" toggle={toggle} isMenuOpen={isMenuOpen} />
            </ul>
          </div>
        }
        <ul className="hidden md:flex list-none gap-4">
          <NavItem text="Início" link="/" />
          <NavItem text="Projetos" link="/projects" />
          <NavItem text="Habilidades" link="/skills" />
        </ul>

      </nav>
      <button className="md:hidden" onClick={toggle}>Menu</button>
    </header>
  );
}

export default Header