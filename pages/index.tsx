import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Container maxWidth="xs" disableGutters>
        <Image
          src="/2raab_full_copy.png"
          height={542}
          width={629}
          alt="Two room and a Boom by Allan Gerding and Sean Mccoy"
        />
      </Container>
      <Container maxWidth="xs">
        <Stack direction="column" alignItems="center" spacing={4} marginTop={4}>
          <Link href="/new" passHref>
            <Button size="large" variant="contained" fullWidth>
              New game
            </Button>
          </Link>
          <Link href="/join" passHref>
            <Button size="large" variant="outlined" fullWidth>
              Join game
            </Button>
          </Link>
          <Link
            href="https://www.ultraboardgames.com/two-rooms-and-a-boom/game-rules.php"
            passHref
          >
            <Button size="large" variant="outlined" fullWidth>
              Rules
            </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
};

export default Home;
