import "./footerLogin.sass"
import { useNavigate } from "react-router"

export default function FooterLogin(){
    let navigate = useNavigate()
    return(
        <footer id="footerLoginArea">
            
                <div>
                    Termos e condições
                </div>
                <a href="https://www.instagram.com/indaiaspots/" target={"_blank"}>
                    Instagram
                </a>
            
        </footer>
    )
}