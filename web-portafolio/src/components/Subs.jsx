import { useState } from "react";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setMessage("Por favor, ingresa un email válido.");
      return;
    }
    setMessage("¡Gracias por suscribirte!");
    setEmail(""); // Limpia el campo después de enviar
  };

  return (
    <div className="bg-white text-black dark:bg-[#0b1d3a] dark:text-white py-10 px-5 max-w-md mx-auto text-center rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Suscríbete a mi canal</h2>
      <p className="text-gray-400 mb-5">Recibe actualizaciones sobre mis proyectos y contenido.</p>

      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="uiverse@verse.io"
          autoComplete="off"
          required
          className="w-full py-3 pl-6 rounded-full rounded-tr-none rounded-br-none border border-gray-600 bg-gray-800 text-white focus:outline-none"
        />
        <button
          type="submit"
          className="w-full rounded-full rounded-tl-none rounded-bl-none bg-blue-500 hover:bg-blue-600 transition p-3  font-bold text-white cursor-pointer"
        >
          Suscribirse
        </button>
      </form>

      {message && <p className="mt-4 text-green-400">{message}</p>}
    </div>
  );
};

export default SubscribeForm;
