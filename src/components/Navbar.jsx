import { NavLink } from "react-router-dom"
// import { useState } from "react"
import { TfiAlignRight } from "react-icons/tfi"

import "../index.css"

function Navbar() {
    // const [showNavbar, setShowNavbar] = useState(false)

    // const handleShowNavbar = () => {
    //     setShowNavbar(!showNavbar)
    // }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <header>
            <nav>
                <div>
                    <h1>Logo</h1>
                </div>
                <div id="nav-link" onClick={scrollToTop}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/sobre">Sobre</NavLink>
                    <NavLink to="/curriculo">Currículo</NavLink>
                    <NavLink to="/projetos">Projetos</NavLink>
                    <NavLink to="/contato">Contato</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar