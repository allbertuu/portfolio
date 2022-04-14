import btn from '../assets/sass/Button.module.scss';

function Button({ text }) {
  return (
    <button className={btn.btn_faixa}>
      {text}
    </button>
  );
}

export default Button