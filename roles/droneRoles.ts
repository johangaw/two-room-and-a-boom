import { Role } from "../types/domain";

export const Drone: Role = {
  id: "blue-drone",
  name: "Blue Drone",
  description: "",
  notes: [
    `You are a primary character. The Blue Team wins if you are in the same room as the Red Fist at the end of the game.`,
  ],
  team: "Blue",
  tags: ["group-drone", "primary"],
  linkedRoles: ["red-fist"],
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
  linkedRoles: ["blue-drone"],
};

export const Firecracker: Role = {
  id: "blue-firecracker",
  name: "Blue Firecracker",
  description: "",
  notes: [
    `You are a secondary character. You are the backup character for the Blue Drone. If the Blue Drone card is buried or the Blue Drone receives the "dead" condition before the end of the game, you must carry out all responsibilities associated with the Blue Drone.`,
  ],
  team: "Blue",
  tags: ["group-drone", "secondary", "backup"],
  linkedRoles: ["blue-drone"],
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
  linkedRoles: ["red-fist"],
};
