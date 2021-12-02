import { FC } from "react";
import { Role, Team } from "../types/domain";
import { isSpy } from "../types/roles";

interface CardProps {
  role: Role;
}

export const Card: FC<CardProps> = ({ role }) => {
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
      <h1>{role.name}</h1>
      <p>{role.description}</p>
      {role.notes?.map((n, i) => (
        <p key={i}>NOTE: {n}</p>
      ))}
    </div>
  );
};

const getColor = (role: Role): string => {
  const team = isSpy(role) ? invertTeam(role.team) : role.team;
  switch (team) {
    case "Blue":
      return "blue";
    case "Red":
      return "red";
    case "Gray":
      return "darkgray";
    default:
      return "pink";
  }
};

const invertTeam = (team: Team): Team => {
  switch (team) {
    case "Red":
      return "Blue";
    case "Blue":
      return "Red";
    default:
      return team;
  }
};
