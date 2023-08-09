import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginForm from "../LoginFormModal/LoginForm";
import SignupForm from "../SignupFormModal/SignupForm";
import CreateVehicleForm from "../CreateVehicleFormModal/CreateVehicleForm";
import { Modal } from "../../context/Modal";
import "./Navigation.css";
import image from "../../images/GetThere.png";
// import SearchFiltersModal from "../Filters";


function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const [showModal, setShowModal] = useState(false);
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          {sessionUser ? (
            <Link exact to="/cars">
              <img
                className="navbar-icon"
                src={image}
                alt="GetThere logo"
              ></img>
            </Link>
          ) : (
            <Link exact to="/cars">
              <img
                className="navbar-icon"
                src={image}
                alt="GetThere logo"
              ></img>
            </Link>
          )}
        </div>
{/* <SearchFiltersModal/> */}
        <div className="navbar-right">
          <li>
            {isLoaded && (
              <ProfileButton
                user={sessionUser}
                setLogin={setLogin}
                setShowModal={setShowModal}
              />
            )}
          </li>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              {login ? (
                <LoginForm setShowModal={setShowModal} />
              ) : (
                <SignupForm setShowModal={setShowModal} />
              )}
              {login && sessionUser ? (
                <CreateVehicleForm setShowModal={setShowModal} />
              ) : (
                false
              )}
            </Modal>
          )}
        </div>
      </div>
    </>
  );
}

export default Navigation;
