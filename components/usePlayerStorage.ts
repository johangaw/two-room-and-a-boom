import { useEffect, useState } from "react";
import { Player } from "../types/domain";

export const usePlayerStorage = () => {
  const KEY = "towRoomAndABoom.player";

  const [player, setPlayer] = useState<Player | null>(null);

  const rememberPlayer = (player: Player) => {
    setPlayer(player);
    localStorage.setItem(KEY, JSON.stringify(player));
  };

  useEffect(() => {
    let player: Player | null = JSON.parse(localStorage.getItem(KEY) ?? "null");
    if (!player) {
      player = {
        id: `${Math.random()}-${Math.random()}-${Math.random()}`,
        name: "",
      };
    }
    rememberPlayer(player);
  }, []);

  return {
    rememberPlayer,
    player,
  };
};
