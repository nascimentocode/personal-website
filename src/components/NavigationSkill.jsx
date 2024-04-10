import "../index.css"

function NavigationSkill({ setSelectedSkills, selectedCategory }) {
    const filters = ["todas", "banco de dados", "javascript", "linguagens", "python", "ferramentas", "desenvolvimento web"]
    return(
        <div id="navigation-skill">
            {filters.map((filter, index) => <a className={selectedCategory === filter ? 'active' : ''} key={index} onClick={() => setSelectedSkills(filter)}>{filter}</a>)}
        </div>
    )
}

export default NavigationSkill