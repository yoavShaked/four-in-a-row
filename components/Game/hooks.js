import { useState } from "react";
import { checkGameStatus } from "./utils";

const initialState = (row, column) => () => ({
  board: new Array(row)
    .fill()
    .map(() => new Array(column).fill().map(() => "")),
  gameOver: false,
  player: 0,
  message: "",
});

export const useGame = ({ row, column }) => {
  const [state, setState] = useState(initialState(row, column));

  const onPresCell = (selectedColumn) => () => {
    const { board, player } = state;
    for (let i = row - 1; i >= 0; i--) {
      if (!board[i][selectedColumn]) {
        board[i][selectedColumn] = !player ? "red" : "green";
        break;
      }
    }

    const gameStatus = checkGameStatus(board, row, column);

    switch (gameStatus) {
      case "red": {
        setState({ ...state, gameOver: true, message: "Red Wins!", board });
        break;
      }
      case "green": {
        setState({ ...state, gameOver: true, message: "Green Wins!", board });
        break;
      }
      case "drow": {
        setState({ ...state, gameOver: true, message: "Drow!", board });
        break;
      }
      default: {
        setState({ ...state, board, player: !player ? 1 : 0 });
      }
    }
  };

  const reset = () => {
    setState(initialState(row, column)());
  };

  return { onPresCell, state, reset };
};
