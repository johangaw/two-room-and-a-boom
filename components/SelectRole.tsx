import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import { FC } from "react";
import { Role } from "../types/domain";

interface SelectRoleProps {
  role: Role | null;
  roles: Role[];
  onChange: (role: Role) => void;
}

export const SelectRole: FC<SelectRoleProps> = ({ role, roles, onChange }) => {
  return (
    <Stack>
      <FormControl>
        <RadioGroup
          value={role?.id ?? ""}
          onChange={(ev) =>
            onChange(roles.find((r) => r.id === ev.target.value)!)
          }
        >
          {roles.map((r) => (
            <FormControlLabel
              key={r.id}
              value={r.id}
              control={<Radio />}
              label={r.name}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};
