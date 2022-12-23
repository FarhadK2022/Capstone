import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditVehicleForm from "./EditVehicleForm";
import "./EditVehicleFormModal.css";

function EditVehicleFormModal({ vehicle }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>Edit Vehicle</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditVehicleForm vehicle={vehicle} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditVehicleFormModal;
