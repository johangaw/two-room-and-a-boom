import type { NextPage } from "next";
import { PageContainer } from "../components/PageContainer";

const NewGame: NextPage = () => {
  const createGame = () => {};

  return (
    <PageContainer>
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          createGame();
        }}
      >
        <p>This will create a new game which people can join</p>
        <button>Create game</button>
      </form>
    </PageContainer>
  );
};

export default NewGame;
