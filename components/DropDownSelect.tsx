import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { PropsWithChildren } from "react";

interface NameIdItem {
  id: string;
  name: string;
}
interface DropDownSelectProps<T> {
  value: T | null;
  onChange: (value: T) => void;
  values: T[];
  idPrefix: string;
  label: string;
}

export const DropDownSelect = <T extends NameIdItem>({
  value,
  onChange,
  values,
  idPrefix,
  label,
}: PropsWithChildren<DropDownSelectProps<T>>) => {
  const labelId = `${idPrefix}-dropdown-select-label`;
  return (
    <FormControl fullWidth>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        value={value?.id ?? ""}
        label={label}
        onChange={(ev) =>
          onChange(values.find((v) => v.id === ev.target.value)!)
        }
      >
        {values.map((v) => (
          <MenuItem key={v.id} value={v.id}>
            {v.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
