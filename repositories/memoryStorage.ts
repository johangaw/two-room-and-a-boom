import { randomUUID } from "crypto";
import { Game, Player } from "../types/domain";

let storage: Game[] = [];

export function getGame(gameId: string): Promise<Game | null> {
  return Promise.resolve(storage.find((g) => g.id === gameId) ?? null);
}

export function createGame(gameData: Omit<Game, "id">): Promise<Game> {
  const game: Game = { ...gameData, id: randomUUID() };
  storage = storage.concat(game);
  return Promise.resolve(game);
}

export function addPlayerToGame(
  newPlayer: Omit<Player, "id">,
  gameId: string
): Promise<Player> {
  const player: Player = { ...newPlayer, id: randomUUID() };
  storage = storage.map((g) =>
    g.id === gameId ? { ...g, players: g.players.concat(player) } : g
  );
  const game = storage.find((g) => g.id === gameId);
  if (!game) return Promise.reject(`Unable to find game with id: ${gameId}`);

  return Promise.resolve(player);
}
