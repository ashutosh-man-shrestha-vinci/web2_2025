// Create the Films service based on the drinks.ts service
import path from "node:path";
import { Film, NewFilm } from "../types";
import { parse, serialize } from "../utils/json";
const jsonDbPath = path.join(__dirname, "/../data/Films.json");

const defaultFilms: Film[] = [
  {
    id: 1,
    title: "4 fromages",
    content: "Gruyère, Sérac, Appenzel, Gorgonzola, Tomates",
  },
  {
    id: 2,
    title: "Vegan",
    content: "Tomates, Courgettes, Oignons, Aubergines, Poivrons",
  },
  {
    id: 3,
    title: "Vegetarian",
    content: "Mozarella, Tomates, Oignons, Poivrons, Champignons, Olives",
  },
  {
    id: 4,
    title: "Alpage",
    content: "Gruyère, Mozarella, Lardons, Tomates",
  },
  {
    id: 5,
    title: "Diable",
    content: "Tomates, Mozarella, Chorizo piquant, Jalapenos",
  },
];

function readAllfilms(order: string | undefined): Film[] {
  const orderByTitle = order && order.includes("title") ? order : undefined;

  let orderedMenu: Film[] = [];
  const Films = parse(jsonDbPath, defaultFilms);
  if (orderByTitle)
    orderedMenu = [...Films].sort((a, b) => a.title.localeCompare(b.title));

  if (orderByTitle === "-title") orderedMenu = orderedMenu.reverse();

  return orderedMenu.length === 0 ? Films : orderedMenu;
}

function readFilmById(id: number): Film | undefined {
  const Films = parse(jsonDbPath, defaultFilms);
  return Films.find((Film) => Film.id === id);
}

function createFilm(newFilm: NewFilm): Film {
  const Films = parse(jsonDbPath, defaultFilms);
  const lastId = Films[Films.length - 1].id;
  const Film: Film = { id: lastId + 1, ...newFilm };
  const updatedFilms = [...Films, Film];
  serialize(jsonDbPath, updatedFilms);
  return Film;
}

function deleteFilm(id: number): Film | undefined {
  const Films = parse(jsonDbPath, defaultFilms);
  const index = Films.findIndex((Film) => Film.id === id);
  if (index === -1) return undefined;

  const deletedElements = Films.splice(index, 1);
  serialize(jsonDbPath, Films);
  return deletedElements[0];
}

function updateFilm(
  id: number,
  updatedFilm: Partial<NewFilm>
): Film | undefined {
  const Films = parse(jsonDbPath, defaultFilms);
  const Film = Films.find((Film) => Film.id === id);
  if (!Film) return undefined;

  if (updatedFilm.title !== undefined) {
    Film.title = updatedFilm.title;
  }
  if (updatedFilm.content !== undefined) {
    Film.content = updatedFilm.content;
  }

  serialize(jsonDbPath, Films);
  return Film;
}

export { readAllfilms, readFilmById, createFilm, deleteFilm, updateFilm };
