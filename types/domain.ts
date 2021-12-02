export interface Game {
  readonly name: string;
  readonly id: string;
  readonly players: Player[];
}

export interface Player {
  readonly id: string;
  readonly role?: Role;
}

export type Team = "Red" | "Blue" | "Gray";

export interface Role {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly note?: string;
  readonly team: Team;
}
