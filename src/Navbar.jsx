import "./index.css"

function Navbar() {
    return (
        <nav>
            <a href="/" className="active">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#portfolio">Portfólio</a>
            <a href="#contato">Contato</a>
        </nav>
    )
}

export default Navbar