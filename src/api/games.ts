import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const INIT_BOARD = [null, null, null, null, null, null, null, null, null];

export type ShapeType = "x" | "o";
export type StatusType = "waiting" | "starting" | "end";

export interface IGame {
  id: string;
  board?: string[];
  player1Shape?: ShapeType;
  player2Shape?: ShapeType;
  turn?: string;
  status?: StatusType;
  winner?: string;
  title: string;
  player1: string;
  player2?: string;
  created: string;
}

export const gamesApi = createApi({
  reducerPath: "gamesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/collections/games`,
  }),
  tagTypes: ["Game"],
  endpoints: (build) => ({
    getGames: build.query<IGame[], void>({
      query() {
        return {
          url: "/records",
        };
      },
      transformResponse(response: { items: IGame[] }) {
        return response?.items;
      },
      providesTags: ["Game"],
    }),
    getGame: build.query<IGame, string>({
      query(id) {
        return {
          url: `/records/${id}`,
        };
      },
      providesTags: ["Game"],
    }),
    createGame: build.mutation<
      IGame,
      { title: string; currentUserName: string }
    >({
      query({ title, currentUserName }) {
        return {
          url: "/records",
          method: "POST",
          body: {
            player1: currentUserName,
            title: title,
            board: INIT_BOARD,
            status: "waiting",
          },
        };
      },
    }),
    updateGame: build.mutation<void, Partial<IGame>>({
      query(game) {
        return {
          url: `/records/${game.id}`,
          method: "PATCH",
          body: game,
        };
      },
    }),
  }),
});

export const {
  useCreateGameMutation,
  useUpdateGameMutation,
  useGetGameQuery,
  useGetGamesQuery,
} = gamesApi;
