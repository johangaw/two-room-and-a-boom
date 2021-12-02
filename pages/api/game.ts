import type { NextApiRequest, NextApiResponse } from "next";
import { Game } from "../../types/domain";
import { ErrorDTO, NewGameDTO } from "../../types/dto";
import * as memoryStorage from "../../repositories/memoryStorage";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Game | ErrorDTO>
) {
  console.log(req.method);
  if (req.method === "POST") {
    const newGameData = req.body;
    // TODO validate game data...

    createGame(newGameData)
      .then((game) => {
        res.status(201).json(game);
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

async function createGame(newGameData: NewGameDTO): Promise<Game> {
  const game = await memoryStorage.createGame(newGameData);
  return game;
}
