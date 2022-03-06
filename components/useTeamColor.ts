import { isSpy } from "../roles/roles";
import { Role, Team } from "../types/domain";

export const useTeamColor = () => ({
  getColor: (role: Role | null): string => {
    if (!role) return "darkgray";

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
  },
});

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
