function checkVertical(board, rows, columns) {
  // Check only if row is 3 or greater
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c] &&
          board[r][c] === board[r - 2][c] &&
          board[r][c] === board[r - 3][c]
        ) {
          return board[r][c];
        }
      }
    }
  }
}

function checkHorizontal(board, rows, columns) {
  // Check only if column is 3 or less
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r][c + 1] &&
          board[r][c] === board[r][c + 2] &&
          board[r][c] === board[r][c + 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
}

function checkDiagonalRight(board, rows, columns) {
  // Check only if row is 3 or greater AND column is 3 or less
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c + 1] &&
          board[r][c] === board[r - 2][c + 2] &&
          board[r][c] === board[r - 3][c + 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
}

function checkDiagonalLeft(board, rows, columns) {
  // Check only if row is 3 or greater AND column is 3 or greater
  for (let r = 3; r < rows; r++) {
    for (let c = 3; c < columns; c++) {
      if (board[r][c]) {
        if (
          board[r][c] === board[r - 1][c - 1] &&
          board[r][c] === board[r - 2][c - 2] &&
          board[r][c] === board[r - 3][c - 3]
        ) {
          return board[r][c];
        }
      }
    }
  }
}

function checkDraw(board, rows, columns) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      if (board[r][c] === '') {
        return false;
      }
    }
  }
  return "draw";
}

export const checkGameStatus = (board, row, column) => {
  return (
    checkVertical(board, row, column) ||
    checkHorizontal(board, row, column) ||
    checkDiagonalLeft(board, row, column) ||
    checkDiagonalRight(board, row, column) ||
    checkDraw(board, row, column)
  );
};
