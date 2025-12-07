import { useState } from "react";
import "./App.css";

import { Movies } from "./Components/Movies.tsx/index.tsx";
import AddMovie from "./Components/Movies.tsx/AddMovie";
import type { Movie, NewMovie } from "./type";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (newMovie: NewMovie) => {
    const movieAdded = { ...newMovie, id: movies.length + 1 };
    setMovies([...movies, movieAdded]);
  };

  return (
    <div>
      <Movies title="My favorite movies" movies={movies} />
      <AddMovie addMovie={addMovie} />
    </div>
  );
}

export default App;
