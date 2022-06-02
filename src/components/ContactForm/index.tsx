import { useState } from "react";

const FORM_ENDPOINT = "";

function ContactForm() {

  const [isSubmitted, setSubmitted] = useState(false);
  
  function handleSubmit() {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
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
      className="px-4 w-full sm:mx-auto sm:max-w-md xl:max-w-lg
      grid grid-cols-5 gap-4"
    >
      <div className="grid grid-cols-4 gap-4 col-span-5">
        <div className="col-span-4 sm:col-span-2">
          <input
            type="text"
            placeholder="Seu nome"
            name="name"
            className="placeholder-gray-400 text-gray-600"
            required
          />
        </div>
        <div className="col-span-4 sm:col-span-2">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="placeholder-gray-400 text-gray-600"
            required
          />
        </div>
      </div>
      <div className="col-span-5">
        <textarea
          placeholder="Sua mensagem"
          name="message"
          className="placeholder-gray-400 text-gray-600"
          required
        />
      </div>
      <button
        className="col-end-6 col-span-2 c-btn c-btn-faixa c-btn-faixa--secondary"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;