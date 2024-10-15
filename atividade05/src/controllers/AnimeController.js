import AnimeService from "../services/AnimeService.js";

class AnimeController {
  getAll(req, res) {
    const animes = AnimeService.getAllAnimes();
    res.status(200).json(animes);
  }

  getById(req, res) {
    try {
      const anime = AnimeService.getAnimeById(req.params.id);
      res.status(200).json(anime);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  create(req, res) {
    try {
      const newAnime = AnimeService.createAnime(req.body);
      res.status(201).json(newAnime);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  update(req, res) {
    try {
      const updatedAnime = AnimeService.updateAnime(req.params.id, req.body);
      res.status(200).json(updatedAnime);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  delete(req, res) {
    try {
      AnimeService.deleteAnime(req.params.id);
      res.status(204).json({ message: "Anime Deleted!" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }
}

export default new AnimeController();
