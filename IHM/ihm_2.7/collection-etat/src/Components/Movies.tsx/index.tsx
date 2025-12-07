import type { Movie } from "../../type";

export interface MoviesProps {
  title: string;
  movies: Movie[];
}

export const Movies = ({ title, movies }: MoviesProps) => {
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
