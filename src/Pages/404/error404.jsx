import Header from "../HomePage/components/Header/header";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Página não encontrada</h2>
        <p className="text-lg mb-4 text-center">
          A página em que você tenta acessar foi removida ou possui erro de digitação.
        </p>
        <button
          className="py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 p-5"
          onClick={() => {
            Navigate("/");
          }}
        >
          Voltar para a página Inicial
        </button>
      </div>
    </>
  );
}