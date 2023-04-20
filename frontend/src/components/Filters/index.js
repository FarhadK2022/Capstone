import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import FilterList from "./FilterList";
import"./Filters.css"


function SearchFiltersModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="button" onClick={() => setShowModal(true)}>
        <img className="fa-solid fa-sliders" alt="filters"></img> Filters
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <FilterList setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default SearchFiltersModal;
