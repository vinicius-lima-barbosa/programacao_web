import AnimeRepository from "../repositories/AnimeRepository.js";
import Anime from "../models/AnimeModel.js";

class AnimeService {
  getAllAnimes() {
    return AnimeRepository.getAll();
  }

  getAnimeById(id) {
    const anime = AnimeRepository.getByID(id);
    if (!anime) {
      throw new Error("Anime not found!");
    }
    return anime;
  }

  createAnime(data) {
    const { name, genre, studio } = data;
    if (!name || !genre || !studio) {
      throw new Error("All fields are required!");
    }
    const newAnime = new Anime(name, genre, studio);
    return AnimeRepository.create(newAnime);
  }

  updateAnime(id, data) {
    const { name, genre, studio } = data;
    if (!name || !genre || !studio) {
      throw new Error("All fields are required");
    }
    const updatedAnime = { name, genre, studio };
    const result = AnimeRepository.update(id, updatedAnime);
    if (!result) {
      throw new Error("Anime not found");
    }
    return result;
  }

  deleteAnime(id) {
    const result = AnimeRepository.delete(id);
    if (!result) {
      throw new Error("Anime not found");
    }
  }
}

export default new AnimeService();
