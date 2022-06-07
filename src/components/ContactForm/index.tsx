import { ref, set } from "firebase/database";
import { FormEvent, useState } from "react";
import { database } from "../../services/firebase";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

type SubmitState = 'Error found' | 'Not submitted' | 'Submitting' | 'Submitted';

type FormData = {
  name: string,
  email: string,
  message: string,
  dateSent: string
};

function ContactForm() {

  function generateID() {
    const id = Math.floor(Date.now() * Math.random()).toString(36);
    return id;
  }

  const [submitState, setSubmitState] = useState<SubmitState>('Not submitted');
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '', dateSent: '' });

  function handleOnChange(e: { target: { name: string; value: string; }; }) {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  }

  function resetInputs() {
    let name = (document.getElementById('name') as HTMLInputElement);
    let email = (document.getElementById('email') as HTMLInputElement);
    let message = (document.getElementById('message') as HTMLInputElement);

    const fields = [];

    fields.push(name, email, message);

    fields.forEach((field) => {
      if (field) {
        field.value = "";
      }
    })
  }

  async function addFormDataToDatabase() {
    const formDataID = generateID();
    const databaseRef = ref(database, `messages/${formDataID}`);

    let today = new Date();
    let todayFormatted = today.toLocaleString('pt-br');
    formData.dateSent = todayFormatted;

    await set(databaseRef, formData)
      .then(() => {
        setSubmitState('Submitted');
      })
      .catch(() => {
        setSubmitState('Error found');
      });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    addFormDataToDatabase();
  }

  function handleError() {
    resetInputs();
    setSubmitState('Not submitted');
  }

  if (submitState === 'Submitted') {
    return (
      <div className="text-center delayMediumReveal">
        <CheckCircleIcon fontSize="large" className="-mt-10 mb-4" />
        <span className="text-2xl mb-2 block">Sua mensagem foi enviada com sucesso!</span>
        <span className="text-md block">Entrarei em contato em breve.</span>
      </div>
    );
  }

  if (submitState === 'Error found') {
    return (
      <div className="text-center">
        <ErrorIcon fontSize="large" className="-mt-10 mb-4" />
        <span className="text-2xl mb-2 block">Oops! Houve um erro.</span>
        <span onClick={handleError} className="text-md block underline hover:cursor-pointer">Tentar novamente.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      className="px-4 w-full sm:mx-auto sm:max-w-md xl:max-w-lg
    grid grid-cols-5 gap-4 delayMediumReveal"
    >
      <div className="grid grid-cols-4 gap-4 col-span-5">
        <div className="col-span-4 sm:col-span-2 intervalCardReveal">
          <input
            id="name"
            type="text"
            placeholder="Seu nome"
            name="name"
            className="placeholder-gray-400 text-gray-600"
            onChange={handleOnChange}
            required
          />
        </div>
        <div className="col-span-4 sm:col-span-2 intervalCardReveal">
          <input
            id="email"
            type="email"
            placeholder="Email"
            name="email"
            className="placeholder-gray-400 text-gray-600"
            onChange={handleOnChange}
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
          onChange={handleOnChange}
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
};

export default ContactForm;