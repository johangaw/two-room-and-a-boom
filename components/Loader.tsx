import { FC } from "react";
import { fullSize, centerCenter } from "./css";

export const Loader: FC = () => {
  return (
    <div style={{ ...fullSize, ...centerCenter }}>
      <h1>Loading...</h1>
    </div>
  );
};
