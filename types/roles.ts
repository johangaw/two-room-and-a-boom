import { Role } from "./domain";

// =======================================
// Blue team
// =======================================

export const President: Role = {
  id: "president",
  name: "President",
  description:
    'You are a primary character. Blue Team wins if you do not gain the "dead" condition.',
  team: "Blue",
};

export const Doctor: Role = {
  id: "doctor",
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

// =======================================
// Read team
// =======================================

export const Bomber: Role = {
  id: "bomber",
  name: "Bomber",
  description:
    'You are a primary character. Everyone in the same room as you at the end of the game gains the "dead" condition. The Red Team wins if the President gains the "dead" condition.',
  notes: [
    'It is possible that the Bomber receives the "dead" condition before the end of the game. If this happens, then the Bomber does not detonate, failing to provide the "dead" condition to everyone in the same room at the end of the game.',
  ],
  team: "Red",
};
export const Engineer: Role = {
  id: "engineer",
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

// =======================================
// Gray team
// =======================================

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
