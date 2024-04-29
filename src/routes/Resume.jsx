import "../index.css"
import { useState } from "react"

import NavigationFilter from "../components/NavigationFilter"
import ProgressBar from "../components/ProgressBar"
import { data } from "../data/resume/skills"

function Resume() {
    const [selectedCategory, setSelectedCategory] = useState("todas")

    const filteredSkills = selectedCategory === "todas" ? data : data.filter(skill => skill.category.includes(selectedCategory))

    const filters = ["todas", "banco de dados", "javascript", "linguagens", "python", "ferramentas", "desenvolvimento web"]

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
                    <NavigationFilter setSelectedFilters={setSelectedCategory} selectedFilter={selectedCategory} filters={filters} />
                    <div>
                    {filteredSkills.sort((a, b) => b.competence - a.competence || a.title.localeCompare(b.title)).map((skill, index) => <ProgressBar key={index} data={skill} /> )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume