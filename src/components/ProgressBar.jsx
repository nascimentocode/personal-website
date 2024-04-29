import React from 'react';
import { skillColor } from "../data/resume/skills"

import "../index.css"

function ProgressBar({ data }) {
    let categoryColor = null
    
    const priorityCategories = [ "banco de dados", "javascript", "linguagens", "ferramentas", "desenvolvimento web"]

    if (data.category.length > 1) {
        for (var priorityCategory of priorityCategories) {
            if (data.category.includes(priorityCategory)) { // Verifica se a categoria prioritária está presente
                categoryColor = skillColor[priorityCategory]
                break
            }
        }
    }
    else {
        const category = data.category[0]
        categoryColor = skillColor[category]
    }
    
    return (
        <div id="progress-bar">
            <div id="progress" style={{backgroundColor: `${categoryColor}`, width: `${data.competence*25}%`}}> 
                <span id='progress-language'>{data.title}</span>
                <span id="progress-level">{data.competence}/4</span>
            </div>
        </div>
    )
}

export default ProgressBar