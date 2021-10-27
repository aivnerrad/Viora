import React, { useState } from "react";
import "./PostSettingsBox.css"

function PostSettingsBox({ title, post, setEditingPost, setPostDeleted, setEditedPostId}) {
  const [posts, setPosts] = useState([])
  const openEditTextArea = () => {
    setEditingPost(true)
    setEditedPostId(post.id)
  }

  const deletePost = async () => {
    await fetch(`/api/topic/${title}/${post.id}`, {
      method: 'DELETE'
    })
    const newPosts = await fetch(`/api/topic/${title}`).then((res) => res.json())
    setPostDeleted(true)
    return setPosts(newPosts.topic.posts)
  }

  return (
    <div id="comment-settings-box">
      <button onClick={() => deletePost()}><p id="button-text">Delete</p></button>
      <button onClick={() => openEditTextArea()}><p id="button-text">Edit Post</p></button>
    </div>
  );
}
export default PostSettingsBox;
