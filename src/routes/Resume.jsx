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
                        <ProgressBar bgcolor="#00304D" progress="75" language="Python" level="3"/>
                        <ProgressBar bgcolor="#EB2025" progress="75" language="Java" level="3"/>
                        <ProgressBar bgcolor="#DB7533" progress="50" language="SQL" level="3"/>
                        <ProgressBar bgcolor="#BD9E00" progress="50" language="JavaScript" level="2"/>
                        <ProgressBar bgcolor="#787CB4" progress="50" language="PHP" level="2"/>
                        <ProgressBar bgcolor="#087EA4" progress="25" language="React" level="1"/>
                        <ProgressBar bgcolor="#3f631e" progress="25" language="Django" level="1"/>
                        <ProgressBar bgcolor="black" progress="25" language="Flask" level="1"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume