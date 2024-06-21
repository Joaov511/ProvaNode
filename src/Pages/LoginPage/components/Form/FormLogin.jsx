import "./componentsLogin.sass"
import { BiUser } from "react-icons/bi";
import { MdPassword } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";
import { GoogleSignInRequest , signInRequest} from "../../../../config/api";
import { isEmailVerified, signInWithGoogle } from "../../../../config/firebase";
import { Spinner } from "flowbite-react";

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 6000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseleave = Swal.resumeTimer;
    }
});


export default function FormLogin(){
    const [Login, setLogin] = useState({
        email : "",
        password : ""
    })

    const [loading, setloading] = useState(false);

    return(
    <div id="formArea">
        <form id="formLogin" action="post">

            <label htmlFor="email" className="text-base">
                Email 
                <BiUser className="inputIcons"/>
            </label>

            <input type="email" id="email" placeholder="Insira seu Email" autoComplete={"off"}
             onChange={
                (e)=>{
                   const Email =  e.target.value
                   setLogin({...Login , email : Email})
                }
            }/>
            <label htmlFor="password" className="text-base">
                Senha
                <MdPassword className="inputIcons"/>
            </label>
            <input type="password" id="password" placeholder="Insira sua senha"
             onChange={
                (e)=>{
                   const Password =  e.target.value
                   
                   setLogin({...Login , password : Password})
                }
            }
                />
            <a href="#" id="forgotYP" className="text-s">Esqueceu sua senha?</a>
                <button onClick={(e)=>{
                    setloading(true)
                    e.preventDefault()
                    isEmailVerified(Login).then(verified => {
                        if(verified){
                            signInRequest(Login).then(res => {
                                if(res.data.Accepted) {
                                    window.location.href = '/';
                                }
                            })
                        } 
                        else {
                            Toast.fire({
                                icon:'error',
                                title: "Email ou senha inválidos"
                            })
                            setloading(false)
                        }
                    })
                }}>
                    {loading ?  (<><Spinner color="pink" aria-label="Info spinner example" /></>) : 
                    (<p>Entrar</p>)} 
                    <IoIosArrowDropright id="ArrowIcon" />
                </button>
        </form>
    </div>  
    )
}