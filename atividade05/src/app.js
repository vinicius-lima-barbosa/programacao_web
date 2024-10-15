import express from "express";
import AnimeController from "./controllers/AnimeController.js";

const app = express();
app.use(express.json());

app.get("/animes", (req, res) => AnimeController.getAll(req, res));
app.get("/animes/:id", (req, res) => AnimeController.getById(req, res));
app.post("/animes", (req, res) => AnimeController.create(req, res));
app.put("/animes/:id", (req, res) => AnimeController.update(req, res));
app.delete("/animes/:id", (req, res) => AnimeController.delete(req, res));

export default app;
