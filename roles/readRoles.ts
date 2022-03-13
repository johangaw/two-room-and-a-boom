import { Role } from "../types/domain";

export const Cupid: Role = {
  id: "red-cupid",
  name: "Cupid",
  description: "",
  notes: [
    `You have the CUPID power: once per game, you may privately reveal your card to two players. You must verbally say to your target players, "You are in love with each other".`,
    `Those two players gain the "in love" condition. Players with the "in love" condition replace their original win objective with the following win objective: be in the same room with the player with whom you are "in love" at the end of the game or fail to win your objective. The CUPID power cannot be used on yourself.`,
    `Note: If a player with the "in love" condition were to acquire the "in hate" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["CUPID", "once-per-game", "in love", "lover-haters"],
};

export const Exhibitionist: Role = {
  id: "red-exhibitionist",
  name: "Exhibitionist",
  description: "",
  notes: [
    `You begin with the "flashing" condition. Players with the "flashing" condition may ONLY publicly reveal even when a character's power might force a card share. A Exhibitionist can't card share or privately reveal their card or their color.`,
  ],
  team: "Red",
  tags: ["flashing"],
};

export const Fool: Role = {
  id: "red-fool",
  name: "Fool",
  description: "",
  notes: [
    `You begin with the "foolish" condition. Players with the "foolish" condition can never turn down an offer to card share or color share.`,
    `Note: If a player with the "foolish" condition were to acquire the "shy" condition, the two conditions would cancel one another, leaving the player with neither condition.`,
  ],
  team: "Red",
  tags: ["foolish"],
};
export const Fugitive: Role = {
  id: "red-fugitive",
  name: "Fugitive",
  description: "",
  notes: [
    `If you card share with the One-Armed Man, the game immediately ends. Red Team wins.`,
  ],
  team: "Red",
  tags: ["group-marshal"],
};

export const Gargoyle: Role = {
  id: "red-gargoyle",
  name: "Gargoyle",
  description: "",
  notes: [
    `You have the GARGOYLE power: whenever you are selected to leave a room (via hostage selection or a character's power) you may publicly reveal your card and verbally say, "Stone", to avoid leaving the room.`,
    `This means that any character that attempts to force you to leave the room (including the leader) must immediately choose a different player to leave. The GARGOYLE power can be used repeatedly at anytime.`,
    `Note: the GARGOYLE power can't be used while the leader is out of the room during parlay.`,
  ],
  team: "Red",
  tags: ["GARGOYLE"],
};
export const Gorgon: Role = {
  id: "red-gorgon",
  name: "Gorgon",
  description: "",
  notes: [
    `You have the GORGON power: any player that card shares with you gains the "stoned" condition. Players with the "stoned" condition may no longer vote. Rather, any time a vote is called for (e.g. in the instance of nominating/usurping a leader), "stoned" players must act stiff with their arms straight down.`,
  ],
  team: "Red",
  tags: ["GORGON", "stoned", "card-share"],
};

export const Fist: Role = {
  id: "red-fist",
  name: "Red Fist",
  description: "",
  notes: [
    `You are a primary character. The Red Team wins if you are not in the same room as the Blue Drone at the end of the game.`,
  ],
  team: "Red",
  tags: ["group-drone", "primary"],
};

export const Foot: Role = {
  id: "red-foot",
  name: "Red Foot",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the Red Fist. If the Red Fist card is buried or the Red Fist receives the "dead" condition before the bomb is activated, you must carry out all responsibilities associated with the Red Fist.`,
  ],
  team: "Red",
  tags: ["group-drone", "secondary", "backup"],
};

export const Team: Role = {
  id: "red-team",
  name: "Red Team",
  description: "",
  notes: [
    `You are on Red Team, if the President gains the "dead" condition, you win.`,
    `Note: any character card that has the white bomb icon on it is considered to be on the Red Team.`,
  ],
  team: "Red",
  tags: [],
};

export const Socialist: Role = {
  id: "red-socialist",
  name: "Socialist",
  description: "",
  notes: [
    `Any player that card shares with you must trade in their character card for a Red Team card before the beginning of the next round and before revealing any part of their card to another player.`,
    `Your power has no effect on primary characters (President, Bomber, Red Fist, etc)., backup characters for primaries (President's Daughter, Martyr, Firecracker, etc). or any character that is not aligned with either red or blue.`,
  ],
  team: "Red",
  tags: ["not-implemented"],
};

export const Witness: Role = {
  id: "red-witness",
  name: "Witness",
  description: "",
  notes: [
    `If you card share with the Marshal, the game immediately ends. Red Team wins.`,
  ],
  team: "Red",
  tags: ["group-marshal"],
};

export const Xenomorph: Role = {
  id: "red-xenomorph",
  name: "Xenomorph",
  description: "",
  notes: [
    `You have the XENOMORPH power: the first member of the blue team that color or card shares with you gains the "impregnated" condition and you must give them your Xenomorph character card.`,
    `This means that using your XENOMORPH power will permanently remove your card from the game, not you. A player with the "impregnated" condition must not do anything with the Xenomorph card they hold, including showing the card to others or using powers associated with the card. They just have to hold onto it.`,
    `However, a player with the "impregnated" condition can still use their own card as per usual. At the end of the game, everyone in the same room as blue player with the "impregnated" condition gains the "dead" condition.`,
  ],
  team: "Red",
  tags: ["group-xeno", "XENOMORPH", "impregnated", "dead"],
};

// Dragon

// export const Dragon: Role = {
//   id: "red-dragon",
//   name: "Dragon",
//   description: "",
//   notes: [
//     `You are a primary character. Everyone in the same room as you at the end of the game gains the "toast" condition. The Red Team wins if the King gains the "dead" condition.`,
//     `Note: it is possible that the Dragon receives the "dead" condition before the end of the game. If this happens, then the Dragon does not breathe , failing to provide the "dead" condition to everyone in the same room at the end of the game.`,
//   ],
//   team: "Red",
//   tags: ["group-king", "primary"],
// };

// export const DragonEgg: Role = {
//   id: "red-dragon-egg",
//   name: "Dragon Egg",
//   description: "",
//   notes: [
//     `You are a secondary character. You are the backup character for the Dragon. If the Dragon card is buried or the Dragon receives the "toast" condition before the end of the game, you must carry out all responsibilities associated with the Dragon (for example: ending the game in the same room as the King, card sharing with the Eggineer).`,
//   ],
//   team: "Red",
//   tags: ["group-king", "secondary"],
// };

// export const Eggineer: Role = {
//   id: "red-eggineer",
//   name: "Eggineer",
//   description: "",
//   notes: [
//     `When playing with the Eggineer, the Red Team has the following additional win condition: the Dragon must card share with the Eggineer before the end of the game or the Red Team loses.`,
//     `At the end of the game, the Dragon will be asked if he/she card shared with the Eggineer. At that time both players will verify or deny having card shared.`,
//     `Note: remember that if the Dragon character ever switches player control (perhaps due to the Hot Potato), then the new Dragon must card share with the Eggineer.`,
//   ],
//   team: "Red",
//   tags: ["group-king"],
// };

// export const Fanatic: Role = {
//   id: "red-fanatic",
//   name: "Fanatic",
//   description: "",
//   notes: [
//     `You are the backup character for the Eggineer. If the Eggineer card is buried or the Eggineer receives the "dead" condition before the end of the game, you must carry out all responsibilities associated with the Eggineer (card sharing with the Dragon).`,
//   ],
//   team: "Red",
//   tags: ["group-king"],
// };
