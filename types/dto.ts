export interface ErrorDTO {
  readonly message: string;
}

export interface NewGameDTO {
  readonly name: string;
}

export interface GameUpdateDTO {
  name?: string;
  roleIds?: string[];
}

export interface TransferPlayerRoleDTO {
  fromPlayerId: string;
  toPlayerId: string;
  roleId: string;
}
