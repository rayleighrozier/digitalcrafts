function user(state = "", action) {
  switch (action.type) {
    case "CHANGE_USER":
      return (state = action.payload);
    default:
      return state;
  }
}

export default user;
