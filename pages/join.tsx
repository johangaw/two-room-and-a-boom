import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { NextPage, GetServerSideProps } from "next";
import Link from "next/link";
import { getGames } from "../services/gameService";
import { Game } from "../types/domain";

interface JoinPageProps {
  games: Game[];
}

const JoinPage: NextPage<JoinPageProps> = ({ games }) => {
  return (
    <Container maxWidth="xs">
      <Stack marginTop={4} spacing={4}>
        <Typography variant="h3" component="h1">
          Join Game
        </Typography>

        <List component="nav" aria-label="list of available games">
          {games.map((g) => (
            <Link key={g.id} href={`/games/${g.id}`} passHref>
              <ListItemButton onClick={(event) => null}>
                <ListItemText primary={g.name} />
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Stack>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<
  JoinPageProps
> = async ({}) => {
  return {
    props: {
      games: await getGames(),
    },
  };
};

export default JoinPage;
