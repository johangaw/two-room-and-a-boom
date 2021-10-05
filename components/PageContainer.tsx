import { FC } from "react";

export const PageContainer: FC = ({ children }) => {
  return (
    <main
      style={{
        margin: "auto",
        maxWidth: "800px",
        padding: "16px",
      }}
    >
      {children}
    </main>
  );
};
