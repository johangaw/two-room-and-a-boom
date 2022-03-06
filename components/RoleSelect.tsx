import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Stack from "@mui/material/Stack";
import { FC, useMemo } from "react";
import { Role, Team } from "../types/domain";
import { useTeamColor } from "./useTeamColor";
import InfoIcon from "@mui/icons-material/Info";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import { Typography } from "@mui/material";
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
  const groupPresident = pairByEquivalentRoles(
    availableRoles.filter((r) => r.tags?.includes("group-president"))
  );

  return (
    <>
      <List sx={{ width: "100%" }} disablePadding>
        <ListSubheader>Group President</ListSubheader>
        {groupPresident.map(([r1, r2]) => (
          <ListItem
            key={`${r1.id}-${r2.id}`}
            secondaryAction={
              <Stack direction={"row"}>
                <Checkbox color="primary" />
                <Checkbox color="error" />
              </Stack>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              // onClick={handleToggle(value)}
              dense
            >
              <ListItemText
                primary={
                  <>
                    <Typography color="primary">{r1.name}</Typography>
                    <Typography color="error">{r2.name}</Typography>
                  </>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
};
