import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { FC } from "react";
import { Role } from "../types/domain";
import { useTeams } from "./useTeams";
import { getColor } from "./utils";

interface RoleListProps {
  roles: Role[];
}

export const RoleList: FC<RoleListProps> = ({ roles }) => {
  const { blueRoles, grayRoles, redRoles } = useTeams(roles);
  return (
    <Stack spacing={2}>
      {[blueRoles, redRoles, grayRoles].map((teamGroup, i) => (
        <RoleListGroup key={i} roles={teamGroup} />
      ))}
    </Stack>
  );
};

export const RoleListGroup: FC<{ roles: Role[] }> = ({ roles }) => {
  return (
    <Stack direction="row" spacing={0} flexWrap="wrap">
      {roles.map((r) => (
        <Chip
          key={r.id}
          label={r.name}
          color={getColor(r.team)}
          sx={{ mr: 1, mb: 1 }}
        />
      ))}
    </Stack>
  );
};
