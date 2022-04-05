const initialState = {
  name: "",
  email: "",
  password: "",
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ON_START":
      return {
        ...state,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "CHANGE_EMAIL":
      return { ...state, email: action.payload };
    case "CHANGE_PASSWORD":
      return { ...state, password: action.payload };
    default:
      return state;
  }
}

export default rootReducer;
