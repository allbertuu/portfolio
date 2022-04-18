import { useEffect, useState } from 'react';
// scripts
import { scrollTo } from '../../assets/scripts/scrollTo';
// styles
import '../../assets/sass/Header.scss';
import btn from '../../assets/sass/Button.module.scss';
// imgs and icons
import imgLogo from '../../assets/imgs/logo-transparent.png';

function Header() {

  const [isNavVisibility, setNavVisibility] = useState(false);

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
  }

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 70 ? setNavVisibility(true) : setNavVisibility(false);
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, []);

  return (
    <header>
      <div className='c_logo absolute md:relative'>
        <img src={imgLogo} alt="Logo" />
        Portfólio
      </div>

      <nav className={isNavVisibility ? "block" : "invisible md:block md:visible"}>
        <div className={isNavVisibility ? "c_menu" : undefined}>
          <ul className={isNavVisibility ? "flex flex-col items-center justify-center list-none gap-6" : "hidden md:flex md:flex-row list-none gap-4"}>
            {sectionList.map((section) => (
              <li onClick={() => scrollToView(section.id)}
                className={isNavVisibility ? `${btn.btn_li} ${btn.sm}` : `${btn.btn_li} ${btn.md}`}>
                {section.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </header>
  );
}

export default Header