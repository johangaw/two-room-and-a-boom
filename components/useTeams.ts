import { Role } from "../types/domain";

export const useTeams = (roles: Role[]) => {
  return {
    blueRoles: roles.filter((r) => r.team === "Blue"),
    redRoles: roles.filter((r) => r.team === "Red"),
    grayRoles: roles.filter((r) => r.team === "Gray"),
  };
};
