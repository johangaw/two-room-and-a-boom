import { useEffect, useState } from "react";
import { Player } from "../types/domain";

export const usePlayerStorage = () => {
  const KEY = "towRoomAndABoom.player";

  const [player, setPlayer] = useState<Player | null>(null);

  useEffect(() => {
    setPlayer(JSON.parse(localStorage.getItem(KEY) ?? "null"));
  }, []);

  return {
    rememberPlayer: (player: Player) => {
      setPlayer(player);
      localStorage.setItem(KEY, JSON.stringify(player));
    },
    player,
  };
};
