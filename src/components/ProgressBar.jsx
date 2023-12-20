import React from 'react';

import "../index.css"

function ProgressBar({bgcolor, progress, language, level}) {
    return (
        <div id="progress-bar">
            <div id="progress" style={{backgroundColor: `${bgcolor}`, width: `${progress}%`}}> 
                <span id='progress-language'>{language}</span>
                <span id="progress-level">{level}/4</span>
            </div>
        </div>
    )
}

export default ProgressBar