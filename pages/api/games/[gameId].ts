import { NextApiRequest, NextApiResponse } from "next";
import { getGame, startGame, updateGame } from "../../../services/gameService";
import { Game } from "../../../types/domain";
import { ErrorDTO, GameUpdateDTO } from "../../../types/dto";

export default async function gameHandler(
  req: NextApiRequest,
  res: NextApiResponse<Game | ErrorDTO>
) {
  const gameId = req.query.gameId as string;

  if (req.method === "GET") {
    return getGame(gameId)
      .then((game) => ({ ...game, assignedRoles: [] }))
      .then((game) => res.status(200).json(game))
      .catch((err) => {
        res
          .status(404)
          .json({ message: `Unable to get game: ${err?.message ?? err}` });
      });
  } else if (req.method === "PATCH") {
    const updatedGameData: GameUpdateDTO = req.body;
    // TODO validate game data...

    return updateGame(gameId, updatedGameData)
      .then((game) => res.status(200).json(game))
      .catch((err) => {
        res
          .status(404)
          .json({ message: `Unable to update game: ${err?.message ?? err}` });
      });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
