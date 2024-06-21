import { useNavigate } from "react-router"
import { Navbar, NavbarCollapse, NavbarBrand } from "flowbite-react";
import "./header.sass"

export default function Header(){
    return(
        <Navbar fluid rounded>
            <NavbarBrand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl">Prova</span>
            </NavbarBrand>
            <Navbar.Toggle />
            <NavbarCollapse>
                <Navbar.Link href="#">Todos</Navbar.Link>
                <Navbar.Link href="#">Adicionar</Navbar.Link>
                <Navbar.Link href="#">Sobre</Navbar.Link>
            </NavbarCollapse>
        </Navbar>
    )
}
