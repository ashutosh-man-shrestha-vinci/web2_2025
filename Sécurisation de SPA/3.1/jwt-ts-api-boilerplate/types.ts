import { Request } from "express";

interface Film {
  id: number;
  title: string;
  content: string;
}

interface FilmToUpdate {
  title?: string;
  content?: string;
}

type NewFilm = Omit<Film, "id">;

interface Drink {
  id: number;
  title: string;
  image: string;
  volume: number;
  price: number;
}

type NewDrink = Omit<Drink, "id">;

interface AuthenticatedUser {
  username: string;
  token: string;
}

interface User {
  id: number;
  username: string;
  password: string;
}

type PotentialUser = Omit<User, "id">;

interface AuthenticatedRequest extends Request {
  user?: User;
}

interface JwtPayload {
  username: string;
  exp: number; // Expiration time (in seconds since the epoch)
  iat: number; // Issued at time (in seconds since the epoch)
}

export type {
  Film,
  NewFilm,
  FilmToUpdate,
  Drink,
  NewDrink,
  AuthenticatedUser,
  User,
  PotentialUser,
  AuthenticatedRequest,
  JwtPayload,
};
