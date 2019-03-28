export function changeName(name) {
  return {
    type: "CHANGE_NAME",
    payload: {
      name: name
    }
  };
}
