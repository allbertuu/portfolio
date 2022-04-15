// // components
// import NavItem from '../../components/NavItem';

// scripts
import { scrollTo } from '../../assets/scripts/scrollTo';
// hooks
import { useToggle } from '../../hooks/useToggle';
// styles
import '../../assets/sass/Header.scss';
import btn from '../../assets/sass/Button.module.scss';

function Header() {

  const [isMenuOpen, toggle] = useToggle();

  const sectionList = [
    {
      name: 'Início',
      id: 's_welcome'
    },
    {
      name: 'Projetos',
      id: 's_projects'
    },
    {
      name: 'Habilidades',
      id: 's_skills'
    }
  ]

  function scrollToView(id) {
    scrollTo(id);
    return isMenuOpen ? setTimeout((toggle), 400) : undefined;
  }

  return (
    <header>
      <div className='c_logo'>
        Portfólio
      </div>

      <nav>
        {isMenuOpen &&
          <div className="fixed inset-0 c_menu_sm">
            <button className='text-white absolute' onClick={toggle}>Close</button>
            <ul className="flex flex-col items-center justify-center h-full list-none gap-6">
              {sectionList.map((section) => (
                <li onClick={() => scrollToView(section.id)}
                  className={isMenuOpen ? `${btn.btn_li} ${btn.sm}` : `${btn.btn_li} ${btn.md}`}>
                  {section.name}
                </li>
              ))}
            </ul>
          </div>
        }
        <ul className="hidden md:flex list-none gap-4">
          {sectionList.map((section) => (
            <li onClick={() => scrollToView(section.id)}
              className={isMenuOpen ? `${btn.btn_li} ${btn.sm}` : `${btn.btn_li} ${btn.md}`}>
              {section.name}
            </li>
          ))}
        </ul>

      </nav>
      <button className="md:hidden" onClick={toggle}>Menu</button>
    </header>
  );
}

export default Header