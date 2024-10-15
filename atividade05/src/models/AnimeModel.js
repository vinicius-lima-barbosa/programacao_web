import { randomUUID } from "crypto";

class Anime {
  constructor(name, genre, studio) {
    this.id = randomUUID();
    this.name = name;
    this.genre = genre;
    this.studio = studio;
  }
}

export default Anime;
