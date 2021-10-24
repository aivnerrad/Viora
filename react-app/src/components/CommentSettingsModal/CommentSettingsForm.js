import React, { useState } from "react";


function CommentSettingsForm({ title, comment, post, setShowModal, setEditing, setDeleted }) {
  const [comments, setComments] = useState([])
  console.log("SETDELETED ------>>>", setDeleted)
  const openEditTextArea = () => {
    setEditing(true)
    setShowModal(false)
  }

  const deleteComment = async () => {
    await fetch(`/api/topic/${title}/${post.id}/comments/${comment.id}`, {
      method: 'DELETE'
    })
    const newComments = await fetch(`/api/topic/${title}/${post.id}/comments`).then((res) => res.json())
    setShowModal(false)
    setDeleted(true)
    return setComments(newComments.comments)
  }

  return (
    <>
      <button onClick={() => deleteComment()}>Delete</button>
      <button onClick={() => openEditTextArea()}>Edit Comment</button>
    </>
  );
}
export default CommentSettingsForm;
