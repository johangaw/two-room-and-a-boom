import { useState, useEffect } from "react";
import {
  transferRole,
  getPlayerRoles,
} from "../connections/gameApiConnections";
import { Game, Role, Player } from "../types/domain";

export const usePlayerRoles = (game: Game | null, playerId: string) => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeRole, setActiveRole] = useState<Role | null>(null);

  const transferRoleToPlayer = (toPlayer: Player, role: Role) => {
    transferRole(game?.id ?? "", playerId, toPlayer.id, role.id).then(() => {
      const newRoles = roles.filter((r) => r.id !== role.id);
      setRoles(newRoles);
      if (activeRole === role) {
        setActiveRole(newRoles[0] ?? null);
      }
    });
  };

  useEffect(() => {
    if (!game?.started || !playerId) return;

    setLoading(true);
    getPlayerRoles(game?.id ?? "", playerId)
      .then((roles) => {
        setRoles(roles);
        setActiveRole(roles[0] ?? null);
      })
      .catch((err) => {
        console.error(err);
        setError("No role has been assigned to this this player...");
      })
      .finally(() => setLoading(false));
  }, [game?.started, game?.id, playerId]);

  return {
    transferRoleToPlayer,
    error,
    loading,
    roles,
    activeRole,
    setActiveRole,
  };
};
