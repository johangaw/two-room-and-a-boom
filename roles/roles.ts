import { Role, RoleGroup } from "../types/domain";
import * as blueRoles from "./blueRoles";
import * as redRoles from "./readRoles";
import * as grayRoles from "./grayRoles";
import * as presidentRoles from "./presidentRoles";
import * as fourWayWinRoles from "./fourWayWinRoles";
import { sharedRoles } from "./sharedRoles";

export const roleGroups = ([] as RoleGroup[]).concat(
  {
    name: "The president cabinet",
    description:
      "The primary game mode when the blue team needs to protect the president while the red team wants to kill him/her (and the successor)",
    roles: Object.values(presidentRoles),
  },
  {
    name: "Rock, Bag, Scissor",
    description:
      "A cat and mouse game where each role needs to find their prey role while not being caught by their hunter",
    roles: Object.values(fourWayWinRoles),
  },
  {
    name: "Shared roles",
    description:
      "These roles come in pairs, one for the blue team and oe for the red team.",
    roles: sharedRoles,
  },
  {
    name: "Red reinforcements",
    description: "Additional red roles to spice tings up",
    roles: Object.values(redRoles),
  },
  {
    name: "Blue reinforcements",
    description: "Additional blue roles to spice tings up",
    roles: Object.values(blueRoles),
  },
  {
    name: "Neutral roles",
    description: "Roles which have their own agenda...",
    roles: Object.values(grayRoles),
  }
);

export const allRoles = roleGroups.flatMap((rg) => rg.roles);

export function isSpy(role: Role): boolean {
  return ["blue-spy", "red-spy"].includes(role.id);
}

export function isRole(role: Role | undefined): role is Role {
  return !!role;
}

export const equivalentRoles = [
  ["red-bomber", "blue-president"],
  ["blue-daughter", "red-martyr"],
  ["red-cupid", "blue-eris"],
  ["red-dr-boom", "blue-tuesday-knight"],
  ["red-engineer", "blue-doctor"],
  ["red-tinkerer", "blue-nurse"],
  ["red-xenomorph", "blue-xenohunter"],
];

const isPresent = <T>(value: T | undefined | null): value is T => !!value;

export const pairByEquivalentRoles = (roles: Role[]) =>
  equivalentRoles
    .map((ids) =>
      ids.map((id) => roles.find((r) => r.id === id)).filter(isPresent)
    )
    .filter((pair) => pair.length === 2);
