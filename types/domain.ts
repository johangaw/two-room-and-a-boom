export interface Game {
  readonly name: string;
  readonly id: string;
  readonly players: Player[];
}

export interface Player {
  readonly id: string;
  readonly role?: Role;
}

const enum Role {}
