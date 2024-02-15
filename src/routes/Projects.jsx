import "../index.css"

import CardProject from "../components/CardProject"
import data from "../data/projects"

function Projects() {
    return (
        <section>
            <h2>Projetos</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                {data.map((val) => <CardProject data={val} /> )}
            </div>
        </section>
    )
}

export default Projects