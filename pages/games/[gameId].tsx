import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { GetServerSideProps, NextPage } from "next";
import React, { FC, useState } from "react";
import { Card } from "../../components/Card";
import { centerCenter, fullSize } from "../../components/css";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loader } from "../../components/Loader";
import { Overlay } from "../../components/Overlay";
import { PageContainer } from "../../components/PageContainer";
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
    <PageContainer>
      <Loader />
    </PageContainer>
  );
};

const SetUsernamePage: FC<{
  initialName: string;
  onSubmit: (value: string) => void;
}> = ({ initialName, onSubmit }) => {
  const [name, setName] = useState(initialName);

  return (
    <PageContainer>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          onSubmit(name);
        }}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </label>
        <button>Join</button>
      </form>
    </PageContainer>
  );
};

const LobbyPage: FC<{ game: Game }> = ({ game }) => {
  return (
    <PageContainer>
      <h1>Lobby</h1>
      <p>Waiting for game to start</p>
      <hr />
      {game.players.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
      <hr />
      {game.roles.map((r) => (
        <p key={r.id}>{r.name}</p>
      ))}
    </PageContainer>
  );
};

const ErrorPage: FC<{ message: string }> = ({ message }) => {
  return (
    <PageContainer>
      <div style={{ ...fullSize, ...centerCenter }}>
        <ErrorMessage message={message} />
      </div>
    </PageContainer>
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
        <Stack direction="column">
          <Typography variant="h2">{player.name}</Typography>
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
