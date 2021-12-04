import { Game, Role, Player } from "../types/domain";

export const getGame = (gameId: string) => {
  return fetch(`/api/games/${gameId}`, {
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    if (res.ok) {
      return res.json() as Promise<Game>;
    } else {
      throw await res.text();
    }
  });
};

export const getPlayerRole = (gameId: string, playerId: string) => {
  return fetch(`pages/api/games/${gameId}/players/${playerId}/role`, {
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    if (res.ok) {
      return (await res.json()) as Role;
    } else {
      throw await res.text();
    }
  });
};

export const joinGame = (gameId: string, player: Player) => {
  return fetch(`/api/games/${gameId}/players`, {
    method: "POST",
    body: JSON.stringify(player),
    headers: { "Content-Type": "application/json" },
  }).then(async (res) => {
    if (res.ok) {
      return (await res.json()) as Game;
    } else {
      throw await res.text();
    }
  });
};

export const startGame = (gameId: string) => {
  return fetch(`/api/games/${gameId}/start`, {
    method: "POST",
  }).then(async (res) => {
    if (res.ok) {
      return (await res.json()) as Game;
    } else {
      throw await res.text();
    }
  });
};
