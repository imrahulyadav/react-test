export function getPosts(dispatch) {
  return async function () {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "GET_POSTS", data: res.posts }));
  };
}
