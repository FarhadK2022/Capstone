import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import UserPage from "./UserPage";


function UserPageModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>My Profile</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UserPage setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default UserPageModal;
