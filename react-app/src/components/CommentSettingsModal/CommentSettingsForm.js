import React from "react";


function CommentSettingsForm({ setShowModal, setEditing }) {
  const openEditTextArea = () => {
    setEditing(true)
    setShowModal(false)
  }

  return (
    <>
      <button onClick={() => console.log("Delete")}>Delete</button>
      <button onClick={() => openEditTextArea()}>Edit Comment</button>
    </>
  );
}
export default CommentSettingsForm;
