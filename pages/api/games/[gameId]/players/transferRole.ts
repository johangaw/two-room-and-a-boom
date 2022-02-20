import type { NextApiRequest, NextApiResponse } from "next";
import { transferPlayerRole } from "../../../../../services/gameService";
import { Role } from "../../../../../types/domain";
import { ErrorDTO, TransferPlayerRoleDTO } from "../../../../../types/dto";

export default function transferPlayerRoleHandler(
  req: NextApiRequest,
  res: NextApiResponse<Role[] | ErrorDTO>
) {
  if (req.method === "POST") {
    const gameId = req.query.gameId as string;
    const data: TransferPlayerRoleDTO = req.body;
    // TODO validate player data...

    return transferPlayerRole(gameId, data)
      .then((roles) => res.status(200).json(roles))
      .catch((err) => {
        res
          .status(422)
          .json({ message: `Unable transfer role: ${err?.message ?? err}` });
      });
  } else {
    res.status(404).json({ message: "Method not supported" });
  }
}
