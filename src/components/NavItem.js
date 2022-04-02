import styles from '../assets/sass/Button.module.scss';
import { Link } from "react-router-dom";

function NavItem({ text, link }) {
  return (
    <Link to={link} className={styles.btn_li}>
      <li>{text}</li>
    </Link>
  );
}

export default NavItem