import { FC, useState } from "react";
import { Player } from "../types/domain";

interface SelectPlayerProps {
  players: Player[];
  playerSelected: (playerId: string) => void;
}

export const SelectPlayer: FC<SelectPlayerProps> = ({
  players,
  playerSelected,
}) => {
  const [playerId, setPlayerId] = useState("");
  return (
    <div>
      <select value={playerId} onChange={(ev) => setPlayerId(ev.target.value)}>
        {players.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
      <button onClick={() => playerSelected(playerId)}>Give Card</button>
    </div>
  );
};
