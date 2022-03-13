import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";
import { FC, useMemo, useState } from "react";
import { Role, RoleGroup, Team } from "../types/domain";
import { useTeamColor } from "./useTeamColor";
import InfoIcon from "@mui/icons-material/Info";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { Button, DialogContent, Typography } from "@mui/material";
import { pairByEquivalentRoles } from "../roles/roles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface RoleSelectProps {
  availableRoles: RoleGroup[];
  roles: Role[];
  onChange: (roles: Role[]) => void;
}
export const RoleSelect: FC<RoleSelectProps> = ({
  availableRoles,
  roles,
  onChange,
}) => {
  const [infoRole, setInfoRole] = useState<Role | null>(null);

  return (
    <>
      {availableRoles.map((group, i) => (
        <Accordion key={i} defaultExpanded={i === 0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{group.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List sx={{ width: "100%" }} disablePadding>
              {group.roles.map((role) => {
                const selected = roles.some((r) => r.id === role.id);
                return (
                  <RoleItem
                    selected={selected}
                    key={role.id}
                    role={role}
                    onInfoClick={() => setInfoRole(role)}
                    onSelect={() =>
                      onChange(
                        selected
                          ? roles.filter((r) => r.id !== role.id)
                          : roles.concat(role)
                      )
                    }
                  />
                );
              })}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}

      <RoleDetailsDialog onClose={() => setInfoRole(null)} role={infoRole} />
    </>
  );
};

const getColor = (team: Team) =>
  team === "Red" ? "error" : team === "Blue" ? "primary" : "success";

const RoleItem: FC<{
  role: Role;
  selected: boolean;
  onSelect: () => void;
  onInfoClick: () => void;
}> = ({ role, selected, onSelect, onInfoClick }) => {
  const color = getColor(role.team);
  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" onClick={onInfoClick}>
          <InfoIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton onClick={onSelect}>
        <ListItemIcon>
          <Checkbox
            onChange={(ev) => ev.preventDefault()}
            color={color}
            checked={selected}
          />
        </ListItemIcon>
        <ListItemText
          primary={<Typography color={color}>{role.name}</Typography>}
        />
      </ListItemButton>
    </ListItem>
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
