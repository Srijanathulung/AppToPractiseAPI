import './App.css';
import React,{useState} from 'react';
import MoviesList from './Components/Movie/MoviesList';
import Button from './Components/Button/Button';


function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading,setIsLoading]=useState(false)

  async function fetchMoviesHandler() {
    // console.log('function is called');
    
    setIsLoading(true)

    const response = await fetch('https://swapi.dev/api/films/')
      const data=  await response.json();
     
        const transformedMovies = data.results.map(movieData => {
          return {
            id: movieData.episode_id,
            title: movieData.title,
            openingText: movieData.opening_crawl,
            releaseDate: movieData.release_date
          }
        });
  
    setMovies(transformedMovies);
    setIsLoading(false);
      
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
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>Movies not found</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
