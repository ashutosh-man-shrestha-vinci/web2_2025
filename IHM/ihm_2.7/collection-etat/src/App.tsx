import { useState } from "react";

import { Movies } from "./Components/Movies.tsx/index.tsx";
import AddMovie from "./Components/Movies.tsx/AddMovie";
import type { Movie, NewMovie } from "./type";
import { Box } from "@mui/material";

function App() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const addMovie = (newMovie: NewMovie) => {
    const movieAdded = { ...newMovie, id: movies.length + 1 };
    setMovies([...movies, movieAdded]);
  };

  return (
   <Box sx={{ p: 4 }}>
      <Movies title="My favorite movies" movies={movies} />
      <AddMovie addMovie={addMovie} />
      </Box>
  );
}

export default App;
