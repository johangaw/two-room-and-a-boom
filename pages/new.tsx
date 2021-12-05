import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { PageContainer } from "../components/PageContainer";
import { useGameStorage } from "../components/useGameStorage";
import { createGame } from "../connections/gameApiConnections";
import { Game } from "../types/domain";
import { NewGameDTO } from "../types/dto";

const NewGame: NextPage = () => {
  const router = useRouter();
  const { rememberJoinedGame } = useGameStorage();
  const [error, setError] = useState("");

  const createGameHandler = async (game: NewGameDTO) => {
    createGame(game)
      .then((game) => {
        rememberJoinedGame(game);
        router.replace(`/games/${game.id}/admin`);
      })
      .catch((err) => setError(`Unable to create game: ${err}`));
  };

  return (
    <PageContainer>
      <h1>New game</h1>
      <p>Create a new game for people to join</p>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          createGameHandler({
            name: (ev.target as any).name.value,
          });
        }}
      >
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <button>Create game</button>
      </form>
      <ErrorMessage message={error}></ErrorMessage>
    </PageContainer>
  );
};

export default NewGame;
