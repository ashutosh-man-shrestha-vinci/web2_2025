
import { Outlet } from 'react-router-dom'
import { NavBar } from '../NavBar'
import './App.css'
import { Header } from '../Header'
import { Footer } from '../Footer'
import type { Movie, MovieContext, NewMovie } from '../../type'
import { useState } from 'react'


function App() {

 

  const nextMovieId = (movies: { id: number }[]) => {
    return movies.length > 0
      ? Math.max(...movies.map((movie) => movie.id)) + 1
      : 1;
  }
  
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (newMovie: NewMovie) => {
    const movieAdded = { ...newMovie, id: nextMovieId(movies) };
    setMovies([...movies, movieAdded]);
  };

const movieContext: MovieContext = {
    movies,
    addMovie,

}

  return (
     
       <>
       <Header />
       <NavBar /><main>
      <Outlet context={movieContext}/> {/* <-- Ici les pages enfants apparaîtront */}
       <Footer />
    </main></>
  )
}

export default App
