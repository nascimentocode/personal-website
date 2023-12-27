import { useState } from "react"
import "../index.css"

function Contact() {
    return (
        <section>
            <h2>Contato</h2>
            <div className="divider-content"></div>
            <form action="https://formspree.io/f/xpzvaerj" method="POST" id="form-contact">
                <input type="text" name="name" placeholder="Nome" required />
                <input type="email" name="email" placeholder="Email" required />
                <textarea name="message" placeholder="Mensagem" required></textarea>
                <button type="submit">Enviar</button>
            </form>
        </section>
    )
}

export default Contact