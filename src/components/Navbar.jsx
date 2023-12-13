import { Link } from "react-router-dom"

import "../index.css"

function Navbar() {
    return (
        <nav>
            <Link to="/" className="active">Home</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/projetos">Projetos</Link>
            <Link to="/contato">Contato</Link>
        </nav>
    )
}

export default Navbar