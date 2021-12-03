import type { GetServerSideProps, NextPage } from "next";
import { CSSProperties, FC, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { ErrorMessage } from "../../components/ErrorMesage";
import { Overlay } from "../../components/Overlay";
import { PageContainer } from "../../components/PageContainer";
import { usePlayerStorage } from "../../components/usePlayerStorage";
import { Game, Player, Role } from "../../types/domain";

interface Props {
  gameId: string;
}

const GamePage: NextPage<Props> = ({ gameId }) => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState<Game | null>(null);
  const [role, setRole] = useState<Role | null>(null);
  const { player, rememberPlayer } = usePlayerStorage();
  const playerId = player?.id;
  const hasJoined = game?.players?.some((p) => p.id === player?.id);

  const joinGame = (player: Player) => {
    fetch(`/api/games/${gameId}/players`, {
      method: "POST",
      body: JSON.stringify(player),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json() as Promise<Game>;
        } else {
          throw res.text();
        }
      })
      .then(setGame);
  };

  useEffect(() => {
    setLoading(true);
    fetch(`/api/games/${gameId}`, {
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          return res.json() as Promise<Game>;
        } else {
          throw res.text();
        }
      })
      .then(setGame)
      .finally(() => setLoading(false));
  }, [gameId, playerId]);

  useEffect(() => {
    if (!gameId || !playerId || !hasJoined) return;

    const timerId = setTimeout(() => {
      fetch(`pages/api/games/${gameId}/players/${playerId}/role`, {
        headers: { "Content-Type": "application/json" },
      }).then(async (res) => {
        if (res.ok) {
          setRole(await res.json());
        }
      });
    }, 5_000);

    return () => clearTimeout(timerId);
  }, [gameId, playerId, hasJoined]);

  if (loading) {
    return <LoadingPage />;
  }

  if (role) {
    return <CardPage role={role} />;
  }

  if (game && !hasJoined && player) {
    return (
      <SetUsernamePage
        initialName={player?.name || ""}
        onSubmit={(name) => {
          const newPlayer = { ...player, name };
          rememberPlayer(newPlayer);
          joinGame(newPlayer);
        }}
      />
    );
  }

  if (game && hasJoined && player) {
    return <LobbyPage game={game} />;
  }

  return <ErrorPage message="Something went wrong" />;
};

export default GamePage;

export const getServerSideProps: GetServerSideProps<Props, { gameId: string }> =
  async ({ params }) => {
    return {
      props: {
        gameId: params!!.gameId,
      },
    };
  };

const fullSize: CSSProperties = {
  height: "100%",
  width: "100%",
};

const centerCenter: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const LoadingPage: FC = () => {
  return (
    <PageContainer>
      <div style={{ ...fullSize, ...centerCenter }}>
        <h1>Loading...</h1>
      </div>
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

const CardPage: FC<{ role: Role }> = ({ role }) => {
  return (
    <Overlay>
      <Card role={role} />
    </Overlay>
  );
};
