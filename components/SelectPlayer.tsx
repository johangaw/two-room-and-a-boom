import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import { FC } from "react";
import { Player } from "../types/domain";

interface SelectPlayerProps {
  player: Player | null;
  players: Player[];
  playerSelected: (player: Player) => void;
}

export const SelectPlayer: FC<SelectPlayerProps> = ({
  player,
  players,
  playerSelected,
}) => {
  return (
    <Stack>
      <FormControl>
        <FormLabel id="select-player-group-label">Select Player</FormLabel>
        <RadioGroup
          aria-labelledby="select-player-group-label"
          value={player?.id}
          onChange={(ev) =>
            playerSelected(players.find((p) => p.id === ev.target.value)!)
          }
        >
          {players.map((p) => (
            <FormControlLabel
              key={p.id}
              value={p.id}
              control={<Radio />}
              label={p.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};
