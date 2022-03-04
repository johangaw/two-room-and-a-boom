export interface Game {
  readonly name: string;
  readonly id: string;
  readonly players: Player[];
  readonly roles: Role[];
  readonly assignedRoles: { playerId: string; role: Role }[];
  readonly started: boolean;
}

export interface Player {
  readonly id: string;
  readonly name: string;
}

export type Team = "Red" | "Blue" | "Gray";

export interface Role {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly notes?: string[];
  readonly team: Team;
  readonly tags?: string[];
}

export interface IStorage {
  getGames(): Promise<Game[]>;
  getGame(gameId: string): Promise<Game | null>;
  createGame(gameData: Omit<Game, "id">): Promise<Game>;
  updateGame(gameData: Game): Promise<Game>;
  addPlayerToGame(player: Player, gameId: string): Promise<Game>;
}
