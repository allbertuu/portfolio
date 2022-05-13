// scripts
import { scrollTo } from '../../assets/scripts/scrollTo';
// styles
import styles from './style.module.scss';

function Button({ text, to }) {
  return (
    <button className={styles.faixa} onClick={() => scrollTo(to)}>
      {text}
    </button>
  );
}

export default Button