import { Link, useNavigate } from "react-router-dom";
import FormLogin from "./components/Form/FormLogin";
import { IoLogoGoogle } from "react-icons/io";
import "./login.sass";
import Images from "../../../public/Image/images";
import FooterLogin from "./components/Footer/footerLogin";
import Header from "../HomePage/components/Header/header";
import { signInWithGoogle } from "../../config/firebase";
import BackButton from "../../standard/LoginComponents/BackButton";
import TextAside from "./components/TextAside/TextAside";

export default function Login() {
  const Navigate = useNavigate();

  return (
    <>
      <div id="LoginPage" className="flex justify-center items-center h-screen">
        <main
          id="mainLogin"
          className="p-10 xl:p-0 xl:w-2/6 h-2/3 rounded-xl flex justify-center items-center"
        >
          <div id="LoginArea" className="w-full">
            <div id="title">
              <h1 className="p-5 text-5xl text-start">Login</h1>
            </div>
            <BackButton position="right" pagelink="/" />

            <FormLogin />
            <p>Ou</p>
            <div
              id="alterLogin"
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

        <aside id="TextAsideArea" className="hidden xl:block">
          <TextAside />
        </aside>
      </div>

      <FooterLogin />
    </>
  );
}
