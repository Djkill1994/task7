import { useNavigate, useParams } from "react-router-dom";
import { IGame, useGetGameQuery } from "../api/games";
import { useEffect } from "react";
import { ROUTE_PATHS } from "../App";

export const useGame = (): Partial<IGame> => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const { data, isError } = useGetGameQuery(gameId || "", { skip: !gameId });

  useEffect(() => {
    if (isError) {
      navigate(ROUTE_PATHS.Games, { replace: true });
    }
  }, [isError]);

  return data || {};
};
