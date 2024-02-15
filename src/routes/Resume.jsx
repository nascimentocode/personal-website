import "../index.css"

import ProgressBar from "../components/ProgressBar"
import data from "../data/resume/skills"

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
                        {data.sort((a, b) => b.level - a.level).map((val) => <ProgressBar data={val} /> )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume