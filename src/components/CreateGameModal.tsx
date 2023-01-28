import { Modal, TextField, Stack, IconButton, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useCreateGameMutation } from "../api/games";
import { Close, Check } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { generatePath, useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../App";

interface IProps {
  onClose: () => void;
}

export const CreateGameModal: FC<IProps> = ({ onClose }) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [createGame, { data }] = useCreateGameMutation();
  const { currentUserName } = useSelector((state: RootState) => state.app);

  const onSubmit = () => {
    createGame({ title: value, currentUserName });
  };

  useEffect(() => {
    if (data?.id) {
      navigate(generatePath(ROUTE_PATHS.Game, { gameId: data.id }), {
        replace: true,
      });
    }
  }, [data?.id]);

  return (
    <Modal open onClose={onClose} sx={{ display: "flex" }}>
      <Stack
        bgcolor="#363752"
        m="auto"
        p="16px"
        borderRadius="8px"
        gap="16px"
        minWidth="300px"
      >
        <Typography m="auto" fontFamily="cursive" fontSize="18px">
          Create new game
        </Typography>
        <TextField
          label="Game name"
          onChange={({ target: { value } }) => setValue(value)}
        />
        <Stack direction="row" justifyContent="space-between">
          <IconButton onClick={onClose}>
            <Close sx={{ color: "#FFAD11" }} fontSize="large" />
          </IconButton>
          <IconButton onClick={onSubmit}>
            <Check sx={{ color: "#7321DB" }} fontSize="large" />
          </IconButton>
        </Stack>
      </Stack>
    </Modal>
  );
};
