import { NewGameDTO } from "../types/dto";
import { randomUUID } from "crypto";
import { Game } from "../types/domain";

let storage: Game[] = [];

export function createGame(gameData: NewGameDTO): Promise<Game> {
  const game: Game = { name: gameData.name, id: randomUUID(), players: [] };
  storage = storage.concat(game);
  return Promise.resolve(game);
}
