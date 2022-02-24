import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { networkInterfaces } from "os";
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
import { QRCode } from "react-qrcode-logo";
import { FileStorage } from "../../../repositories/fileStorage";

interface GameAdminPageProps {
  serverHost: string;
}

const GameAdminPage: NextPage<GameAdminPageProps> = ({ serverHost }) => {
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

  const gameUrl = `${serverHost}/games/${game?.id}`;

  return (
    <PageContainer>
      {!game ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{game.name}</h1>
          <p>Admin page for game {game.id}</p>
          <p>
            <QRCode value={gameUrl} />
          </p>

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

export const getStaticPaths: GetStaticPaths = async () => {
  const fileStorage = new FileStorage();
  return {
    fallback: "blocking",
    paths: (await fileStorage.getGames()).map((g) => ({
      params: { gameId: g.id },
    })),
  };
};

export const getStaticProps: GetStaticProps<GameAdminPageProps> = async () => {
  const serverHost =
    process.env.API_HOST ??
    Object.values(networkInterfaces())
      .flat()
      .filter((o) => /\d+\.\d+\.\d+\.\d/.test(o?.address ?? ""))
      .filter((o) => o?.address !== "127.0.0.1")[0]?.address ??
    "";

  return {
    props: {
      serverHost: `http://${serverHost}:3000`,
    },
    revalidate: 10,
  };
};
