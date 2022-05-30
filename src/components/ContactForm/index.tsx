import { useState } from "react";

const FORM_ENDPOINT = "";

function ContactForm() {

  const [isSubmitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (isSubmitted) {
    return (
      <div className="text-center ">
        <div className="text-2xl">Obrigado!</div>
        <div className="text-md">Entrarei em contato em breve.</div>
      </div>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className="mb-3 pt-0">
        <input
          type="text"
          placeholder="Seu nome"
          name="name"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <input
          type="email"
          placeholder="Email"
          name="email"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <textarea
          placeholder="Sua mensagem"
          name="message"
          className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white rounded border-0 shadow outline-none focus:outline-none focus:ring w-full"
          required
        />
      </div>
      <div className="mb-3 pt-0">
        <button
          className="c-btn c-btn-faixa c-btn-faixa--secondary"
          type="submit"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default ContactForm;