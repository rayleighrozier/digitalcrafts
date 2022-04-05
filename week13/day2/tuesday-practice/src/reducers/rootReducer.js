import { combineReducers } from "redux";
import name from "./nameReducer";
import email from "./emailReducer";
import password from "./passwordReducer";
// const initialState = {
//   name: "",
//   email: "",
//   password: "",
// };
// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "ON_START":
//       return {
//         ...state,
//       };
//     case "CHANGE_NAME":
//       return {
//         ...state,
//         name: action.payload,
//       };
//     case "CHANGE_EMAIL":
//       s;
//       return { ...state, email: action.payload };
//     case "CHANGE_PASSWORD":
//       return { ...state, password: action.payload };
//     default:
//       return state;
//   }
// }

export default combineReducers({ name, email, password });
