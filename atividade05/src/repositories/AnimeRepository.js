class AnimeRepository {
  constructor() {
    this.animes = [];
  }

  getAll() {
    return this.animes;
  }

  getByID(id) {
    return this.animes.find((animes) => animes.id === id);
  }

  create(anime) {
    this.animes.push(anime);
    return anime;
  }

  update(id, updatedAnime) {
    const index = this.animes.findIndex((anime) => anime.id === id);
    if (!index) {
      this.animes[index] = { id, ...updatedAnime };
      return this.animes[index];
    }

    return null;
  }

  delete(id) {
    const index = this.animes.findIndex((anime) => anime.id === id);
    if (!index) {
      this.animes.splice(index, 1);
      return true;
    }

    return false;
  }
}

export default new AnimeRepository();
