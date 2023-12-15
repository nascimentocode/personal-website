import "../index.css"

function Contact() {
    return (
        <section>
            <h2>Contato</h2>
            <div className="divider-content"></div>
            <div id="form-contact">
                <input type="text" placeholder="Nome" />
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Mensagem"></textarea>
                <button>Enviar </button>
            </div>
        </section>
    )
}

export default Contact