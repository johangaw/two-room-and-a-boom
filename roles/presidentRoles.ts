import { Role } from "../types/domain";

export const President: Role = {
  id: "blue-president",
  name: "President",
  description:
    'You are a primary character. Blue Team wins if you do not gain the "dead" condition.',
  team: "Blue",
  tags: ["group-president", "primary"],
  linkedRoles: ["red-bomber"],
};

export const Bomber: Role = {
  id: "red-bomber",
  name: "Bomber",
  description:
    'You are a primary character. Everyone in the same room as you at the end of the game gains the "dead" condition. The Red Team wins if the President gains the "dead" condition.',
  notes: [
    'It is possible that the Bomber receives the "dead" condition before the end of the game. If this happens, then the Bomber does not detonate, failing to provide the "dead" condition to everyone in the same room at the end of the game.',
  ],
  team: "Red",
  tags: ["group-president", "primary"],
  linkedRoles: ["blue-president"],
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
  linkedRoles: ["blue-president"],
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
  tags: ["group-president"],
  linkedRoles: ["red-bomber"],
};

export const Daughter: Role = {
  id: "blue-daughter",
  name: "Daughter",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the President. If the President card is buried or the President receives the "dead" condition before the bomb is activated, you must carry out all responsibilities associated with the President (for example: ending the game in the opposite room as the Bomber, card sharing with the Doctor).`,
  ],
  team: "Blue",
  tags: ["group-president", "backup", "secondary"],
  linkedRoles: ["blue-president"],
};

export const Martyr: Role = {
  id: "red-martyr",
  name: "Martyr",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the Bomber. If the Bomber card is buried or the Bomber receives the "dead" condition before the bomb is activated, you must carry out all responsibilities associated with the Bomber (for example: ending the game in the same room as the President, card sharing with the Engineer).`,
  ],
  team: "Red",
  tags: ["group-president", "backup", "secondary"],
  linkedRoles: ["red-bomber"],
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
  linkedRoles: ["blue-doctor"],
};

export const Tinkerer: Role = {
  id: "red-tinkerer",
  name: "Tinkerer",
  description: "",
  notes: [
    `You are the backup character for the Engineer. If the Engineer card is buried or the Engineer receives the "dead" condition before activating the bomb, you must carry out all responsibilities associated with the Engineer (card sharing with the Bomber).`,
  ],
  team: "Red",
  tags: ["group-president", "backup"],
};

// =================================================
// firebomb
// =================================================

export const Firefighter: Role = {
  id: "blue-firefighter",
  name: "Firefighter",
  description: "",
  notes: [
    `You have the FIREFIGHTER power: card sharing with the President provides the President the "fireproof" condition. If the President has the "fireproof" condition, then, at the end of the game, all players in the same room as the President also gain the "fireproof" condition. Players with the "fireproof" condition do not gain the "dead" condition from the "firebomb" condition.`,
  ],
  team: "Blue",
  tags: ["FIREFIGHTER", "fireproof", "firebomb", "group-president"],
  linkedRoles: ["blue-president", "blue-pyrotech"],
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
  linkedRoles: ["blue-president", "blue-firefighter"],
};

// =================================================
// Instant win
// =================================================

export const TuesdayKnight: Role = {
  id: "blue-tuesday-knight",
  name: "Tuesday Knight",
  description: "",
  notes: [
    `You have the HUG power: if you card share with the Bomber, the game immediately ends. Blue Team wins. Note: the HUG power never works on the Martyr. If the Bomber is buried, the HUG power is never used.`,
  ],
  team: "Blue",
  tags: ["HUG", "bomber", "card-share", "group-president"],
  linkedRoles: ["red-bomber"],
};

export const DrBoom: Role = {
  id: "red-dr-boom",
  name: "Dr. Boom",
  description: "",
  notes: [
    `You have the BOOM power: if you card share with the President, the game immediately ends. Red Team wins.`,
    `Note: the BOOM power never works on the President's Daughter. If the President is buried, the BOOM power is never used.`,
  ],
  team: "Red",
  tags: ["group-president"],
  linkedRoles: ["blue-president"],
};
