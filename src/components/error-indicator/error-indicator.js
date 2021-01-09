import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} />
            <span className="boom">BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix this)
            </span>
        </div>
    )
}

export default ErrorIndicator;