import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import { PageContainer } from "../../components/PageContainer";
import {
  Partispant as IPartispant,
  usePartispants,
} from "../../components/usePartispants";

const LobbyPage: NextPage = () => {
  const { gameId } = useRouter().query;

  const partispants = usePartispants(gameId as string);

  return (
    <PageContainer>
      <h1>{gameId}</h1>
      <div>
        {partispants.map((p, index) => (
          <Partispant key={index} partispant={p} />
        ))}
      </div>
    </PageContainer>
  );
};

const Partispant: FC<{ partispant: IPartispant }> = ({ partispant }) => {
  return (
    <div>
      <p>{partispant.name}</p>
    </div>
  );
};

export default LobbyPage;
