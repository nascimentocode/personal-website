import "../index.css"
import { useState } from "react"

import CardProject from "../components/CardProject"
import data from "../data/projects"
import NavigationFilter from "../components/NavigationFilter"

function Projects() {
    const [selectedLanguage, setSelectedLanguage] = useState("todas")

    const filteredProjects = selectedLanguage === "todas" ? data : data.filter(project => project.language.includes(selectedLanguage))

    const filters = ["todas", "python", "java"]

    let colorLanguage = ""

    return (
        <section>
            <h2>Projetos</h2>
            <NavigationFilter setSelectedFilters={setSelectedLanguage} selectedFilter={selectedLanguage} filters={filters} />
            <div className="divider-content"></div>
            <div className="section-content">
                {filteredProjects.map((project, index) => {
                    if (project.language.includes("java")) colorLanguage = "#FFA500"
                    else colorLanguage = "#7ED957"
                    return <CardProject key={index} data={project} colorLanguage={colorLanguage} /> 
                })}
            </div>
        </section>
    )
}

export default Projects