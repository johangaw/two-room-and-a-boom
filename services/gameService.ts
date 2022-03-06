import { Game, IStorage, Player, Role } from "../types/domain";
import { GameUpdateDTO, NewGameDTO, TransferPlayerRoleDTO } from "../types/dto";
import { FileStorage } from "../repositories/fileStorage";
import { Doctor, President } from "../roles/blueRoles";
import { Bomber, Engineer } from "../roles/readRoles";
import { Gambler, Mi6 } from "../roles/grayRoles";
import { ALL_ROLES, isRole } from "../roles/roles";

const storage: IStorage = new FileStorage();

export async function getGames(): Promise<Game[]> {
  return storage.getGames();
}

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

export async function updateGame(
  gameId: string,
  data: GameUpdateDTO
): Promise<Game> {
  const game = await getGame(gameId);
  return storage.updateGame({
    ...game,
    name: data.name ?? game.name,
    roles:
      data?.roleIds
        ?.map((id) => ALL_ROLES.find((r) => r.id === id))
        ?.filter(isRole) ?? game.roles,
  });
}

export async function getPlayerRoles(
  gameId: string,
  playerId: string
): Promise<Role[]> {
  const game = await getGame(gameId);
  const player = game.players.find((p) => p.id === playerId);
  if (!player)
    throw new Error(
      `Player with id ${playerId} does not exists in game with id ${gameId}`
    );

  return game.assignedRoles
    .filter(({ playerId: id }) => id === playerId)
    .map(({ role }) => role);
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
    roles: [],
  });
  return game;
}

export async function transferPlayerRole(
  gameId: string,
  { fromPlayerId, roleId, toPlayerId }: TransferPlayerRoleDTO
): Promise<Role[]> {
  const game = await getGame(gameId);
  const playerIds = game.players.map((p) => p.id);

  if (!playerIds.includes(fromPlayerId) || !playerIds.includes(toPlayerId))
    throw new Error(
      `both players (${fromPlayerId}, ${toPlayerId}) must be part of game ${gameId}`
    );

  const srcAssignment = game.assignedRoles.find(
    ({ playerId, role }) => playerId === fromPlayerId && role.id === roleId
  );

  if (!srcAssignment)
    throw new Error(`${fromPlayerId} does not have role ${roleId}`);

  const assignedRoles = game.assignedRoles
    .filter((a) => a != srcAssignment)
    .concat({ playerId: toPlayerId, role: srcAssignment.role });

  await storage.updateGame({
    ...game,
    assignedRoles,
  });

  return assignedRoles.map(({ role }) => role);
}

function assignPlayerRoles(game: Game): Game["assignedRoles"] {
  const shuffledRoles = shuffle(game.roles);
  return game.players
    .map((p, i) => ({ playerId: p.id, role: shuffledRoles[i] }))
    .filter(({ role }) => !!role);
}

function shuffle<T>(list: T[]): T[] {
  return list
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}
