import type { NextApiRequest, NextApiResponse } from "next";
import { joinGame } from "../../../../services/gameService";
import { Game, Player } from "../../../../types/domain";
import { ErrorDTO } from "../../../../types/dto";

export default function playersInGameHandler(
  req: NextApiRequest,
  res: NextApiResponse<Game | ErrorDTO>
) {
  if (req.method === "POST") {
    const gameId = req.query.gameId as string;
    const player: Player = req.body;
    // TODO validate player data...

    return joinGame(player, gameId)
      .then((game) => res.status(201).json(game))
      .catch((err) => {
        res
          .status(422)
          .json({ message: `Unable to join game: ${err?.message ?? err}` });
      });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
