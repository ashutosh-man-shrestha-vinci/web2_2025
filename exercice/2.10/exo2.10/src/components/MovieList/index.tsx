import { useState, type FormEvent } from "react";
import { useOutletContext } from "react-router-dom";
import type { Movie, MovieContext, NewMovie } from "../../type";

export interface MoviesProps {
  title: string;
  movies: Movie[];
}

// Composant d’affichage simple
export const MovieListf = ({ title, movies }: MoviesProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.director} - {movie.duration} min
          </li>
        ))}
      </ul>
    </div>
  );
};

function MovieList() {
  // 1) récupérer movies et addMovie depuis le contexte
  const { movies, addMovie } = useOutletContext<MovieContext>();

  // 2) state local pour le formulaire
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [duration, setDuration] = useState<number | "">("");
  const [titleError, setTitleError] = useState("");


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title || !director || duration === "") return;

    if (title.length > 4) {
    setTitleError("Le titre doit faire maximum 4 caractères.");
    return;
  }
    setTitleError(""); // pas d’erreur

    const newMovie: NewMovie = {
      title,
      director,
      duration: Number(duration),
    };

    addMovie(newMovie); // <-- appel de la fonction du contexte

    // reset
    setTitle("");
    setDirector("");
    setDuration("");
  };

  return (
    <>
      <MovieListf title="My Movie List" movies={movies} />

      <div>
        <h3>Ajouter un film</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="movie">Movie</label>
          <input
            value={title}
            type="text"
            id="movie"
            name="movie"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
   {titleError && <p className="error">{titleError}</p>}
          <label htmlFor="director">Director</label>
          <input
            value={director}
            type="text"
            id="director"
            name="director"
            onChange={(e) => setDirector(e.target.value)}
            required
          />

          <label htmlFor="duration">Duration (minutes)</label>
          <input
            value={duration}
            type="number"
            id="duration"
            name="duration"
            onChange={(e) =>
              setDuration(e.target.value === "" ? "" : Number(e.target.value))
            }
            required
          />


          <button type="submit">Ajouter</button>
        </form>
      </div>
    </>
  );
}

export default MovieList;
