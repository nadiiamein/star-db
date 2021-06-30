import React from 'react';
import './error-indicator.css';
import icon from './planet.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span>somesing has gone terribly wrong</span>
            <span>(but we already sent droids to fixit)</span>
        </div>
    );
};

export default ErrorIndicator;