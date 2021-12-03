import { Game, IStorage, Player, Role } from "../types/domain";
import { NewGameDTO, NewPlayerDTO } from "../types/dto";
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

export async function joinGame(
  newPlayer: NewPlayerDTO,
  gameId: string
): Promise<Player> {
  const game = await storage.getGame(gameId);
  if (!game) throw new Error(`Game with id ${gameId} does not exists`);

  const playerExists = !!game.players.find((p) => p.name === newPlayer.name);
  if (playerExists)
    throw new Error(
      `Player with name "${newPlayer.name}" already exists in this game`
    );

  const role = selectNewPlayerRole(game);
  if (!role) throw new Error(`No roles available`);

  return storage.addPlayerToGame({ ...newPlayer, role }, gameId);
}

export async function createGame(newGameData: NewGameDTO): Promise<Game> {
  const game = await storage.createGame({
    ...newGameData,
    players: [],
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

function selectNewPlayerRole(game: Game): Role {
  return random(
    game.roles.filter((r) => !game.players.some((p) => p.role === r))
  );
}

function random<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}
