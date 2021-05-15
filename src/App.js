import React, { useState, useEffect } from 'react'
import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=60bf2ea3d5d7a41e1fd351d7e1d724be&page=1";

const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?&api_key=60bf2ea3d5d7a41e1fd351d7e1d724be&query=';

function App() {
 
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(FEATURED_API);
  } , [])

  const getMovies = (API) =>{
    fetch(API).then(res => res.json())
      .then(data => {
        // console.log(data);
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
        getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    }
    
    

  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return(
    <>
    <header>
        <form onSubmit={handleOnSubmit}>
        <input 
          className="search" 
          type="search" 
          placeholder="Search movies.." 
          value={searchTerm}
          onChange={handleOnChange}
        />
        </form>
      </header>
    <div className='movie-container'>
      {movies.length >0 && movies.map((movie) => (
        <Movie key={movie.id} {...movie}/>
      ))}
    </div>
    </>
  )
}

export default App;