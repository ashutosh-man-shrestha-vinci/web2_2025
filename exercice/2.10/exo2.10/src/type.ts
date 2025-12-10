 interface Movie {
    id: number;
    title: string;
    director: string;
    duration: number; // duration in minutes
}


type NewMovie = Omit<Movie, "id">;

 interface MovieContext {
    movies: Movie[];
    addMovie: (movie: NewMovie) => void;
};

export type {MovieContext, Movie , NewMovie}; 