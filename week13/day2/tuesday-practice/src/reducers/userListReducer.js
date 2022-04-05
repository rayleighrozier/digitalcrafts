function userlist(state = [], action) {
  switch (action.type) {
    case "CHANGE_USERLIST":
      return (state = [...state, action.payload]);
    default:
      return state;
  }
}

export default userlist;
