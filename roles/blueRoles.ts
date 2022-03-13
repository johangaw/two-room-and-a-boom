import { Role } from "../types/domain";

export const Team: Role = {
  id: "blue-Team",
  name: "Blue Team",
  description: "",
  notes: [
    `You are on the Blue Team. If the President does not gain the "Dead" condition, you win. Note: any character card that has the white star icon on it is considered to be on the Blue Team.`,
  ],
  team: "Blue",
  tags: [],
};

export const Capitalist: Role = {
  id: "blue-capitalist",
  name: "Capitalist",
  description: "",
  notes: [
    `Any player that card shares with you must trade in their character card for a Blue Team card before the beginning of the next round and before revealing any part of their card to another player. Your power has no effect any of the primary characters, secondary characters, or any character that is not aligned with either red or blue.`,
  ],
  team: "Blue",
  tags: ["not-implemented", "card-share"],
};

export const Eris: Role = {
  id: "blue-eris",
  name: "Eris",
  description: "",
  notes: [
    `You have the ERIS power: once per game, you may privately reveal your card to two players. You must verbally say to your target players, "You hate each other".`,
    `Those two players gain the "in hate" condition. Players with the "in hate" condition replace their original win objective with the following win objective: be in the opposite room of the player with whom you are "in hate" at the end of the game or fail to win this objective. You cannot use this power on yourself.`,
    `Note: If a player with the "in hate" condition were to acquire the "in love" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Blue",
  tags: ["ERIS", "in hate", "lover-haters", "once-per-game"],
};

export const Xenohunter: Role = {
  id: "blue-xenohunter",
  name: "Xenohunter",
  description: "",
  notes: [
    `You have the XENOHUNTER power: after any member of the blue team publicly reveals their card to the entire room, you may give them your Xenohunter card.`,
    `The player to whom you give your Xenohunter card is removed from the game with your card. This means that using your XENOHUNTER power will permanently remove your card from the game, not you.`,
  ],
  team: "Blue",
  tags: ["group-xeno", "XENOHUNTER"],
  linkedRoles: ["red-xenomorph"],
};

// group-king

// export const FatPrincess: Role = {
//   id: "blue-fat-princess",
//   name: "Fat Princess",
//   description: "",
//   notes: [
//     `You are a secondary character. You are the backup character for the King. If the King card is buried or the King receives the "toast" condition before the end of the game, you must carry out all responsibilities associated with the King (for example: ending the game in the same room as the King, card sharing with the Alchemist).`,
//   ],
//   team: "Blue",
//   tags: ["group-king", "secondary"],
// };

// export const King: Role = {
//   id: "blue-king",
//   name: "King",
//   description: "",
//   notes: [
//     `You are a primary character. Blue Team wins if you do not gain the "toast" condition.`,
//   ],
//   team: "Blue",
//   tags: ["toast", "group-king", "primary"],
// };
