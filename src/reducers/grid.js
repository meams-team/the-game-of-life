import { GENERATE_GRID } from "../actions/actionTypes";

const initialState = {};

const grid = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_GRID:
      return { ...state, counter: state.counter + 1 };

    default:
      return state;
  }
};

export default grid;
