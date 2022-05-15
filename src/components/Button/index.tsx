// scripts
import { scrollTo } from '../../assets/scripts/scrollTo';
// styles
import styles from './style.module.scss';

type ButtonProps = {
  text: string,
  to: string
}

function Button({ text, to }:ButtonProps) {
  return (
    <button className={styles.faixa} onClick={() => scrollTo(to)}>
      {text}
    </button>
  );
}

export default Button