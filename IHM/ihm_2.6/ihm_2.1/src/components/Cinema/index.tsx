import { MovieItem } from "../MovieItem";
interface CinemaProps {
  name: string;
  movies: Movie[];
}

interface Movie {
  title: string;
  director: string;
  description: string;
}

export const Cinema = ({name, movies}: CinemaProps) => {
  return (
    <div>
      <h2>{name}</h2>



        <tbody>
          {movies.map((movie, index) => (
           <MovieItem key={index} title={movie.title} director={movie.director} description={movie.description} />
          ))}
        </tbody>
    </div>
  );
};
