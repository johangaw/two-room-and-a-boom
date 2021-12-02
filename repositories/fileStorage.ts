import { randomUUID } from "crypto";
import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { cwd } from "process";
import { Game, IStorage, Player } from "../types/domain";

export class FileStorage implements IStorage {
  readonly path = join(cwd(), "db.json");

  private load(): Promise<Game[]> {
    return readFile(this.path)
      .then((data) => JSON.parse(String(data)))
      .catch((err) => {
        console.warn(err);
        return [];
      });
  }

  private store(games: Game[]): Promise<void> {
    return writeFile(this.path, JSON.stringify(games));
  }

  async getGame(gameId: string): Promise<Game | null> {
    const games = await this.load();
    return games.find((g) => g.id === gameId) ?? null;
  }

  async createGame(gameData: Omit<Game, "id">): Promise<Game> {
    const games = await this.load();
    const game = { ...gameData, id: randomUUID() };
    await this.store(games.concat(game));
    return game;
  }

  async addPlayerToGame(
    newPlayer: Omit<Player, "id">,
    gameId: string
  ): Promise<Player> {
    const player: Player = { ...newPlayer, id: randomUUID() };
    const games = await this.load();
    const newGames = games.map((g) =>
      g.id === gameId ? { ...g, players: g.players.concat(player) } : g
    );
    const game = newGames.find((g) => g.id === gameId);
    if (!game) return Promise.reject(`Unable to find game with id: ${gameId}`);

    await this.store(newGames);
    return Promise.resolve(player);
  }
}
