export const generateGridData = (rowCount: number, columnCount: number) => {
  const grid: [] = [];
  for (let i = 0; i < columnCount; i++) {
    (grid[i] as []) = [];
    for (let j = 0; j < rowCount; j++) {
      (grid[i][j] as number) = Math.floor(Math.random() * 2);
    }
  }

  return grid;
};
