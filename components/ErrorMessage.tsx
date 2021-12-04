import { FC } from "react";

interface ErrorProps {
  message?: string;
}

export const ErrorMessage: FC<ErrorProps> = ({ message }) => {
  return !!message ? <p style={{ color: "red" }}>{message}</p> : null;
};
export default Error;
