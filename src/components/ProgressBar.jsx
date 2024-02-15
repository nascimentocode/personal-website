import React from 'react';

import "../index.css"

function ProgressBar({ data }) {
    return (
        <div id="progress-bar">
            <div id="progress" style={{backgroundColor: `${data.bgcolor}`, width: `${data.progress}%`}}> 
                <span id='progress-language'>{data.language}</span>
                <span id="progress-level">{data.level}/4</span>
            </div>
        </div>
    )
}

export default ProgressBar