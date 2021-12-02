import { useContext, useEffect, useState } from "react";
import { Game } from "../types/domain";

export const useGameStorage = () => {
  const KEY = "towRoomAndABoom.games";

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    setGames(JSON.parse(localStorage.getItem(KEY) ?? "[]"));
  }, []);

  return {
    rememberJoinedGame: (game: Game) => {
      const newGames = games.concat(game);
      setGames(newGames);
      localStorage.setItem(KEY, JSON.stringify(newGames));
    },
    joinedGames: games,
  };
};
