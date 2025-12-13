import { Router } from "express";

import { NewFilm, FilmToUpdate } from "../types";
import {
  createFilm,
  deleteFilm,
  readAllfilms,
  readFilmById,
  updateFilm,
} from "../services/films";
import { authorize } from "../utils/auths";

const router = Router();

router.get("/error", (_req, _res, _next) => {
  throw new Error("This is an error");
  // equivalent of next(new Error("This is an error"));
});

/* Read all the films from the menu
   GET /films?order=title : ascending order by title
   GET /films?order=-title : descending order by title
*/
router.get("/", (req, res) => {
  if (req.query.order && typeof req.query.order !== "string") {
    return res.sendStatus(400);
  }

  const films = readAllfilms(req.query.order);
  return res.json(films);
});

// Read the Film identified by an id in the menu
router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const Film = readFilmById(id);
  if (!Film) return res.sendStatus(404);
  return res.json(Film);
});

// Create a Film to be added to the menu.
router.post("/", authorize, (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    !("title" in body) ||
    !("content" in body) ||
    typeof body.title !== "string" ||
    typeof body.content !== "string" ||
    !body.title.trim() ||
    !body.content.trim()
  ) {
    return res.sendStatus(400);
  }

  const { title, content } = body as NewFilm;

  const addedFilm = createFilm({ title, content });

  return res.json(addedFilm);
});

// Delete a Film from the menu based on its id
router.delete("/:id", authorize, (req, res) => {
  const id = Number(req.params.id);
  const deletedFilm = deleteFilm(id);
  if (!deletedFilm) return res.sendStatus(404);

  return res.json(deletedFilm);
});

// Update a Film based on its id and new values for its parameters
router.patch("/:id", authorize, (req, res) => {
  const body: unknown = req.body;
  if (
    !body ||
    typeof body !== "object" ||
    ("title" in body &&
      (typeof body.title !== "string" || !body.title.trim())) ||
    ("content" in body &&
      (typeof body.content !== "string" || !body.content.trim()))
  ) {
    return res.sendStatus(400);
  }

  const FilmToUpdate: FilmToUpdate = body;

  const id = Number(req.params.id);
  const updatedFilm = updateFilm(id, FilmToUpdate);
  if (!updatedFilm) return res.sendStatus(404);

  return res.json(updatedFilm);
});

export default router;
