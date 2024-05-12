import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    like_id,
    title,
    image,
    updated_at,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner

  return <div>Post displays here</div>;
};

export default Post;
