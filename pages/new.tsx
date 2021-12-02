import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { ErrorMessage } from "../components/ErrorMesage";
import { PageContainer } from "../components/PageContainer";
import { useGameStorage } from "../components/useGameStorage";
import { Game } from "../types/domain";
import { NewGameDTO } from "../types/dto";

const NewGame: NextPage = () => {
  const router = useRouter();
  const { rememberJoinedGame } = useGameStorage();
  const [error, setError] = useState("");

  const createGame = async (game: NewGameDTO) => {
    const res = await fetch("/api/game", {
      method: "POST",
      body: JSON.stringify(game),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const joinedGame: Game = await res.json();
      rememberJoinedGame(joinedGame);
      router.replace(`/game/${joinedGame.id}/admin`);
    } else {
      setError(`Unable to create game: ${await res.text()}`);
    }
  };

  return (
    <PageContainer>
      <h1>New game</h1>
      <p>Create a new game for people to join</p>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          createGame({
            name: (ev.target as any).name.value,
          });
        }}
      >
        <input type="text" name="name" required />
        <button>Create game</button>
      </form>
      <ErrorMessage message={error}></ErrorMessage>
    </PageContainer>
  );
};

export default NewGame;
