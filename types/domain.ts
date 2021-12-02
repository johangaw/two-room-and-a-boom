export interface Game {
  readonly name: string;
  readonly id: string;
  readonly players: Player[];
  readonly roles: Role[];
}

export interface Player {
  readonly id: string;
  readonly name: string;
  readonly role: Role;
}

export type Team = "Red" | "Blue" | "Gray";

export interface Role {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly notes?: string[];
  readonly team: Team;
}

export interface IStorage {
  getGame(gameId: string): Promise<Game | null>;
  createGame(gameData: Omit<Game, "id">): Promise<Game>;
  addPlayerToGame(
    newPlayer: Omit<Player, "id">,
    gameId: string
  ): Promise<Player>;
}
