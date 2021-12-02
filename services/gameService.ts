import { Game, Player, Role } from "../types/domain";
import { NewGameDTO, NewPlayerDTO } from "../types/dto";
import * as memoryStorage from "../repositories/memoryStorage";
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

export async function joinGame(
  newPlayer: NewPlayerDTO,
  gameId: string
): Promise<Player> {
  const game = await memoryStorage.getGame(gameId);
  if (!game) throw new Error(`Game with id ${gameId} does not exists`);

  const playerExists = !!game.players.find((p) => p.name === newPlayer.name);
  if (playerExists)
    throw new Error(
      `Player with name "${newPlayer.name}" already exists in this game`
    );

  const role = selectNewPlayerRole(game);
  if (!role) throw new Error(`No roles available`);

  return memoryStorage.addPlayerToGame({ ...newPlayer, role }, gameId);
}

export async function createGame(newGameData: NewGameDTO): Promise<Game> {
  const game = await memoryStorage.createGame({
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
