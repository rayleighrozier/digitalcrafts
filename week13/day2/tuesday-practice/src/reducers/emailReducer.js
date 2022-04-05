function email(state = "", action) {
  switch (action.type) {
    case "CHANGE_EMAIL":
      return (state = action.payload);
    default:
      return state;
  }
}

export default email;
