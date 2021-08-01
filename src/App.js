import './App.css';
import React,{useState,useEffect,useCallback} from 'react';
import MoviesList from './Components/Movie/MoviesList';
import AddMovie from './Components/Movie/AddMovie';

function App() {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchMoviesHandler = useCallback(async ()=>{
    // console.log('function is called');
    
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-http-f9e2e-default-rtdb.firebaseio.com/movies.json')

      // const response = await fetch('https://swapi.dev/api/film/')for error
      
      if (!response.ok) {
        throw new Error('something went wrong');
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

    } catch (e) {
      setError(e.message);
    }
    setIsLoading(false);
  },[]);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHandler =async (movie) => {
    console.log('movie is added');
    try {
      const response = await fetch('https://react-http-f9e2e-default-rtdb.firebaseio.com/movies.json', {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('something went wrong');
      }
      const data = await response.json();
      console.log(data);
      
    } catch (e) {
      setError(e.message);
    }


  }
   
  let content = <p>Movies not found</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>Something went wrong</p>;
  }
  if (isLoading) {
     content=<p>Loading...</p>;
  }
 
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler}/>
        </section>
      <section>
      <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
