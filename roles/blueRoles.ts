import { Role } from "../types/domain";

export const Firecracker: Role = {
  id: "blue-firecracker",
  name: "Blue Firecracker",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the Blue Drone. If the Blue Drone card is buried or the Blue Drone receives the "dead" condition before the end of the game, you must carry out all responsibilities associated with the Blue Drone.`,
  ],
  team: "Blue",
  tags: ["group-drone", "secondary", "backup"],
};

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

export const Doctor: Role = {
  id: "blue-doctor",
  name: "Doctor",
  description:
    "When playing with the Doctor, the Blue Team has the following additional win condition: the President must card share with the Doctor before the end of the game or the Blue Team loses. At the end of the game, the President will be asked if he/she card shared with the Doctor. At that time both players will verify or deny having card shared.",
  notes: [
    "Remember that if the President character ever switches player control (perhaps due to the Hot Potato), then the new President must card share with the Doctor.",
  ],
  team: "Blue",
  tags: ["group-president"],
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

export const FatPrincess: Role = {
  id: "blue-fat-princess",
  name: "Fat Princess",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the King. If the King card is buried or the King receives the "toast" condition before the end of the game, you must carry out all responsibilities associated with the King (for example: ending the game in the same room as the King, card sharing with the Alchemist).`,
  ],
  team: "Blue",
  tags: ["group-king", "secondary"],
};

export const Firefighter: Role = {
  id: "blue-firefighter",
  name: "Firefighter",
  description: "",
  notes: [
    `You have the FIREFIGHTER power: card sharing with the President provides the President the "fireproof" condition. If the President has the "fireproof" condition, then, at the end of the game, all players in the same room as the President also gain the "fireproof" condition. Players with the "fireproof" condition do not gain the "dead" condition from the "firebomb" condition.`,
  ],
  team: "Blue",
  tags: ["FIREFIGHTER", "fireproof", "firebomb", "group-president"],
};

export const King: Role = {
  id: "blue-king",
  name: "King",
  description: "",
  notes: [
    `You are a primary character. Blue Team wins if you do not gain the "toast" condition.`,
  ],
  team: "Blue",
  tags: ["toast", "group-king", "primary"],
};

export const Marshal: Role = {
  id: "blue-marshal",
  name: "Marshal",
  description: "",
  notes: [
    `If you card share with the Fugitive, the game immediately ends. Blue Team wins.`,
  ],
  team: "Blue",
  tags: ["group-marshal"],
};

export const Nurse: Role = {
  id: "blue-nurse",
  name: "Nurse",
  description: "",
  notes: [
    `You are the backup character for the Doctor.`,
    `If the Doctor card is buried or the Doctor receives the "dead" condition before the end of the game, you must carry out all responsibilities associated with the Doctor (card sharing with the President).`,
  ],
  team: "Blue",
  tags: ["group-president", "backup"],
};

export const OneArmedMan: Role = {
  id: "blue-one-armed-man",
  name: "One-armed Man",
  description: "",
  notes: [
    `If you card share with the Witness, the game immediately ends. Blue Team wins.`,
  ],
  team: "Blue",
  tags: ["group-marshal"],
};

export const President: Role = {
  id: "blue-president",
  name: "President",
  description:
    'You are a primary character. Blue Team wins if you do not gain the "dead" condition.',
  team: "Blue",
  tags: ["group-president", "primary"],
};

export const PresidentsDaughter: Role = {
  id: "blue-daughter",
  name: "Daughter",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the President. If the President card is buried or the President receives the "dead" condition before the bomb is activated, you must carry out all responsibilities associated with the President (for example: ending the game in the opposite room as the Bomber, card sharing with the Doctor).`,
  ],
  team: "Blue",
  tags: ["group-president", "backup", "secondary"],
};

export const Pyrotech: Role = {
  id: "blue-pyrotech",
  name: "Pyrotech",
  description: "",
  notes: [
    `You have the PYROTECH power: card sharing with the Bomber provides the "firebomb" condition. If the Bomber has the "firebomb" condition at the end of the game, all players gain the "dead" condition (regardless of what room they are in).`,
  ],
  team: "Blue",
  tags: ["PYROTECH", "firebomb", "card-share", "group-president"],
};

export const TuesdayKnight: Role = {
  id: "blue-tuesday-knight",
  name: "Tuesday Knight",
  description: "",
  notes: [
    `You have the HUG power: if you card share with the Bomber, the game immediately ends. Blue Team wins. Note: the HUG power never works on the Martyr. If the Bomber is buried, the HUG power is never used.`,
  ],
  team: "Blue",
  tags: ["HUG", "bomber", "card-share", "group-president"],
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
};
