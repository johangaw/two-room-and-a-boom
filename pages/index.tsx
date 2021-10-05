import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <main
        style={{
          margin: "auto",
          maxWidth: "800px",
          padding: "16px",
        }}
      >
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
          <button>Rules</button>
          <button>Role reference</button>
        </div>
      </main>
    </>
  );
};

export default Home;
