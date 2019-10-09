import { combineReducers } from "redux";
import authentication from "./authentication";
import stats from "./Stats";
import applications from "./application";

export default combineReducers({
  authentication,
  stats,
  applications
});
