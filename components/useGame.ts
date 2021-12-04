import { useEffect, useState } from "react";
import { getGame } from "../connections/gameApiConnections";
import { Game } from "../types/domain";

export const useGame = (gameId: string) => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState<Game | null>(null);
  const { string, refresh } = useRandomString();

  useEffect(() => {
    if (game?.started || !!error) return;

    const timeout = setIntervalImmediate(() => {
      getGame(gameId)
        .then(setGame)
        .catch((err) => {
          console.error(err);
          setError(err);
        })
        .finally(() => setLoading(false));
    }, 5_000);

    return () => clearInterval(timeout);
  }, [gameId, game?.started, error, string]);

  return {
    game,
    loading,
    error,
    refresh,
  };
};

const useRandomString = () => {
  const randomString = () =>
    `${new Date().getTime()}-${Math.random()}-${Math.random()}`;
  const [string, setString] = useState(randomString);
  return {
    string,
    refresh: () => setString(randomString()),
  };
};

const setIntervalImmediate = (callback: () => void, ms?: number) => {
  callback();
  return setInterval(callback, ms);
};
