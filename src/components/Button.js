// styles
import btn from '../assets/sass/Button.module.scss';

function Button({ text, to }) {

  function scrollTo(id) {
    let el = document.getElementById(id);
    el.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <button className={btn.btn_faixa} onClick={() => scrollTo(to)}>
      {text}
    </button>
  );
}

export default Button