import type { NextPage } from "next";
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
          <button>New game</button>
          <button>Join game</button>
          <button>Active game</button>
          <button>Role reference</button>
        </div>
      </PageContainer>
    </>
  );
};

export default Home;
