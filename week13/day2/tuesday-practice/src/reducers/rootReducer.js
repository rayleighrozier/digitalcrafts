import { combineReducers } from "redux";
import name from "./nameReducer";
import email from "./emailReducer";
import password from "./passwordReducer";
import newfield from "./newReducer";
import userlist from "./userListReducer";
import user from "./userReducer";
import weather from "./weatherReducer";

export default combineReducers({
  name,
  email,
  password,
  newfield,
  user,
  userlist,
  weather,
});
