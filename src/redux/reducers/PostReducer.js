const state = { post: [], userList: [] };

export function PostReducer(state = {}, payload) {
  console.log(payload);
  switch (payload.type) {
    case "GET_POSTS":
      return { ...state, post: payload.data };
    default:
      return state;
  }
}
