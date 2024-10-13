import express from "express";
import { randomUUID } from "crypto";

const app = express();
app.use(express.json());

const animes = [];

app.get("/animes", (req, res) => {
  res.status(200).json(animes);
});

app.get("/animes/:id", (req, res) => {
  const { id } = req.params;
  const anime = animes.find((anime) => anime.id === parseInt(id));

  if (!anime) {
    return res.status(404).json({ message: "Anime not found!" });
  }

  res.status(200).json(anime);
});

app.post("/animes", (req, res) => {
  const { name, genre, studio } = req.body;

  if (!name || !genre || !studio) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  const newAnime = {
    id: randomUUID(),
    name,
    genre,
    studio,
  };

  animes.push(newAnime);
  res.status(201).json(newAnime);
});

app.put("/animes/:id", (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;

  const anime = animes.find((anime) => anime.id === id);

  if (!anime) {
    return res.status(404).json({ message: "Anime not found!" });
  }

  if (!name || !genre || !studio) {
    return res.status(400).json({ message: "All fields are required!" });
  }

  anime.name = name;
  anime.genre = genre;
  anime.studio = studio;
  res.status(200).json(anime);
});

app.delete("/animes/:id", (req, res) => {
  const { id } = req.params;
  const anime = animes.find((anime) => anime.id === id);

  if (!anime) {
    return res.status(404).json({ message: "Anime not found!" });
  }

  animes.splice(anime, 1);
  res.status(204).json({ message: "Anime Deleted!" });
});

export default app;
