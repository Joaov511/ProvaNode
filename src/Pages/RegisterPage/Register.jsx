import { Link, useNavigate, Outlet, json } from "react-router-dom";
import { IoLogoGoogle } from "react-icons/io";
import "./Register.sass";
import { signInWithGoogle } from "../../config/firebase";
import TextAside from "../LoginPage/components/TextAside/TextAside";
import FooterLogin from "../LoginPage/components/Footer/footerLogin";
import FormRegister from "./components/FormRegister/FormRegister";
import { IoMdArrowRoundBack } from "react-icons/io";
import BackButton from "../../standard/LoginComponents/BackButton";

export default function Register() {
  const Navigate = useNavigate();

  return (
        <>
        <div id="RegisterPage" className="">
            <aside id="TextAsideArea" className="hidden xl:block">
            <TextAside />
            </aside>
            <main
            id="mainRegister"
            className="p-10 xl:p-0 xl:w-2/6 h-2/3 rounded-xl flex justify-center items-center"
            >
            <div id="RegisterArea" className=" justify-center h-full">
                <BackButton pagelink="/" />

                <div id="title">
                <h1 className="text-4xl md:text-5xl text-start">Cadastre-se</h1>
                </div>

                <FormRegister />
                <p>Ou</p>
                <div
                id="alterRegister"
                onClick={() => {
                    signInWithGoogle();
                }}
                >
                <button>
                    <IoLogoGoogle /> Continuar com o Google
                </button>
                </div>
            </div>
            </main>
        </div>

        <FooterLogin />
        </>
  );
}