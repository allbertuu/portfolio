// scripts
import { scrollTo } from '../assets/scripts/scrollTo';
// styles
import btn from '../assets/sass/Button.module.scss';

function Button({ text, to }) {
  return (
    <button className={btn.btn_faixa} onClick={() => scrollTo(to)}>
      {text}
    </button>
  );
}

export default Button