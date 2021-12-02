import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { FC } from "react";
import { Overlay } from "../../components/Overlay";
import { PageContainer } from "../../components/PageContainer";
import {
  Partispant as IPartispant,
  usePartispants,
} from "../../components/usePartispants";

const GamePage: NextPage = () => {
  const { gameId } = useRouter().query;

  return (
    <Overlay>
      <h1>Hejsan</h1>
      <p>Och så lite info om hur just den här rollen fungerar</p>
    </Overlay>
  );
};

export default GamePage;
