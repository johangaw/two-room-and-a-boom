import { Team } from "../types/domain";

export const getColor = (team: Team) =>
  team === "Red" ? "error" : team === "Blue" ? "primary" : "success";
