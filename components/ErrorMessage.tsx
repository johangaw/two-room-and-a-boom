import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { FC } from "react";

interface ErrorProps {
  message?: string;
}

export const ErrorMessage: FC<ErrorProps> = ({ message }) => {
  return !!message ? (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {message}
    </Alert>
  ) : null;
};
export default Error;
