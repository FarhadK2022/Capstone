import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditBookingForm from "./EditBookingForm";
import "./EditBookingFormModal.css";

function EditBookingFormModal(booking) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>
      Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditBookingForm setShowModal={setShowModal} booking={booking} />
        </Modal>
      )}
    </>
  );
}

export default EditBookingFormModal;
