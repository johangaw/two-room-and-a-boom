import type { GetServerSideProps, NextPage } from "next";
import React, { FC, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { centerCenter, fullSize } from "../../components/css";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loader } from "../../components/Loader";
import { Overlay } from "../../components/Overlay";
import { PageContainer } from "../../components/PageContainer";
import { SelectPlayer } from "../../components/SelectPlayer";
import { useGame } from "../../components/useGame";
import { usePlayerStorage } from "../../components/usePlayerStorage";
import {
  getPlayerRole,
  joinGame,
  transferRole,
} from "../../connections/gameApiConnections";
import { Game, Player, Role } from "../../types/domain";

interface Props {
  gameId: string;
}

const GamePage: NextPage<Props> = ({ gameId }) => {
  const [error, setError] = useState("");
  const [role, setRole] = useState<Role | null>(null);
  const { player, rememberPlayer } = usePlayerStorage();
  const {
    game,
    loading: loadingGame,
    error: loadingGameError,
    refresh: refreshGame,
  } = useGame(gameId);
  const playerId = player?.id;
  const hasJoined = game?.players?.some((p) => p.id === player?.id);

  const transferRoleToPlayer = (playerId: string) => {
    transferRole(
      game?.id ?? "",
      player?.id ?? "",
      playerId,
      role?.id ?? ""
    ).then(() => setRole(null));
  };

  useEffect(() => {
    if (!game?.started || !playerId) return;

    getPlayerRole(gameId, playerId)
      .then(setRole)
      .catch((err) => {
        console.error(err);
        setError("No role has been assigned to this this player...");
      });
  }, [game?.started, gameId, playerId]);

  if (loadingGame) {
    return <LoadingPage />;
  }

  if (loadingGameError) {
    return <ErrorPage message={loadingGameError} />;
  }

  if (role) {
    return (
      <CardPage
        role={role}
        playerName={player?.name ?? ""}
        players={game?.players ?? []}
        playerSelected={transferRoleToPlayer}
      />
    );
  }

  if (game && !hasJoined && player) {
    return (
      <SetUsernamePage
        initialName={player?.name || ""}
        onSubmit={(name) => {
          const newPlayer = { ...player, name };
          rememberPlayer(newPlayer);
          joinGame(gameId, newPlayer).then(refreshGame);
        }}
      />
    );
  }

  if (game && hasJoined) {
    return <LobbyPage game={game} />;
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
  role: Role;
  playerName: string;
  players: Player[];
  playerSelected: (playerId: string) => void;
}> = ({ role, players, playerSelected: playersSelected, playerName }) => {
  return (
    <Overlay
      cover={
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>{playerName}</h1>
          <SelectPlayer players={players} playerSelected={playersSelected} />
        </div>
      }
    >
      <Card role={role} />
    </Overlay>
  );
};
