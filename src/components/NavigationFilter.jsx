import { useLocation } from "react-router-dom"
import "../index.css"

function NavigationSkill({ setSelectedFilters, selectedFilter, filters }) {
    const local = useLocation()
    
    var paddingStyle = "20px 0 0 0"
    
    if (local.pathname === "/curriculo") paddingStyle = "20px 0 5px 0"

    return(
        <div id="navigation-skill" style={ {padding: paddingStyle} }>
            {filters.map((filter, index) => <a className={selectedFilter === filter.id ? 'active' : ''} key={index} onClick={() => setSelectedFilters(filter.id)}>{filter.text}</a>)}
        </div>
    )
}

export default NavigationSkill