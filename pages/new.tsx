import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { FormEvent, useState } from "react";
import { ErrorMessage } from "../components/ErrorMessage";
import { useGameStorage } from "../components/useGameStorage";
import { createGame } from "../connections/gameApiConnections";
import { NewGameDTO } from "../types/dto";

const NewGame: NextPage = () => {
  const router = useRouter();
  const { rememberJoinedGame } = useGameStorage();
  const [error, setError] = useState("");

  const createGameHandler = async (game: NewGameDTO) => {
    createGame(game)
      .then((game) => {
        rememberJoinedGame(game);
        router.replace(`/games/${game.id}/admin`);
      })
      .catch((err) => setError(`Unable to create game: ${err}`));
  };

  return (
    <Container maxWidth="xs">
      <Stack marginTop={4} spacing={4}>
        <Typography variant="h3" component="h1">
          New Game
        </Typography>
        <Typography variant="body1">
          Create a new game for people to join
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={(ev: FormEvent) => {
            ev.preventDefault();
            createGameHandler({
              name: (ev.target as any).name.value,
            });
          }}
        >
          <Stack spacing={4}>
            <TextField label="Name" name="name" required fullWidth />
            <Button variant="contained">Create game</Button>
          </Stack>
        </Box>
        <ErrorMessage message={error}></ErrorMessage>
      </Stack>
    </Container>
  );
};

export default NewGame;
