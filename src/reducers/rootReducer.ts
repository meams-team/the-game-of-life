import { combineReducers } from "redux";

import gameOfLifeReducer from "./gameOfLifeReducer";

export default combineReducers({
  gameOfLife: gameOfLifeReducer
});
