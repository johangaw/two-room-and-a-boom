import type { NextPage } from "next";
import Link from "next/link";
import { PageContainer } from "../components/PageContainer";

const Home: NextPage = () => {
  return (
    <>
      <PageContainer>
        <h1>2 Room and a Boom</h1>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            columnGap: "16px",
            rowGap: "16px",
          }}
        >
          <Link href={"/new"}>New game</Link>
          <Link href={"/join"}>Join game</Link>
          <button>Active game</button>
          <button>Role reference</button>
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
