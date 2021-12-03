import type { NextApiRequest, NextApiResponse } from "next";
import { joinGame } from "../../../../services/gameService";
import { Game, Player } from "../../../../types/domain";
import { ErrorDTO, NewPlayerDTO } from "../../../../types/dto";

export default function playersInGameHandler(
  req: NextApiRequest,
  res: NextApiResponse<Player | ErrorDTO>
) {
  if (req.method === "POST") {
    const gameId = req.query.gameId as string;
    const player: NewPlayerDTO = req.body;
    // TODO validate player data...

    joinGame(player, gameId)
      .then((player) => res.status(201).json(player))
      .catch((err) => {
        res
          .status(422)
          .json({ message: `Unable to join game: ${err?.message ?? err}` });
      });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
