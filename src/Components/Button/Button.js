import React from 'react';
import classes from './Button.module.css';
const Button = props => {
    return (
        <button
            className={classes.button}
            onClick={props.onClick}
        >
            Fetch Movies
        </button>
    )
}

export default Button;