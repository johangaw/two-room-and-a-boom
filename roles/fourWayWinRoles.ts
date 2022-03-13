import { Role } from "../types/domain";

export const Fugitive: Role = {
  id: "red-fugitive",
  name: "Fugitive",
  description: "",
  notes: [
    `If you card share with the One-Armed Man, the game immediately ends. Red Team wins.`,
  ],
  team: "Red",
  tags: ["group-marshal"],
  linkedRoles: ["blue-one-armed-man"],
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
  linkedRoles: ["red-witness"],
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
  linkedRoles: ["blue-marshal"],
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
  linkedRoles: ["red-fugitive"],
};
