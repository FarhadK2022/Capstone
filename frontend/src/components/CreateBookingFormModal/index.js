import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import CreateBookingForm from "./CreateBookingForm";
import "./CreateBookingFormModal.css";

function CreateBookingFormModal(vehicle) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>
        Create Booking
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateBookingForm setShowModal={setShowModal} vehicle={vehicle} />
        </Modal>
      )}
    </>
  );
}

export default CreateBookingFormModal;
