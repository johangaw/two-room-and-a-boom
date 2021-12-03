import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { ErrorMessage } from "../components/ErrorMesage";
import { PageContainer } from "../components/PageContainer";
import { usePlayerStorage } from "../components/usePlayerStorage";
import { Player } from "../types/domain";
import { NewPlayerDTO } from "../types/dto";

const JoinGame: NextPage = () => {
  const [error, setError] = useState("");
  const { rememberPlayer } = usePlayerStorage();
  const router = useRouter();

  const joinGame = async (newPlayer: NewPlayerDTO, gameId: string) => {
    const res = await fetch(`/api/games/${gameId}/players`, {
      method: "POST",
      body: JSON.stringify(newPlayer),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const player: Player = await res.json();
      rememberPlayer(player);
      router.push(`/game/${gameId}`);
    } else {
      setError(`Unable to create game: ${await res.text()}`);
    }
  };

  return (
    <PageContainer>
      <h1>join a game</h1>
      <ErrorMessage message={error} />
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          const form = ev.target as any;
          joinGame({ name: form.name.value }, form.gameId.value);
        }}
      >
        <input type="text" name="gameId" required />
        <input type="text" name="name" required />
        <button>Join</button>
      </form>
    </PageContainer>
  );
};

export default JoinGame;
