import { CHANGE_QUERY, CHANGE_WEATHER } from "../action-types";
const initialState = {
  city: "",
  temperature: "",
  q: "",
};
function weather(state = initialState, action) {
  switch (action.type) {
    case CHANGE_QUERY:
      return { ...state, q: action.payload };
    case CHANGE_WEATHER:
      return {
        ...state,
        city: action.payload.city,
        temperature: action.payload.temperature,
        q: initialState.q,
      };
    default:
      return state;
  }
}

export default weather;
