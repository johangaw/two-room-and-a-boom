import { FC, useMemo } from "react";
import { Role, Team } from "../types/domain";

interface RoleSelectProps {
  availableRoles: Role[];
  roles: Role[];
  onChange: (roles: Role[]) => void;
}
export const RoleSelect: FC<RoleSelectProps> = ({
  availableRoles,
  roles,
  onChange,
}) => {
  const groups = availableRoles.reduce(
    (groups, role) =>
      Object.assign(groups, {
        [role.team]: (groups[role.team] ?? []).concat(role),
      }),
    {} as Record<Team, Role[]>
  );
  const roleIds = useMemo(() => new Set(roles.map((r) => r.id)), [roles]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {Object.entries(groups).map(([team, group], index) => (
        <div key={index}>
          <h3>{team}</h3>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {group.map((role, index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={roleIds.has(role.id)}
                    onChange={(ev) =>
                      onChange(
                        ev.target.checked
                          ? roles.concat(role)
                          : roles.filter((r) => r.id !== role.id)
                      )
                    }
                  />
                  {role.name}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
