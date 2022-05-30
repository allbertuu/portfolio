// scripts
import { scrollTo } from '../../assets/scripts/main';

type ButtonProps = {
  text: string,
  type?: string,
  to?: string,
}

function Button({ text, type = 'primary', to = 'Without prop' }: ButtonProps) {
  return (
    <button className={`c-btn c-btn-faixa c-btn-faixa--${type}`} onClick={() => scrollTo(to)}>
      {text}
    </button>
  );
}

export default Button