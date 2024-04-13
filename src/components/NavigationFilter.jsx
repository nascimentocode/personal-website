import "../index.css"

function NavigationSkill({ setSelectedFilters, selectedFilter, filters }) {
    return(
        <div id="navigation-skill">
            {filters.map((filter, index) => <a className={selectedFilter === filter ? 'active' : ''} key={index} onClick={() => setSelectedFilters(filter)}>{filter}</a>)}
        </div>
    )
}

export default NavigationSkill