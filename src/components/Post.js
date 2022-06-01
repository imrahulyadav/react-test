import React from "react";
import { useState } from "react";

const PostComponent = (props) => {
  const { post } = props;
  const [user, setUser] = useState({});

  useState(() => {
    fetch(`https://dummyjson.com/users/${post.userId}`)
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  return (
    <>
      <div>
        <strong>Title:</strong> {post.title}
      </div>
      <div>
        <strong>Name:</strong> {user.firstName} {user.lastName}
      </div>
      <br />
    </>
  );
};

export const Post = React.memo(PostComponent);
