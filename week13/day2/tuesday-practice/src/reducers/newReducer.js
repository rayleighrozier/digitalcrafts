function newfield(state = "", action) {
  switch (action.type) {
    case "CHANGE_NEWFIELD":
      return (state = action.payload);
    default:
      return state;
  }
}

export default newfield;
