import { useEffect, useState } from 'react';
// scripts
import { scrollTo } from '../../assets/scripts/main';
// imgs and icons
import imgLogo from '../../assets/imgs/logo.png';
import HomeIcon from '@mui/icons-material/Home';
// import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

function Header() {

  type SectionList = {
    name: string,
    id: string,
    icon: JSX.Element
  }[];

  const [isNavVisibility, setNavVisibility] = useState(false);

  const sectionList: SectionList = [
    {
      name: 'Início',
      id: 's-welcome',
      icon: <HomeIcon />
    },
    {
      name: 'Projetos',
      id: 's-projects',
      icon: <AutoAwesomeMotionIcon />
    },
    {
      name: 'Habilidades',
      id: 's-skills',
      icon: <OfflineBoltIcon />
    }
  ]

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
      <div className="header__logo absolute md:relative">
        <img src={imgLogo} alt="Logo vermelha" />
        <span>Portfólio</span>
      </div>

      <nav className={isNavVisibility ? "block" : "invisible md:block md:visible"}>
        <div className={isNavVisibility ? "header__menu" : undefined}>
          <ul className={isNavVisibility ? "flex flex-col items-center justify-center list-none gap-6" : "hidden md:flex md:flex-row list-none gap-4"}>
            {sectionList.map((section) => (
              <li key={section.name} onClick={() => scrollTo(section.id)} className={isNavVisibility ? "c-btn c-btn-li c-btn-li--icon" : "c-btn c-btn-li c-btn-li--full"}>
                {isNavVisibility ? section.icon : section.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>

    </header>
  );
}

export default Header