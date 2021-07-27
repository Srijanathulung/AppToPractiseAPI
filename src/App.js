import './App.css';
import React from 'react';
import MoviesList from './Components/Movie/MoviesList';
import Button from './Components/Button/Button';


function App() {
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-19',
    }
  ]

  return (
    <React.Fragment>
      <section>
        <Button/>
      </section>
      <section>
       <MoviesList movies={dummyMovies}/>
      </section>
    </React.Fragment>
  );
}

export default App;
