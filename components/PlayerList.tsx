import { Typography } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { FC } from "react";
import { Player } from "../types/domain";

interface PlayerListProps {
  players: Player[];
}

export const PlayerList: FC<PlayerListProps> = ({ players }) => {
  return (
    <Stack>
      <Typography>Player count: {players.length}</Typography>
      <Stack direction="row">
        {players.map((p) => (
          <Chip key={p.id} label={p.name} sx={{ mr: 1, mb: 1 }} />
        ))}
      </Stack>
    </Stack>
  );
};
