import styles from '../assets/sass/Button.module.scss';

function NavItem({ text, link }) {
  return (
    <a href={link} className={styles.btn_li}>
      <li>{text}</li>
    </a>
  );
}

export default NavItem