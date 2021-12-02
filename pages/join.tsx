import type { NextPage } from "next";
import { PageContainer } from "../components/PageContainer";

const JoinGame: NextPage = () => {
  return (
    <PageContainer>
      <h1>join a game</h1>
      <form>
        <input type="text" name="gameId" />
        <button>Join</button>
      </form>
    </PageContainer>
  );
};

export default JoinGame;
