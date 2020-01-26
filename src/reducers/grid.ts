// types
import { IGridInitState, IAction } from "../entities/interfaces";

import { GRID_DATA } from "../actions/actionTypes";

const initialState: IGridInitState = {
  gridData: []
};

const grid = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GRID_DATA:
      return { ...state, gridData: action.payload };

    default:
      return state;
  }
};

export default grid;
