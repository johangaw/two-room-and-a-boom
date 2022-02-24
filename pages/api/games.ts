import type { NextApiRequest, NextApiResponse } from "next";
import { Game } from "../../types/domain";
import { ErrorDTO } from "../../types/dto";
import { createGame, getGames } from "../../services/gameService";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game | Game[] | ErrorDTO>
) {
  if (req.method === "POST") {
    const newGameData = req.body;
    // TODO validate game data...

    return createGame(newGameData)
      .then((game) => {
        res.status(201).json(game);
      })
      .catch((err) => {
        res
          .status(422)
          .json({ message: `Unable to create game: ${err?.message ?? err}` });
      });
  } else if (req.method === "GET") {
    return getGames()
      .then((games) => {
        res.status(200).json(games);
      })
      .catch((err) => {
        res
          .status(422)
          .json({ message: `Unable to create game: ${err?.message ?? err}` });
      });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
