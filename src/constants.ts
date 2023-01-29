export const SHAPE_COLORS = {
  x: "#7321DB",
  o: "#FFAD11",
};

export const INIT_BOARD = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export const WIN_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export const CROSS_LINE_POSITIONS = [
  { top: "53px", left: "55px", width: "245px" },
  { top: "172px", left: "55px", width: "245px" },
  { top: "290px", left: "55px", width: "245px" },
  { top: "170px", left: "-63px", width: "245px" },
  { top: "170px", left: "55px", transform: "rotate(90deg)", width: "245px" },
  { top: "175px", left: "174px", transform: "rotate(90deg)", width: "245px" },
  { top: "172px", left: "21px", width: "310px", transform: "rotate(45deg)" },
  { top: "172px", left: "21px", width: "310px", transform: "rotate(-45deg)" },
];
