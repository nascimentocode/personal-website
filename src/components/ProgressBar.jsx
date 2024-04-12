import React from 'react';

import "../index.css"

function ProgressBar({ data }) {
    return (
        <div id="progress-bar">
            <div id="progress" style={{backgroundColor: `${data.bgcolor}`, width: `${data.competence*25}%`}}> 
                <span id='progress-language'>{data.title}</span>
                <span id="progress-level">{data.competence}/4</span>
            </div>
        </div>
    )
}

export default ProgressBar