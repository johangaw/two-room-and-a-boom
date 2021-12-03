import { NextApiRequest, NextApiResponse } from "next";
import { getGame } from "../../../services/gameService";
import { ErrorDTO, GameDTO } from "../../../types/dto";

export default function gameHandler(
  req: NextApiRequest,
  res: NextApiResponse<GameDTO | ErrorDTO>
) {
  if (req.method === "GET") {
    const gameId = req.query.gameId as string;

    getGame(gameId)
      .then((game) => ({
        id: game.id,
        name: game.name,
        players: game.players,
        roles: game.roles,
      }))
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
