import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { FiAlignRight, FiX } from "react-icons/fi";

import "../index.css"

function Navbar() {
    const [hamburguerOpen, setHamburguerOpen] = useState(false)

    const toggleHamburguer = () => {
        setHamburguerOpen(!hamburguerOpen)
    }

    const handleResize = () => {
        if (window.innerWidth > 768 && !hamburguerOpen) {
            setHamburguerOpen(true)
        }
        
        if (window.innerWidth <= 768 && hamburguerOpen) {
            setHamburguerOpen(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }   

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [hamburguerOpen])

    return (
        <header>
            <nav>
                <div id="brand">
                    <h1>Nascimento<span>code</span></h1>
                </div>
                <div id="icon" onClick={toggleHamburguer}>
                    {hamburguerOpen ? <FiX /> : <FiAlignRight />}
                </div>
                <div id="nav-link" style={{display: hamburguerOpen || window.innerWidth > 768 ? "flex" : "none"}} onClick={scrollToTop}>
                    <NavLink to="/" onClick={toggleHamburguer}>Home</NavLink>
                    <NavLink to="sobre" onClick={toggleHamburguer}>Sobre</NavLink>
                    <NavLink to="curriculo" onClick={toggleHamburguer}>Currículo</NavLink>
                    <NavLink to="projetos" onClick={toggleHamburguer}>Projetos</NavLink>
                    <NavLink to="status" onClick={toggleHamburguer}>Status</NavLink>
                    <NavLink to="contato" onClick={toggleHamburguer}>Contato</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar