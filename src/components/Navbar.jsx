import { NavLink } from "react-router-dom"
import { useState } from "react"
import { FiAlignRight } from "react-icons/fi";

import "../index.css"

function Navbar() {
    const [hamburguerOpen, setHamburguerOpen] = useState(
        window.innerWidth <= 768 ? false : true
    )

    const toggleHamburguer = () => {
        setHamburguerOpen(!hamburguerOpen)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <header>
            <nav>
                <div id="brand">
                    <h1>Nascimento<span>code</span></h1>
                </div>
                <div id="icon" onClick={toggleHamburguer}>
                    <FiAlignRight />
                </div>
                <div id="nav-link" style={{display: hamburguerOpen ? "flex" : "none"}} onClick={scrollToTop}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="sobre">Sobre</NavLink>
                    <NavLink to="curriculo">Currículo</NavLink>
                    <NavLink to="projetos">Projetos</NavLink>
                    <NavLink to="contato">Contato</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar