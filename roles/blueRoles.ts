import { Role } from "../types/domain";

export const President: Role = {
  id: "blue-president",
  name: "President",
  description:
    'You are a primary character. Blue Team wins if you do not gain the "dead" condition.',
  team: "Blue",
};

export const Doctor: Role = {
  id: "blue-doctor",
  name: "Doctor",
  description:
    "When playing with the Doctor, the Blue Team has the following additional win condition: the President must card share with the Doctor before the end of the game or the Blue Team loses. At the end of the game, the President will be asked if he/she card shared with the Doctor. At that time both players will verify or deny having card shared.",
  notes: [
    "Remember that if the President character ever switches player control (perhaps due to the Hot Potato), then the new President must card share with the Doctor.",
  ],
  team: "Blue",
};

export const BlueSpy: Role = {
  id: "blue-spy",
  name: "Spy",
  description: "You card is Red but you are actually on the Blue team",
  team: "Blue",
};

export const BlueCoy: Role = {
  id: "blue-coy",
  name: "Coy",
  description: `You begin with the "coy" condition. Players with the "coy" condition may ONLY color share even when a character's power might force a card share. A Coy can't card share, privately reveal, or publicly reveal their card or their color.`,
  notes: [
    `"Coy" players can card share their cards to Psychologists after a Psychologist player has privately revealed their card to the "coy" player.`,
    `If a player with the "foolish" condition were to acquire the "coy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
};
