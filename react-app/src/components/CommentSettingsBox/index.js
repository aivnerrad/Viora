import React, { useState } from "react";
import "./CommentSettingsBox.css"

function CommentSettingsBox({ title, comment, post, setEditing, setCommentDeleted, setEditedCommentId }) {
  const [comments, setComments] = useState([])
  console.log("SETDELETED ------>>>", setCommentDeleted)
  const openEditTextArea = () => {
    setEditing(true)
    setEditedCommentId(comment.id)
  }

  const deleteComment = async () => {
    await fetch(`/api/topic/${title}/${post.id}/comments/${comment.id}`, {
      method: 'DELETE'
    })
    const newComments = await fetch(`/api/topic/${title}/${post.id}/comments`).then((res) => res.json())
    setCommentDeleted(true)
    return setComments(newComments.comments)
  }

  return (
    <div id="comment-settings-box">
      <button onClick={() => deleteComment()}><p id="button-text">Delete</p></button>
      <button onClick={() => openEditTextArea()}><p id="button-text">Edit Comment</p></button>
    </div>
  );
}
export default CommentSettingsBox;
