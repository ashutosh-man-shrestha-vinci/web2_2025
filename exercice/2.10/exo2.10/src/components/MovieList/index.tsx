import type { Movie } from "../../type";

export interface MoviesProps {
  title: string;
  movies: Movie[];
}

const defaultMovies: Movie[] = [
    { id: 1, title: "Inception", director: "Christopher Nolan", duration: 148 },
    { id: 2, title: "The Matrix", director: "The Wachowskis", duration: 136 },
    { id: 3, title: "Interstellar", director: "Christopher Nolan", duration: 169 },
];

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
  return (
    <><MovieListf title="My Movie List" movies={defaultMovies} /></>   
  )
}

export default MovieList;

