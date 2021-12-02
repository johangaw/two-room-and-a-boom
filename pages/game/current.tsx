import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { Card } from "../../components/Card";
import { ErrorMessage } from "../../components/ErrorMesage";
import { Overlay } from "../../components/Overlay";
import { PageContainer } from "../../components/PageContainer";
import { usePlayerStorage } from "../../components/usePlayerStorage";
import { Bomber, President } from "../../types/roles";

const CurrentGamePage: NextPage = () => {
  const { gameId } = useRouter().query;
  const { player } = usePlayerStorage();

  return player ? (
    <Overlay>
      <Card role={player?.role} />
    </Overlay>
  ) : (
    <PageContainer>
      <h1>Nope</h1>
      <ErrorMessage message="You have not joined a game yet" />
    </PageContainer>
  );
};

export default CurrentGamePage;
