import { useEffect } from "react";
import { WIN_COMBINATIONS } from "../constants";
import { useGame } from "./useGame";
import { IGame, useUpdateGameMutation } from "../api/games";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const getWinnerPredicate = (
  { board, turn, player1, player1Shape, player2Shape }: Partial<IGame>,
  winCombination: number[]
): boolean =>
  winCombination.every(
    (position) =>
      board?.[position] === (turn === player1 ? player2Shape : player1Shape)
  );

export const useWinnerEffect: VoidFunction = () => {
  const {
    player1Shape,
    player2Shape,
    board,
    id,
    turn,
    player1,
    player2,
    status,
  } = useGame();
  const [updateGame] = useUpdateGameMutation();
  const { currentUserName } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (
      status === "starting" &&
      player1 === currentUserName &&
      (board.every((shape) => shape) ||
        WIN_COMBINATIONS.some((winCombination) =>
          getWinnerPredicate(
            { board, turn, player1, player1Shape, player2Shape },
            winCombination
          )
        ))
    ) {
      updateGame({
        id,
        status: "end",
        winner:
          WIN_COMBINATIONS.findIndex((winCombination) =>
            getWinnerPredicate(
              { board, turn, player1, player1Shape, player2Shape },
              winCombination
            )
          ) !== -1
            ? turn === player1
              ? player2
              : player1
            : "",
      });
    }
  }, [
    board,
    status,
    turn,
    player1,
    player1Shape,
    player2Shape,
    id,
    currentUserName,
  ]);
};
