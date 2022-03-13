import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { networkInterfaces } from "os";
import { useEffect, useState } from "react";
import { QRCode } from "react-qrcode-logo";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { RoleSelect } from "../../../components/RoleSelect";
import { RoleSelectionSummary } from "../../../components/RoleSelectionSummary";
import {
  getGame,
  startGame,
  updateGameRoles,
} from "../../../connections/gameApiConnections";
import { FileStorage } from "../../../repositories/fileStorage";
import { roleGroups } from "../../../roles/roles";
import { Game, Role } from "../../../types/domain";

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
    <Container maxWidth="xs">
      {!game ? (
        <CircularProgress />
      ) : (
        <Stack spacing={2}>
          <Typography component="h1" variant="h2">
            {game.name}
          </Typography>
          <Typography>Admin page for game {game.id}</Typography>
          <Stack direction="row" justifyContent="center">
            <QRCode value={gameUrl} />
          </Stack>

          <RoleSelect
            roles={game.roles}
            availableRoles={roleGroups}
            onChange={updateRoles}
          />

          <RoleSelectionSummary roles={game.roles} />

          <Button
            variant="contained"
            disabled={game.started}
            onClick={startGameHandler}
          >
            Start Game
          </Button>
          <ErrorMessage message={startGameError} />
        </Stack>
      )}
    </Container>
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
