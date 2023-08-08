import "../blocks/header.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import "../blocks/modal.css";

const MobileModal = ({
  onCreateModal,
  onLogin,
  onLoginModal,
  onRegisterModal,
  onClose,
}) => {
  const currentUser = useContext(CurrentUserContext);
  const userData = currentUser ? currentUser : { name: "", avatar: "" };
  return (
    <div className="modal__header">
      <div className="modal__container-item">
        <button
          className="modal__hamburger-button-close"
          type="button"
          onClick={() => onClose()}
        />

        <div className="header__nav">
          <button
            className="header__addButton"
            type="submit"
            onClick={() => onCreateModal()}
          >
            {" "}
            + Add Clothes
          </button>
          {onLogin ? (
            <div className="header__avatar-container">
              <div className="header__name">{userData.name}</div>
              <div className="header__avatar">
                <NavLink to="/profile">
                  <img
                    className="header__avatar-image"
                    src={userData.avatar}
                    alt="avatar"
                  />
                </NavLink>
              </div>
            </div>
          ) : (
            <div>
              <button
                className="header__signUp"
                type="submit"
                onClick={() => {
                  onRegisterModal();
                }}
              >
                Sign Up
              </button>
              <button
                className="header__logIn"
                type="submit"
                onClick={() => {
                  onLoginModal();
                }}
              >
                Log In
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MobileModal;
