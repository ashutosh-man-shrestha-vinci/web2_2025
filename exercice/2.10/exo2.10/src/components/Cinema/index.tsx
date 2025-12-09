const ugcMovies = [
  { id: 1, title: "Avatar", director: "James Cameron", duration: 162 },
  { id: 2, title: "Joker", director: "Todd Phillips", duration: 122 },
  { id: 3, title: "Dune", director: "Denis Villeneuve", duration: 155 },
];

export const Cinema = () => {
  return (
    <div>
      <h3>UGC Movies</h3>
      <ul>
        {ugcMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title} - {movie.director} - {movie.duration} min
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cinema;