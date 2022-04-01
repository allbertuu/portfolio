import styles from '../assets/sass/Button.module.scss';

function Button({ text }) {
  return (
    <button className={styles.btn_faixa}>
      {text}
    </button>
  );
}

export default Button