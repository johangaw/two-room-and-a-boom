import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";
import { FC, useMemo, useState } from "react";
import { Role, Team } from "../types/domain";
import { useTeamColor } from "./useTeamColor";
import InfoIcon from "@mui/icons-material/Info";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { Button, DialogContent, Typography } from "@mui/material";
import { pairByEquivalentRoles } from "../roles/roles";

interface RoleSelectProps {
  availableRoles: Role[];
  roles: Role[];
  onChange: (roles: Role[]) => void;
}
export const RoleSelect: FC<RoleSelectProps> = ({
  availableRoles,
  roles,
  onChange,
}) => {
  const [infoRole, setInfoRole] = useState<Role | null>(null);
  const getColor = (team: Team) =>
    team === "Red" ? "error" : team === "Blue" ? "primary" : "success";

  return (
    <>
      <List sx={{ width: "100%" }} disablePadding>
        {availableRoles.map((r) => {
          const selected = roles.some((role) => role.id === r.id);
          return (
            <ListItem
              key={`${r.id}`}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="comments"
                  onClick={() => setInfoRole(r)}
                >
                  <InfoIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                onClick={() =>
                  onChange(
                    selected
                      ? roles.filter((role) => role.id !== r.id)
                      : roles.concat(r)
                  )
                }
              >
                <ListItemIcon>
                  <Checkbox
                    onChange={(ev) => ev.preventDefault()}
                    color={getColor(r.team)}
                    checked={selected}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography color={getColor(r.team)}>{r.name}</Typography>
                  }
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <RoleDetailsDialog onClose={() => setInfoRole(null)} role={infoRole} />
    </>
  );
};

function RoleDetailsDialog({
  role,
  onClose,
}: {
  role: Role | null;
  onClose: () => void;
}) {
  return (
    <Dialog onClose={onClose} open={!!role}>
      <DialogTitle>{role?.name}</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          {role?.notes?.map((r, i) => (
            <DialogContentText key={i}>{r}</DialogContentText>
          ))}
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
