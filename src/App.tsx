import { FC } from "react";
import { Toaster } from "react-hot-toast";
import { Box } from "@mui/material";
import { LoginUser } from "./components/LoginUser";
import { Game } from "./components/Game";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export const App: FC = () => {
  const { currentUserName } = useSelector((state: RootState) => state.app);
  return (
    <Box height="100vh" bgcolor="#202135">
      <Toaster position="top-right" />
      {currentUserName ? <Game /> : <LoginUser />}
    </Box>
  );
};
