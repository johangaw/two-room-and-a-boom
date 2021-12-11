import { Role } from "../types/domain";

export const Mi6: Role = {
  id: "mi6",
  name: "Mi6",
  description:
    "You win if you card share with the Bomber and the President before the end of the game",
  team: "Gray",
};

export const Gambler: Role = {
  id: "gambler",
  name: "Gambler",
  description: `At the end of the last round (the 1 minute round), before all players reveal their cards, you, the Gambler, must publicly announce which team (Red Team, Blue Team, or neither) you think won the game. If you are correct, you win. If you are incorrect, you lose.`,
  team: "Gray",
};
