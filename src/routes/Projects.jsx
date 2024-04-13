import "../index.css"
import { useState } from "react"

import CardProject from "../components/CardProject"
import data from "../data/projects"
import NavigationFilter from "../components/NavigationFilter"

function Projects() {
    const [selectedLanguage, setSelectedLanguage] = useState("todas")

    const filteredProjects = selectedLanguage === "todas" ? data : data.filter(project => project.language.includes(selectedLanguage))

    const filters = ["todas", "python", "java"]

    return (
        <section>
            <h2>Projetos</h2>
            <NavigationFilter setSelectedFilters={setSelectedLanguage} selectedFilter={selectedLanguage} filters={filters} />
            <div className="divider-content"></div>
            <div className="section-content">
                {filteredProjects.map((project, index) => <CardProject key={index} data={project} /> )}
            </div>
        </section>
    )
}

export default Projects