import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import CommentSettingsForm from './CommentSettingsForm';
import './CommentSettingsModal.css';

function CommentSettingsModal({ comment, post, title, setEditing, setDeleted, setEditedCommentId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button id="edit-comment-button" onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faEllipsisH} /></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentSettingsForm setShowModal={setShowModal}comment={comment} title={title} post={post} setEditing={setEditing} setDeleted={setDeleted} setEditedCommentId={setEditedCommentId}/>
        </Modal>
      )}
    </>
  );
}

export default CommentSettingsModal;
