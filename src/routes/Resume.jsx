import "../index.css"

import ProgressBar from "../components/ProgressBar"

function Resume() {
    return (
        <section>
            <h2>Currículo</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <div id="education">
                    <h3>Formação Acadêmica</h3>
                    <div>
                        <a href="https://unasp.br/" target="_blank">UNASP</a>
                        <p>Ensino Médio / Técnico em Informática - Concluído em 2019</p>
                    </div>
                    <div>
                        <a href="https://www.unip.br/" target="_blank">UNIP</a>
                        <p>Ciências da Computação – Cursando atualmente 8º Semestre</p>
                    </div>
                </div>
                <div id="skills">
                    <h3>Skills</h3>
                    <div>
                        <ProgressBar bgcolor="red" progress="75" language="Java" level="3"/>
                        <ProgressBar bgcolor="aqua" progress="25" language="React" level="1"/>
                        <ProgressBar bgcolor="purple" progress="100" language="Python" level="4"/>
                        <ProgressBar bgcolor="yellow" progress="50" language="JavaScript" level="2"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume