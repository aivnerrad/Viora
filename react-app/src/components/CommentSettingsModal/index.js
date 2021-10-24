import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import CommentSettingsForm from './CommentSettingsForm';

function CommentSettingsModal({ setEditing }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}><FontAwesomeIcon icon={faEllipsisH} /></button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CommentSettingsForm setShowModal={setShowModal} setEditing={setEditing}/>
        </Modal>
      )}
    </>
  );
}

export default CommentSettingsModal;
