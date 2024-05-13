import "../index.css"
import { useState } from "react"

import NavigationFilter from "../components/NavigationFilter"
import ProgressBar from "../components/ProgressBar"
import Certificates from "../components/Certificates"

import { skills } from "../data/resume/skills"
import getCertificates from "../data/resume/certificates"
import { useTranslation } from "react-i18next"

function Resume() {
    const { t } = useTranslation('resume') 

    const allFilterId = "all"
    const filters = [
        { id: allFilterId, text: t('filterAll') },
        { id: "database", text: t('databaseSkill') },
        { id: "javascript", text: "JavaScript" },
        { id: "languages", text: t('languagesSkill') },
        { id: "python", text: "Python" },
        { id: "tools", text: t('toolsSkill') },
        { id: "webdev", text: t('webdevSkill') }
    ] 

    const [selectedCategory, setSelectedCategory] = useState(allFilterId)

    const filteredSkills = selectedCategory === allFilterId ? skills : skills.filter(skill => skill.category.includes(selectedCategory))
    
    const certificates = getCertificates()

    return (
        <section>
            <h2>{t('topic')}</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <div id="education">
                    <h3>{t('titleEducation')}</h3> 
                    <div>
                        <a href="https://unasp.br/" target="_blank">UNASP</a>
                        <p>{t('academicEducation1')}</p>
                    </div>
                    <div>
                        <a href="https://www.unip.br/" target="_blank">UNIP</a>
                        <p>{t('academicEducation2')}</p>
                    </div>
                </div>
                <div id="skills">
                    <h3>{t('titleSkills')}</h3>
                    <NavigationFilter setSelectedFilters={setSelectedCategory} selectedFilter={selectedCategory} filters={filters} />
                    <div>
                    {filteredSkills.sort((a, b) => b.competence - a.competence || a.title.localeCompare(b.title)).map((skill, index) => <ProgressBar key={index} data={skill} /> )}
                    </div>
                </div>
                <div id="certificates">
                    <h3>{t('titleCertificates')}</h3>
                    <div>
                        <ul>
                            {certificates.map((certificate, index) => <Certificates key={certificate.title} title={certificate.title} imageURL={certificate.imageURL} last={index === certificates.length - 1} />)}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume