import { FormEvent, useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import emailjs from "@emailjs/browser";

type SubmitState = "Error found" | "Not submitted" | "Submitting" | "Submitted";

function ContactForm() {
  emailjs.init("rqA0490qfu66Z9Qjn");

  const [submitState, setSubmitState] = useState<SubmitState>("Not submitted");

  function resetInputs() {
    let name = document.getElementById("from_name") as HTMLInputElement;
    let email = document.getElementById("from_email") as HTMLInputElement;
    let message = document.getElementById("message") as HTMLInputElement;

    const fields = [name, email, message];

    fields.forEach((field) => {
      if (field) {
        field.value = "";
      }
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const serviceID = "default_service";
    const templateID = "template_3vbvzqh";

    emailjs
      .sendForm(serviceID, templateID, "form")
      .then(() => {
        setSubmitState("Submitted");
        alert("Obrigado! 🚀");
      })
      .catch(() => {
        setSubmitState("Error found");
      });
  }

  function handleError() {
    resetInputs();
    setSubmitState("Not submitted");
  }

  if (submitState === "Submitted") {
    return (
      <div className="text-center delayMediumReveal">
        <CheckCircleIcon fontSize="large" className="-mt-10 mb-4" />
        <span className="text-2xl mb-2 block">
          Sua mensagem foi enviada com sucesso!
        </span>
        <span className="text-md block">Entrarei em contato em breve.</span>
      </div>
    );
  }

  if (submitState === "Error found") {
    return (
      <div className="text-center">
        <ErrorIcon fontSize="large" className="-mt-10 mb-4" />
        <span className="text-2xl mb-2 block">Oops! Houve um erro.</span>
        <span
          onClick={handleError}
          className="text-md block underline hover:cursor-pointer"
        >
          Tentar novamente.
        </span>
      </div>
    );
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="px-4 w-full sm:mx-auto sm:max-w-md xl:max-w-lg
    grid grid-cols-5 gap-4 delayMediumReveal"
    >
      <div className="grid grid-cols-4 gap-4 col-span-5">
        <div className="col-span-4 sm:col-span-2 intervalCardReveal">
          <input
            id="from_name"
            type="text"
            placeholder="Seu nome"
            name="from_name"
            className="placeholder-gray-400 text-gray-600"
            minLength={5}
            maxLength={20}
            required
          />
        </div>
        <div className="col-span-4 sm:col-span-2 intervalCardReveal">
          <input
            id="from_email"
            type="email"
            placeholder="Email"
            name="from_email"
            className="placeholder-gray-400 text-gray-600"
            minLength={15}
            required
          />
        </div>
      </div>
      <div className="col-span-5 intervalCardReveal">
        <textarea
          id="message"
          placeholder="Sua mensagem"
          name="message"
          className="placeholder-gray-400 text-gray-600"
          minLength={20}
          maxLength={500}
          required
        />
      </div>
      <button
        className="col-end-6 col-span-2 c-btn c-btn-faixa c-btn-faixa--secondary intervalCardReveal"
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
