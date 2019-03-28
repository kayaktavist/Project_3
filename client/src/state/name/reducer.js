export default function(state = "Tucker", action) {
  switch (action.type) {
    case "CHANGE_NAME":
      return action.payload.name;
    default:
      return state;
  }
}
