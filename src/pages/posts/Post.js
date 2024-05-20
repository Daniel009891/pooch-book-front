import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Post = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    downvotes_count,
    downvote_id,
    saved_id,
    title,
    content,
    image,
    updated_at,
    postPage,
    setPosts,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // custom code

  const handleDownvote = async () => {
    try {
      const { data } = await axiosRes.post("/downvotes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                downvotes_count: post.downvotes_count + 1,
                downvote_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // custom code

  const handleUnDownvote = async () => {
    try {
      await axiosRes.delete(`/downvotes/${downvote_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                downvotes_count: post.downvotes_count - 1,
                downvote_id: null,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // custom code

  const handleSave = async () => {
    try {
      const { data } = await axiosRes.post("/saved/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? {
                ...post,
                saved_id: data.id,
              }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  // custom code

  const handleUnsave = async () => {
    try {
      await axiosRes.delete(`/saved/${saved_id}`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) => {
          return post.id === id
            ? { ...post, saved_count: post.saved_count - 1, saved_id: null }
            : post;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner ? (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>You cannot save your own post!</Tooltip>}
              >
                <i className="fa-regular fa-bookmark" />
              </OverlayTrigger>
            ) : saved_id ? (
              <span onClick={handleUnsave}>
                <i className={`fa-solid fa-bookmark ${styles.Bookmark}`} />
              </span>
            ) : currentUser ? (
              <span onClick={handleSave}>
                <i
                  className={`fa-regular fa-bookmark ${styles.BookmarkOutline}`}
                />
              </span>
            ) : (
              <OverlayTrigger
                placement="top"
                overlay={<Tooltip>Sign in to save posts!</Tooltip>}
              >
                <Link to="/signin">
                  <i className="fa-regular fa-bookmark" />
                </Link>
              </OverlayTrigger>
            )}
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like a post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't downvote your own post!</Tooltip>}
            >
              <i className={`fas fa-arrow-down ${styles.Space}`} />
            </OverlayTrigger>
          ) : downvote_id ? (
            <span onClick={handleUnDownvote}>
              <i
                className={`fas fa-arrow-down ${styles.Arrow} ${styles.Space}`}
              />
            </span>
          ) : currentUser ? (
            <span onClick={handleDownvote}>
              <i
                className={`fas fa-arrow-down ${styles.ArrowOutline} ${styles.Space}`}
              />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to downvote a post!</Tooltip>}
            >
              <i className="fas fa-arrow-down" />
            </OverlayTrigger>
          )}
          {downvotes_count}
          <Link>
            <i className={`far fa-comments ${styles.Space}`} />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
