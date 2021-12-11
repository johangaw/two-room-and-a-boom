import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { PageContainer } from "../../../components/PageContainer";
import { RoleSelect } from "../../../components/RoleSelect";
import {
  getGame,
  startGame,
  updateGameRoles,
} from "../../../connections/gameApiConnections";
import { ALL_ROLES } from "../../../roles/roles";
import { Game, Role } from "../../../types/domain";

const GameAdminPage: NextPage = () => {
  const [game, setGame] = useState<Game | null>(null);
  const [startGameError, setStartGameError] = useState("");
  const router = useRouter();
  const gameId = router.query.gameId as string;

  useEffect(() => {
    if (!gameId) return;
    getGame(gameId).then(setGame);
  }, [gameId]);

  const startGameHandler = () => {
    startGame(gameId).then(setGame).catch(setStartGameError);
  };

  const updateRoles = (roles: Role[]) => {
    if (!game) return;
    updateGameRoles(
      game.id,
      roles.map((r) => r.id)
    ).then(setGame);
  };

  return (
    <PageContainer>
      {!game ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{game.name}</h1>
          <p>Admin page for game {game.id}</p>

          <RoleSelect
            roles={game.roles}
            availableRoles={ALL_ROLES}
            onChange={updateRoles}
          />

          <button disabled={game.started} onClick={startGameHandler}>
            Start Game
          </button>
          <ErrorMessage message={startGameError} />
        </>
      )}
    </PageContainer>
  );
};

export default GameAdminPage;
