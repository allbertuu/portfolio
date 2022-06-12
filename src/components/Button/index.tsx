import { scrollTo } from "../../assets/scripts/main";

type ButtonProps = {
  text: string;
  type?: string;
  to?: string;
};

function Button({ text, type = "primary", to }: ButtonProps) {
  return (
    <button
      className={`c-btn c-btn-faixa-welcome c-btn-faixa--${type}`}
      onClick={() => scrollTo(to)}
    >
      {text}
    </button>
  );
}

export default Button;
