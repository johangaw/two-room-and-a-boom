import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { Role } from "../types/domain";
import { getColor } from "./utils";

export const RoleSelectionSummary: FC<{ roles: Role[] }> = ({ roles }) => {
  return (
    <Stack>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography
            variant="subtitle1"
            textAlign="center"
            color={getColor("Blue")}
          >
            Blue
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            textAlign="center"
            variant="subtitle1"
            color={getColor("Red")}
          >
            Red
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            textAlign="center"
            variant="subtitle1"
            color={getColor("Gray")}
          >
            Gray
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography textAlign="center" color={getColor("Blue")}>
            {roles.filter((r) => r.team === "Blue").length}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography textAlign="center" color={getColor("Red")}>
            {roles.filter((r) => r.team === "Red").length}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography textAlign="center" color={getColor("Gray")}>
            {roles.filter((r) => r.team === "Gray").length}
          </Typography>
        </Grid>
      </Grid>
    </Stack>
  );
};
