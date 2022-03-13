import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FC, ReactNode } from "react";

interface OverlayProps {
  cover: ReactNode;
}

export const Overlay: FC<OverlayProps> = ({ children, cover }) => {
  return (
    <Box>
      <Stack
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        sx={{ backgroundColor: "gray" }}
        onTouchEnd={() => window.scrollTo({ behavior: "smooth", top: 0 })}
      >
        {cover}
      </Stack>
      <Stack
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="center"
      >
        {children}
      </Stack>
    </Box>
  );
};
