import './App.css';
import React,{useState} from 'react';
import MoviesList from './Components/Movie/MoviesList';
import Button from './Components/Button/Button';


function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
  async function fetchMoviesHandler() {
    // console.log('function is called');
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/')

      // const response = await fetch('https://swapi.dev/api/film/')for error
      
      if (!response.ok) {
        throw new Error('sommething went wrong');
      }
      const data = await response.json();
       
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        }
      });
      setMovies(transformedMovies);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
     }
   
  let content = <p>Movies not found</p>
  if (movies.length > 0) {
    content= <MoviesList movies={movies}/>
  }

  if (error) {
    content=<p>Something went wrong</p>
  }
  if (isLoading) {
     content=<p>Loading...</p>
  }
  
  // function fetchMoviesHandler() {
  //   console.log('function is called');

  //   fetch('https://swapi.dev/api/films/').then(response => {
  //     return response.json();
  //   }).then(data => {
  //     const transformedMovies = data.results.map(movieData => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       }
  //     });

  //     setMovies(transformedMovies);
  //   })
  //  }
 
  return (
    <React.Fragment>
      <section>
        <Button
          onClick={() =>
            {fetchMoviesHandler()}}
       />
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
