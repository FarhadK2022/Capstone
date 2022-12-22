import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditReviewForm from "./EditReviewForm";
// import "./CreateReviewFormModal.css";

function EditReviewFormModal(review) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>Edit Review</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditReviewForm setShowModal={setShowModal} review={review} />
        </Modal>
      )}
    </>
  );
}

export default EditReviewFormModal;
