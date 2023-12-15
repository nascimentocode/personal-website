import "../index.css"

function Contact() {
    return (
        <section>
            <h2>Contato</h2>
            <div className="divider-content"></div>
            <form id="form-contact">
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Mensagem"></textarea>
                <button>Enviar</button>
            </form>
        </section>
    )
}

export default Contact