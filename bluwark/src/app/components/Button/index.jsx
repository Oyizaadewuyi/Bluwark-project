import './index.css';
import React from 'react';

function Button({children, ...props}) {
    const classNames = {
        primary: "primary",
        secondary: "secondary",
        primaryWide: "primary-wide"
    }

    const className = classNames[props.type] || classNames.primary;
    
    return(
        props.onClick ? <button {...props} onClick={props.onClick} className={`${className} ${props.className}`}>{children}</button>
            :
        <a href="#" className={`${className} ${props.className}`}>{children}</a>
    )
}

export default Button;