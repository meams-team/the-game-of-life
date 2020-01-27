import { GRID_DATA } from "./actionTypes";

import { Dispatch } from "redux";

export const generateGridData = (rowCount: number, columnCount: number) => {
  const grid: [] = [];
  for (let i = 0; i < columnCount; i++) {
    (grid[i] as []) = [];
    for (let j = 0; j < rowCount; j++) {
      (grid[i][j] as number) = Math.floor(Math.random() * 2);
    }
  }

  const grid2 = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
  ];

  return grid2;
};

export const play = (grid: number[][], rowCount: number, columnCount: number) => {
  let prev = grid;
  let next = JSON.parse(JSON.stringify(grid));

  for (let i = 0; i < rowCount; i++) {
    for (let j = 0; j < columnCount; j++) {
      let count = 0;
      if (i > 0) {
        if (prev[i - 1][j]) count++;
      }
      if (i > 0 && j > 0) {
        if (prev[i - 1][j - 1]) count++;
      }
      if (i > 0 && j < columnCount - 1) {
        if (prev[i - 1][j + 1]) count++;
      }
      if (j < columnCount - 1) {
        if (prev[i][j + 1]) count++;
      }
      if (j > 0) {
        if (prev[i][j - 1]) count++;
      }
      if (i < rowCount - 1) {
        if (prev[i + 1][j]) count++;
      }
      if (i < rowCount - 1 && j > 0) {
        if (prev[i + 1][j - 1]) count++;
      }
      if (i < rowCount - 1 && columnCount - 1) {
        if (prev[i + 1][j + 1]) count++;
      }
      if (prev[i][j] && (count < 2 || count > 3)) {
        next[i][j] = 0;
      }
      if (!prev[i][j] && count === 3) {
        next[i][j] = 1;
      }
    }
  }
  return next;
};

export const startPlay = (rowCount: number, columnCount: number, timeInterval: number) => {
  return (dispatch: Dispatch) => {
    let grid = generateGridData(rowCount, columnCount);

    dispatch({
      type: GRID_DATA,
      payload: grid
    });

    // set tick
    setInterval(() => {
      grid = play(grid, 5, 5);
      dispatch({
        type: GRID_DATA,
        payload: grid
      });
    }, 1000);
  };
};
