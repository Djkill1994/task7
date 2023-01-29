import { useGame } from "./useGame";
import { useUpdateGameMutation } from "../api/games";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

export const UseInitGameEffect: VoidFunction = () => {
  const { id, player1, player2, status } = useGame();
  const [updateGame] = useUpdateGameMutation();
  const { currentUserName } = useSelector((state: RootState) => state.app);

  useEffect(() => {
    if (player2 && status === "waiting" && player1 === currentUserName) {
      const randomNumber = Math.random();
      updateGame({
        id,
        status: "starting",
        player1Shape: randomNumber > 0.5 ? "x" : "o",
        player2Shape: randomNumber > 0.5 ? "o" : "x",
        turn: randomNumber > 0.5 ? player1 : player2,
      });
    }
  }, [status, player1, player2, id, currentUserName]);
};
