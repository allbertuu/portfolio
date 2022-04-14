import { Link } from "react-router-dom";
// styles
import btn from '../assets/sass/Button.module.scss';

function NavItem({ text, link, toggle, isMenuOpen }) {
  return (
    <Link to={link} className={isMenuOpen ? `${btn.btn_li} ${btn.sm}` : `${btn.btn_li} ${btn.md}`}>
      <li onClick={() => setTimeout((toggle),400)}>{text}</li>
    </Link>
  );
}

export default NavItem