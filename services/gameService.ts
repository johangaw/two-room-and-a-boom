import { Game, IStorage, Player, Role } from "../types/domain";
import { NewGameDTO } from "../types/dto";
import {
  President,
  BlueCoy,
  BlueSpy,
  Bomber,
  Doctor,
  Engineer,
  Gambler,
  Mi6,
  RedCoy,
  RedSpy,
} from "../types/roles";
import { FileStorage } from "../repositories/fileStorage";

const storage: IStorage = new FileStorage();

export async function getGame(gameId: string): Promise<Game> {
  const game = await storage.getGame(gameId);
  if (!game) throw new Error(`Game with id ${gameId} does not exists`);

  return game;
}

export async function startGame(gameId: string): Promise<Game> {
  const game = await getGame(gameId);

  if (game.players.length === 0) throw new Error("Not enough players.");

  const assignedRoles = assignPlayerRoles(game);
  if (assignedRoles.length < game.players.length)
    throw new Error("Not enough roles for all player.");

  const newGame = await storage.updateGame({
    ...game,
    assignedRoles,
    started: true,
  });
  return newGame;
}

export async function getPlayerRole(
  gameId: string,
  playerId: string
): Promise<Role> {
  const game = await getGame(gameId);
  const player = game.players.find((p) => p.id === playerId);
  if (!player)
    throw new Error(
      `Player with id ${playerId} does not exists in game with id ${gameId}`
    );

  const role = game.assignedRoles.find(
    ([playerId, _]) => playerId === playerId
  )?.[1];
  if (!role)
    throw new Error(
      `Player with id ${playerId} has not been assigned any role yet`
    );

  return role;
}

export async function joinGame(
  newPlayer: Player,
  gameId: string
): Promise<Game> {
  const game = await getGame(gameId);

  const playerExists = !!game.players.find((p) => p.name === newPlayer.name);
  if (playerExists)
    throw new Error(
      `Player with name "${newPlayer.name}" already exists in this game`
    );

  await storage.addPlayerToGame({ ...newPlayer }, gameId);
  return getGame(gameId);
}

export async function createGame(newGameData: NewGameDTO): Promise<Game> {
  const game = await storage.createGame({
    ...newGameData,
    players: [],
    assignedRoles: [],
    started: false,
    roles: [
      President,
      BlueCoy,
      BlueSpy,
      Bomber,
      Doctor,
      Engineer,
      Gambler,
      Mi6,
      RedCoy,
      RedSpy,
    ],
  });
  return game;
}

function assignPlayerRoles(game: Game): Game["assignedRoles"] {
  const shuffledRoles = shuffle(game.roles);
  return game.players
    .map<[string, Role]>((p, i) => [p.id, shuffledRoles[i]])
    .filter(([_, role]) => !!role);
}

function shuffle<T>(list: T[]): T[] {
  return list
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
