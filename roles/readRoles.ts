import { Role } from "../types/domain";

export const Bomber: Role = {
  id: "red-bomber",
  name: "Bomber",
  description:
    'You are a primary character. Everyone in the same room as you at the end of the game gains the "dead" condition. The Red Team wins if the President gains the "dead" condition.',
  notes: [
    'It is possible that the Bomber receives the "dead" condition before the end of the game. If this happens, then the Bomber does not detonate, failing to provide the "dead" condition to everyone in the same room at the end of the game.',
  ],
  team: "Red",
};
export const Engineer: Role = {
  id: "red-engineer",
  name: "Engineer",
  description:
    "When playing with the Engineer, the Red Team has the following additional win condition: the Bomber must card share with the Engineer before the end of the game or the Red Team loses. At the end of the game, the Bomber will be asked if he/she card shared with the Engineer. At that time both players will verify or deny having card shared.",
  notes: [
    "Remember that if the Bomber character ever switches player control (perhaps due to the Hot Potato), then the new Bomber must card share with the Engineer.",
  ],
  team: "Red",
};

export const RedSpy: Role = {
  id: "red-spy",
  name: "Spy",
  description: "You card is Blue but you are actually on the Red team",
  team: "Red",
};

export const RedCoy: Role = {
  id: "red-coy",
  name: "Coy",
  description: `You begin with the "coy" condition. Players with the "coy" condition may ONLY color share even when a character's power might force a card share. A Coy can't card share, privately reveal, or publicly reveal their card or their color.`,
  notes: [
    `"Coy" players can card share their cards to Psychologists after a Psychologist player has privately revealed their card to the "coy" player.`,
    `If a player with the "foolish" condition were to acquire the "coy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
};
