import { scrollTo } from "../../assets/scripts/main";

type ButtonProps = {
  text: string;
  type?: string;
  to?: string;
};

export default function Button({ text, type = "primary", to }: ButtonProps) {
  return (
    <button
      className={`c-btn c-btn-faixa-welcome c-btn-faixa--${type}`}
      onClick={() => scrollTo(to)}
    >
      {text}
    </button>
  );
}
