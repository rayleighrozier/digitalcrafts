function password(state = "", action) {
  switch (action.type) {
    case "CHANGE_PASSWORD":
      return (state = action.payload);
    default:
      return state;
  }
}

export default password;
