import { FC } from "react";
import { Role } from "../types/domain";
import { useTeamColor } from "./useTeamColor";

interface CardProps {
  role: Role | null;
}

export const Card: FC<CardProps> = ({ role }) => {
  const { getColor } = useTeamColor();
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: getColor(role),
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px",
        textAlign: "center",
        color: "white",
      }}
    >
      {role && (
        <>
          <h1>{role.name}</h1>
          <p>{role.description}</p>
          {role.notes?.map((n, i) => (
            <p key={i}>NOTE: {n}</p>
          ))}
        </>
      )}
    </div>
  );
};
