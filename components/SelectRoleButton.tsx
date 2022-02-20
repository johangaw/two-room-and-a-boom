import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FC, useState } from "react";
import { Role } from "../types/domain";
import { SelectRole } from "./SelectRole";

export const SelectRoleButton: FC<{
  role: Role | null;
  roles: Role[];
  onChange: (role: Role) => void;
}> = ({ role, roles, onChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Select role
      </Button>
      <Dialog onClose={() => setOpen(false)} open={open} fullWidth={true}>
        <DialogTitle>Select role</DialogTitle>
        <DialogContent>
          <SelectRole
            role={role}
            roles={roles}
            onChange={(r) => {
              setOpen(false);
              onChange(r);
            }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};
