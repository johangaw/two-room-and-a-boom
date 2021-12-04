import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { PageContainer } from "../../../components/PageContainer";
import { getGame, startGame } from "../../../connections/gameApiConnections";
import { Game } from "../../../types/domain";

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

  return (
    <PageContainer>
      {!game ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{game.name}</h1>
          <p>Admin page for game {game.id}</p>

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
