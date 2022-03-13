import { Button, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { GetServerSideProps, NextPage } from "next";
import React, { FC, useState } from "react";
import { Card } from "../../components/Card";
import { centerCenter, fullSize } from "../../components/css";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Overlay } from "../../components/Overlay";
import { PlayerList } from "../../components/PlayerList";
import { RoleList } from "../../components/RoleList";
import { SelectRoleButton } from "../../components/SelectRoleButton";
import { TransferRoleButton } from "../../components/TransferRoleButton";
import { useGame } from "../../components/useGame";
import { usePlayerStorage } from "../../components/usePlayerStorage";
import { usePlayerRoles } from "../../components/userPlayerRoles";
import { joinGame } from "../../connections/gameApiConnections";
import { Game, Player, Role } from "../../types/domain";

interface Props {
  gameId: string;
}

const GamePage: NextPage<Props> = ({ gameId }) => {
  const { player, rememberPlayer } = usePlayerStorage();
  const {
    game,
    loading: loadingGame,
    error: loadingGameError,
    refresh: refreshGame,
  } = useGame(gameId);
  const playerId = player?.id ?? "";
  const hasJoined = game?.players?.some((p) => p.id === player?.id);
  const { roles, activeRole, setActiveRole, transferRoleToPlayer } =
    usePlayerRoles(game, playerId);

  if (loadingGame) {
    return <LoadingPage />;
  }

  if (loadingGameError) {
    return <ErrorPage message={loadingGameError} />;
  }

  if (!hasJoined && game?.started) {
    return <ErrorPage message="Unable to join a started game" />;
  }

  if (game && !game.started && hasJoined) {
    return <LobbyPage game={game} />;
  }

  if (game && !game.started && !hasJoined && player) {
    return (
      <SetUsernamePage
        initialName={player.name}
        onSubmit={(name) => {
          const newPlayer = { ...player, name };
          rememberPlayer(newPlayer);
          joinGame(gameId, newPlayer).then(refreshGame);
        }}
      />
    );
  }

  if (game && game.started && player) {
    return (
      <CardPage
        role={activeRole}
        player={player}
        playersInGame={game.players ?? []}
        playerRoles={roles}
        onRoleSelected={setActiveRole}
        onRoleTransfer={transferRoleToPlayer}
      />
    );
  }

  return <ErrorPage message="Something went wrong" />;
};

export default GamePage;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  return {
    props: {
      gameId: params?.gameId as string,
    },
  };
};

const LoadingPage: FC = () => {
  return (
    <Container maxWidth="xs">
      <CircularProgress />
    </Container>
  );
};

const SetUsernamePage: FC<{
  initialName: string;
  onSubmit: (value: string) => void;
}> = ({ initialName, onSubmit }) => {
  const [name, setName] = useState(initialName);

  return (
    <Container maxWidth="xs">
      <Stack spacing={2}>
        <Typography variant="h2" component="h1">
          Lobby
        </Typography>
        <Typography>Enter your name order to join the game</Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={(ev: any) => {
            ev.preventDefault();
            onSubmit(name);
          }}
        >
          <Stack spacing={2}>
            <TextField
              label="Name"
              value={name}
              name="name"
              required
              onChange={(ev) => setName(ev.target.value)}
            />
            <Button type="submit" variant="contained">
              Join
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

const LobbyPage: FC<{ game: Game }> = ({ game }) => {
  return (
    <Container maxWidth="xs">
      <Stack spacing={2}>
        <Typography variant="h2" component="h1">
          Lobby
        </Typography>
        <Typography>Waiting for game to start</Typography>
        <Divider />
        <RoleList roles={game.roles} />
        <Divider />
        <PlayerList players={game.players} />
      </Stack>
    </Container>
  );
};

const ErrorPage: FC<{ message: string }> = ({ message }) => {
  return (
    <Container maxWidth="xs">
      <div style={{ ...fullSize, ...centerCenter }}>
        <ErrorMessage message={message} />
      </div>
    </Container>
  );
};

const CardPage: FC<{
  player: Player;
  playersInGame: Player[];
  playerRoles: Role[];
  role: Role | null;
  onRoleSelected: (role: Role) => void;
  onRoleTransfer: (toPlayer: Player, role: Role) => void;
}> = ({
  playerRoles,
  playersInGame,
  player,
  role,
  onRoleSelected,
  onRoleTransfer,
}) => {
  return (
    <Overlay
      cover={
        <Stack direction="column" spacing={2}>
          <Typography variant="h2">{player.name}</Typography>
          <SelectRoleButton
            role={role}
            roles={playerRoles}
            onChange={onRoleSelected}
          />
          <TransferRoleButton
            players={playersInGame.filter((p) => p.id !== player.id)}
            roles={playerRoles}
            onTransfer={(toPlayer, role) => onRoleTransfer(toPlayer, role)}
          />
        </Stack>
      }
    >
      <Card role={role} />
    </Overlay>
  );
};
