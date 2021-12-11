import { Role } from "../types/domain";
import * as blueRoles from "./blueRoles";
import * as redRoles from "./readRoles";
import * as grayRoles from "./grayRoles";

export const ALL_ROLES = ([] as Role[]).concat(
  Object.values(blueRoles),
  Object.values(redRoles),
  Object.values(grayRoles)
);

export function isSpy(role: Role): boolean {
  return ["blue-spy", "red-spy"].includes(role.id);
}

export function isRole(role: Role | undefined): role is Role {
  return !!role;
}
