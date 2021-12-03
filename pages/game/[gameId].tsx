import type { NextPage } from "next";
import { CSSProperties, FC, useState } from "react";
import { Card } from "../../components/Card";
import { ErrorMessage } from "../../components/ErrorMesage";
import { Overlay } from "../../components/Overlay";
import { PageContainer } from "../../components/PageContainer";
import { Game, Player, Role } from "../../types/domain";
import { President } from "../../types/roles";

interface Props {
  gameId: string;
}

const GamePage: NextPage<Props> = ({ gameId }) => {
  const [loading, setLoading] = useState(true);
  const [game, setGame] = useState<Game | null>(null);
  const [player, setPlayer] = useState<Player | null>(null);

  if (loading) {
    return <LoadingPage />;
  }

  if (!game) {
    return <ErrorPage message="The selected game does not exists" />;
  }

  return <CardPage role={President} />;
};

export default GamePage;

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
