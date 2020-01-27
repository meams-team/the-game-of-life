// types
import { IGridInitState, IAction } from "../entities/interfaces";

import { GRID_DATA } from "../actions/actionTypes";

const initialState: IGridInitState = {
  gridData: [],
  isStarted: false
};

const gameOfLifeReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case GRID_DATA:
      console.log("action.payload", action.payload);
      return { ...state, gridData: action.payload };

    default:
      return state;
  }
};

export default gameOfLifeReducer;
