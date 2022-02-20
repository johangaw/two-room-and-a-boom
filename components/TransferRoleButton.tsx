import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Stack from "@mui/material/Stack";
import { FC, useState } from "react";
import { Player, Role } from "../types/domain";
import { DropDownSelect } from "./DropdownSelect";

export const TransferRoleButton: FC<{
  players: Player[];
  roles: Role[];
  onTransfer: (toPlayer: Player, role: Role) => void;
}> = ({ players, roles, onTransfer }) => {
  const [open, setOpen] = useState(false);
  const [player, setPlayer] = useState<Player | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Transfer role
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open} fullWidth={true}>
        <DialogTitle>Transfer role</DialogTitle>
        <DialogContent>
          <Stack sx={{ pt: 1 }} spacing={2}>
            <DropDownSelect
              values={roles}
              value={role}
              onChange={setRole}
              idPrefix="role"
              label="Role"
            />

            <DropDownSelect
              values={players}
              value={player}
              onChange={setPlayer}
              idPrefix="player"
              label="Player"
            />

            <Button
              variant="contained"
              onClick={() => {
                setOpen(false);
                setPlayer(null);
                setRole(null);
                onTransfer(player!, role!);
              }}
              disabled={!player || !role}
            >
              Transfer role
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};
