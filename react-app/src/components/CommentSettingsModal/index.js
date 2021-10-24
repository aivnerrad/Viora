import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import CommentSettingsForm from './CommentSettingsForm';

function CommentSettingsModal({ comment, post, title, setEditing, setDeleted }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faEllipsisH} /></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentSettingsForm setShowModal={setShowModal}comment={comment} title={title} post={post} setEditing={setEditing} setDeleted={setDeleted}/>
        </Modal>
      )}
    </>
  );
}

export default CommentSettingsModal;
