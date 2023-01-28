import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";
import { LoginUser } from "./components/LoginUser";
import { Game } from "./components/Game";
import { Games } from "./components/Games";
import { Routes, Route, Navigate } from "react-router-dom";
import PocketBase from "pocketbase";
import { gamesApi } from "./api/games";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";

const pb = new PocketBase(import.meta.env.VITE_BACKEND_URL);

export const ROUTE_PATHS = {
  Login: "/",
  Games: "/games",
  Game: "/games/:gameId",
};

export const App: FC = () => {
  const dispatch = useDispatch();
  const { currentUserName } = useSelector((state: RootState) => state.app);

  pb.collection("games").subscribe("*", () => {
    dispatch(gamesApi.util.invalidateTags(["Game"]));
  });

  return (
    <Box height="100vh" bgcolor="#202135">
      <Toaster position="top-right" />
      <Routes>
        <Route path={ROUTE_PATHS.Login} element={<LoginUser />} />
        <Route
          path={ROUTE_PATHS.Games}
          element={
            currentUserName ? <Games /> : <Navigate to={ROUTE_PATHS.Login} />
          }
        />
        <Route
          path={ROUTE_PATHS.Game}
          element={
            currentUserName ? <Game /> : <Navigate to={ROUTE_PATHS.Login} />
          }
        />
      </Routes>
    </Box>
  );
};
