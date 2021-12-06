import type { NextApiRequest, NextApiResponse } from "next";
import { startGame } from "../../../../services/gameService";
import { Game } from "../../../../types/domain";
import { ErrorDTO } from "../../../../types/dto";

export default function startGameHandler(
  req: NextApiRequest,
  res: NextApiResponse<Game | ErrorDTO>
) {
  if (req.method === "POST") {
    const gameId = req.query.gameId as string;

    return startGame(gameId)
      .then((game) => res.status(200).json(game))
      .catch((err) => {
        res
          .status(422)
          .json({ message: `Unable to start game: ${err?.message ?? err}` });
      });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
