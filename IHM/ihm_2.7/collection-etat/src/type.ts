interface Movie {
  id: number;
  title: string;
  director: string;
  duration: number;
}

type NewMovie = Omit<Movie, "id">;

export type { Movie, NewMovie };
