import { Role } from "./domain";

export const President: Role = {
  id: "president",
  name: "President",
  description:
    'You are a primary character. Blue Team wins if you do not gain the "dead" condition.',
  team: "Blue",
};

export const Bomber: Role = {
  id: "bomber",
  name: "Bomber",
  description:
    'You are a primary character. Everyone in the same room as you at the end of the game gains the "dead" condition. The Red Team wins if the President gains the "dead" condition.',
  note: 'It is possible that the Bomber receives the "dead" condition before the end of the game. If this happens, then the Bomber does not detonate, failing to provide the "dead" condition to everyone in the same room at the end of the game.',
  team: "Red",
};

export const Mi6: Role = {
  id: "mi6",
  name: "Mi6",
  description:
    "You win if you card share with the Bomber and the President before the end of the game",
  team: "Gray",
};
