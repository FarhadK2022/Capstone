import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateReviewForm from "./CreateReviewForm";
import "./CreateReviewFormModal.css";

function CreateReviewFormModal(vehicle) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>Create Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateReviewForm setShowModal={setShowModal} vehicle={vehicle} />
        </Modal>
      )}
    </>
  );
}

export default CreateReviewFormModal;
