import { GRID_DATA } from "./actionTypes";

export const generateGridData = (rowCount: number, columnCount: number) => {
  const grid: [] = [];
  for (let i = 0; i < columnCount; i++) {
    (grid[i] as []) = [];
    for (let j = 0; j < rowCount; j++) {
      (grid[i][j] as number) = Math.floor(Math.random() * 2);
    }
  }
  return {
    type: GRID_DATA,
    payload: grid
  };
};

export const play = (gridFull: number[][]) => {
  let g = gridFull;
  let g2 = [...gridFull];

  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      let count = 0;
      if (i > 0) if (g[i - 1][j]) count++;
      if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
      if (i > 0 && j < 50 - 1) if (g[i - 1][j + 1]) count++;
      if (j < 50 - 1) if (g[i][j + 1]) count++;
      if (j > 0) if (g[i][j - 1]) count++;
      if (i < 50 - 1) if (g[i + 1][j]) count++;
      if (i < 50 - 1 && j > 0) if (g[i + 1][j - 1]) count++;
      if (i < 50 - 1 && j < 50 - 1) if (g[i + 1][j + 1]) count++;
      if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = 0;
      if (!g[i][j] && count === 3) g2[i][j] = 1;
    }
  }
  return {
    type: GRID_DATA,
    payload: g2
  };
};
