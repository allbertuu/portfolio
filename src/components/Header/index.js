import { useEffect, useState } from 'react';
// scripts
import { scrollTo } from '../../assets/scripts/scrollTo';
// styles
import styles from './style.module.scss';
import buttonStyles from '../Button/style.module.scss';
// imgs and icons
import imgLogo from '../../assets/imgs/logo.png';
import HomeIcon from '@mui/icons-material/Home';
// import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import OfflineBoltIcon from '@mui/icons-material/OfflineBolt';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

function Header() {

  const [isNavVisibility, setNavVisibility] = useState(false);

  const sectionList = [
    {
      name: 'Início',
      id: 's_welcome',
      icon: <HomeIcon/>
    },
    {
      name: 'Projetos',
      id: 's_projects',
      icon: <AutoAwesomeMotionIcon/>
    },
    {
      name: 'Habilidades',
      id: 's_skills',
      icon: <OfflineBoltIcon/>
    }
  ]

  function scrollToSection(id) {
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
      <div className={`${styles.c_logo} absolute md:relative`}>
        <img src={imgLogo} alt="Logo" />
        <span>Portfólio</span>
      </div>

      <nav className={isNavVisibility ? "block" : "invisible md:block md:visible"}>
        <div className={isNavVisibility ? styles.c_menu : undefined}>
          <ul className={isNavVisibility ? "flex flex-col items-center justify-center list-none gap-6" : "hidden md:flex md:flex-row list-none gap-4"}>
            {sectionList.map((section, index) => (
              <li key={index} onClick={() => scrollToSection(section.id)} className={isNavVisibility ? `${buttonStyles.li} ${buttonStyles.li_icon}` : `${buttonStyles.li} ${buttonStyles.li_full}`}>
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