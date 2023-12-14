import { NavLink } from "react-router-dom"

import "../index.css"

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/curriculo">Currículo</NavLink>
            <NavLink to="/projetos">Projetos</NavLink>
            <NavLink to="/contato">Contato</NavLink>
        </nav>
    )
}

export default Navbar