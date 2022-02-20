import { useCallback, useEffect, useState } from "react";

export const useActiveRoleStorage = () => {
  const KEY = "towRoomAndABoom.activeRole";

  const [activeRoleId, setActiveRoleId] = useState<string | null>(null);

  const rememberActiveRole = useCallback((roleId: string | null) => {
    setActiveRoleId(roleId);
    localStorage.setItem(KEY, JSON.stringify(roleId));
  }, []);

  useEffect(() => {
    let roleId: string | null = JSON.parse(localStorage.getItem(KEY) ?? "null");
    rememberActiveRole(roleId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    rememberActiveRole,
    activeRoleId,
  };
};
