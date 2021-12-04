import { NextApiRequest, NextApiResponse } from "next";
import { getGame } from "../../../services/gameService";
import { Game } from "../../../types/domain";
import { ErrorDTO } from "../../../types/dto";

export default async function gameHandler(
  req: NextApiRequest,
  res: NextApiResponse<Game | ErrorDTO>
) {
  if (req.method === "GET") {
    const gameId = req.query.gameId as string;

    return getGame(gameId)
      .then((game) => ({ ...game, assignedRoles: [] }))
      .then((game) => res.status(200).json(game))
      .catch((err) => {
        res
          .status(404)
          .json({ message: `Unable to get game: ${err?.message ?? err}` });
      });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
