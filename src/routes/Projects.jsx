import "../index.css"

import CardProject from "../components/CardProject"

function Projects() {
    return (
        <section>
            <h2>Projetos</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <CardProject 
                    link="https://github.com/nascimentocode/password-generator" 
                    title="Password Generator"
                    data="JANEIRO, 2024"
                    img="public/screenPasswordGenerator.png"
                    desc="Este projeto é um gerador de senhas que permite aos usuários personalizar a criação de senhas de acordo com suas preferências"
                />
            </div>
        </section>
    )
}

export default Projects