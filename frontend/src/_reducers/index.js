import { combineReducers } from "redux";

import { authentication } from "./authentication.reducer";
import { users } from "./users.reducer";
import { timeReducer } from "./time.reducer";

const rootReducer = combineReducers({
  authentication,
  users,
  timeReducer,
});

export default rootReducer;
