import type { NextApiRequest, NextApiResponse } from "next";
import { transferPlayerRole } from "../../../../../services/gameService";
import { ErrorDTO, TransferPlayerRoleDTO } from "../../../../../types/dto";

export default function transferPlayerRoleHandler(
  req: NextApiRequest,
  res: NextApiResponse<void | ErrorDTO>
) {
  if (req.method === "POST") {
    const gameId = req.query.gameId as string;
    const data: TransferPlayerRoleDTO = req.body;
    // TODO validate player data...

    return transferPlayerRole(gameId, data)
      .then(() => res.status(200).json())
      .catch((err) => {
        res
          .status(422)
          .json({ message: `Unable to join game: ${err?.message ?? err}` });
      });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
