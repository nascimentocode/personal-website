import "../index.css"

import { useState } from "react"
import { useTranslation } from "react-i18next"

import CardProject from "../components/CardProject"
import getProjects from "../data/projects"
import NavigationFilter from "../components/NavigationFilter"

function Projects() {
    const { t } = useTranslation('projects')

    const filterAllId = "all"
    const filters = [{ id: filterAllId, text: t('filterAll') }, { id: "python", text: "Python" }, { id: "java", text: "Java" }]

    const [selectedLanguage, setSelectedLanguage] = useState(filterAllId)
    
    const data = getProjects()

    const filteredProjects = selectedLanguage === filterAllId ? data : data.filter(project => project.language.includes(selectedLanguage))

    let colorLanguage = ""

    return (
        <section>
            <h2>{t('topic')}</h2>
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