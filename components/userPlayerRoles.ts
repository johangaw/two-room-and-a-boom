import { useState, useEffect } from "react";
import {
  transferRole,
  getPlayerRoles,
} from "../connections/gameApiConnections";
import { Game, Role, Player } from "../types/domain";
import { useActiveRoleStorage } from "./useActiveRoleStorage";

export const usePlayerRoles = (game: Game | null, playerId: string) => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { activeRoleId, rememberActiveRole } = useActiveRoleStorage();

  const transferRoleToPlayer = (toPlayer: Player, role: Role) => {
    transferRole(game?.id ?? "", playerId, toPlayer.id, role.id).then(() => {
      const newRoles = roles.filter((r) => r.id !== role.id);
      setRoles(newRoles);
      if (activeRoleId === role.id) {
        rememberActiveRole(newRoles[0]?.id ?? null);
      }
    });
  };

  useEffect(() => {
    if (!game?.started || !playerId) return;

    setLoading(true);
    getPlayerRoles(game?.id ?? "", playerId)
      .then((roles) => {
        setRoles(roles);
        const activeRole = roles.find((r) => r.id === activeRoleId);

        if (!activeRole) rememberActiveRole(roles[0]?.id ?? null);
      })
      .catch((err) => {
        console.error(err);
        setError("No role has been assigned to this this player...");
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game?.started, game?.id, playerId]);

  return {
    transferRoleToPlayer,
    error,
    loading,
    roles,
    activeRole: roles.find((r) => r.id === activeRoleId) ?? null,
    setActiveRole: (role: Role) => rememberActiveRole(role.id),
  };
};
