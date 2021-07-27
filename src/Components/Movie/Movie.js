import React from 'react';
import classes from './Movie.module.css';

const Movie = props => {
    return (
        <li className={classes.movie}>
            <h1>{props.title}</h1>
            <h2>{props.openingText}</h2>
            <p>{props.releaseDate}</p>
        </li>
    )
}
export default Movie;