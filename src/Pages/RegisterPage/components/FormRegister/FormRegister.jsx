import "./FormRegister.sass"
import { BiUser } from "react-icons/bi";
import { MdPassword , MdDriveFileRenameOutline } from "react-icons/md";
import { IoIosArrowDropright } from "react-icons/io";
import { useState } from "react";
import { GoogleSignInRequest , signUpRequest } from "../../../../config/api";
import { signInWithGoogle, signupEmailVerification } from "../../../../config/firebase";
import Swal from 'sweetalert2/src/sweetalert2.js';
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


export default function FormRegister(){
    const [Register, setRegister] = useState({
        email : "",
        password : "",
        name: "",
        confirmPassword : ""
    })

    const [loading, setloading] = useState(false);

    function Validation(){
        if(Register.email === ''|| Register.password === '' || Register.name === ''){
            Toast.fire({
                icon:'error',
                title: "Preencha todos os campos"
            })
        } else if(Register.password !== Register.confirmPassword){
            Toast.fire({
                icon:'error',
                title: "As senhas devem ser iguais"
            })
        }
        else {
            setloading(true);
            signUpRequest(Register).then(res => {
                if(res.data.process){
                    signupEmailVerification(Register);
                    Toast.fire({
                        icon: "info",
                        title: "Verifique sua caixa de email"
                    });
                    document.getElementById('email').value = ''
                    document.getElementById('name').value = ''
                    document.getElementById('password').value = ''
                    document.getElementById('passwordRepeat').value = ''

                    Register.email = ''
                    Register.name = ''
                    Register.confirmPassword = ''
                    Register.password = ''
                    setloading(false);
                }
                else if(res.data.error){
                    Toast.fire({
                        icon: "error",
                        title: res.data.error
                    });
                    setloading(false);
                }
                else{
                    Toast.fire({
                        icon: "error",
                        title: "505 - Erro no servidor"
                    });
                    setloading(false);
                }
            })
        }
    }

    function Effect(e, nome){
        const Item =  e.target.value
        Register[nome] = Item
    }

    return(
    <div id="formArea" className="relative">
        <form id="formRegister"action="post">

            <label htmlFor="email" className="text-base">
                Email 
                <BiUser className="inputIcons"/>
            </label>

            <input type="email" id="email" placeholder="Insira seu Email" autoComplete={"off"}
             onChange={
                (e)=>{
                    Effect(e,'email')
                    Effect(e,'email')
                }
            }/>
            <label htmlFor="name" className="text-base">
                Nome
                <MdDriveFileRenameOutline className="inputIcons"/>
            </label>
            <input type="text" id="name" placeholder="Insira seu nome"
             onChange={
                (e)=>{
                    Effect(e,'name')
                }
            }
                />
            <section className="flex gap-5">
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="password" id="password" placeholder="Insira sua senha"
                    onChange={
                        (e)=>{
                            Effect(e,'password')
                        }
                    }
                        />
                </div>

                <div>
                    <label htmlFor="passwordRepeat">Confirme</label>
                    <input type="password" name="password" id="passwordRepeat"  placeholder="Confirme sua senha" onChange={(e)=>{
                        Effect(e,'confirmPassword')
                    }}/>
                </div>

            </section>
                <button onClick={(e)=>{
                    e.preventDefault()
                    Validation() 
                }}>
                    {loading ?  (<><Spinner color="pink" aria-label="Info spinner example" /></>) : 
                    (<p>Entrar</p>)} 
                    <IoIosArrowDropright id="ArrowIcon" />
                </button>
        </form>
        
    </div>  
    )
}