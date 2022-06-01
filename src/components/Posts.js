import { useState } from "react";
import { connect } from "react-redux";
import { Post } from "../components";
import { getPosts } from "../redux/action";

const PostsComponent = (props) => {
  const { posts, getPosts } = props;

  useState(() => {
    getPosts();
  }, []);

  return (
    <div>
      Posts
      {posts &&
        !!posts.length &&
        posts.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    posts: state.post.post,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPosts: dispatch(getPosts),
  };
}

export const Posts = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsComponent);
