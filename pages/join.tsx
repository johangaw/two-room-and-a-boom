import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { FC } from "react";
import { useTeams } from "../components/useTeams";
import { getColor } from "../components/utils";
import { getGames } from "../services/gameService";
import { Game, Role } from "../types/domain";

interface JoinPageProps {
  games: Game[];
}

const JoinPage: NextPage<JoinPageProps> = ({ games }) => {
  return (
    <Container maxWidth="xs">
      <Stack marginTop={4} spacing={2}>
        <Typography variant="h3" component="h1">
          Join Game
        </Typography>
        <Typography>Join a game that looks interesting</Typography>

        <List aria-label="list of available games">
          {games.map((g) => (
            <Link key={g.id} href={`/games/${g.id}`} passHref>
              <ListItemButton onClick={() => null}>
                <ListItemText
                  primary={
                    <Typography variant="h5" component="h2">
                      {g.name}
                    </Typography>
                  }
                  secondary={<RoleDistribution roles={g.roles} />}
                />
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

export const RoleDistribution: FC<{ roles: Role[] }> = ({ roles }) => {
  const { blueRoles, grayRoles, redRoles } = useTeams(roles);
  return (
    <>
      <Typography component="span" color={getColor("Blue")}>
        {blueRoles.length}
      </Typography>
      /
      <Typography component="span" color={getColor("Red")}>
        {redRoles.length}
      </Typography>
      /
      <Typography component="span" color={getColor("Gray")}>
        {grayRoles.length}
      </Typography>
    </>
  );
};
