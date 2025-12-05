interface CinemaProps {
  name: string;
  movies: Movie[];
}

interface Movie {
  title: string;
  director: string;
}

export const Cinema = (props: CinemaProps) => {
  return (
    <div>
      <h2>{props.name}</h2>

      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Director</th>
          </tr>
        </thead>

        <tbody>
          {props.movies.map((movie, index) => (
            <tr key={index}>
              <td>{movie.title}</td>
              <td>{movie.director}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
