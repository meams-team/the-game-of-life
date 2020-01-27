import { GRID_DATA } from "./actionTypes";

// utils
import { generateGridData, play } from "../utils";
// types
import { Dispatch } from "redux";

export const startPlay = (rowCount: number, columnCount: number, timeInterval: number) => {
  return (dispatch: Dispatch) => {
    let grid = generateGridData(rowCount, columnCount);

    // set tick
    setInterval(() => {
      grid = play(grid, rowCount, columnCount);
      dispatch({
        type: GRID_DATA,
        payload: grid
      });
    }, timeInterval);
  };
};
