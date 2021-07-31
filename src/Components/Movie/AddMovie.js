import React,{useRef} from 'react';
import classes from './AddMovie.module.css';

const AddMovie = props => {

    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');

    const submitHandler = (event) => {
        event.preventDefault();

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value
        };
        props.onAddMovie(movie);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
            <label>Title</label>
            <input htmlFor='title' type='text' id='title'></input>
            </div>

            <div className={classes.control}>
            <label>Opening Text</label>
            <textarea rows='5' id ='opening-text'></textarea>
            </div>

            <div className={classes.control}>
            <label>Release Date</label>
            <input htmlFor ='release-date' type='text' id='date'></input>
            </div>

            <button>Add Movies</button>

        </form>
    )
}
export default AddMovie;