import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm";

const RegisterModal = ({ isOpen, onRegister, onCloseModal,onSignin }) => {
  // declare state for each input field
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  useEffect(() => {
    if (isOpen === true) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  // create onChange handlers corresponding to each state variable
  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };
  const onNameChange = (evt) => {
    setName(evt.target.value);
  };
  const onAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  function handleSubmit(evt) {
    // call onAddItem with appropriate arguments
    evt.preventDefault();
    onRegister({ email, password, name, avatar });
  }
  return (
    <ModalWithForm
      buttonText="Next"
      title="Sign up"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <div>
        <label className="form__label">
          Email*
          <input
            value={email}
            className="form__input"
            type="email"
            name="email"
            minLength="1"
            maxLength="30"
            placeholder="Email"
            onChange={onEmailChange}
          />
        </label>
      </div>
      <div>
        <label className="form__label">
          Password*
          <input
            value={password}
            className="form__input"
            type="password"
            name="password"
            minLength="1"
            maxLength="10"
            placeholder="Password"
            onChange={onPasswordChange}
          />
        </label>
      </div>
      <div>
        <label className="form__label">
          Name*
          <input
            value={name}
            className="form__input"
            type="text"
            name="name"
            minLength="1"
            maxLength="30"
            placeholder="Name"
            onChange={onNameChange}
          />
        </label>
      </div>
      <div>
        <label className="form__label">
          Avatar URL*
          <input
            value={avatar}
            className="form__input"
            type="url"
            name="link"
            minLength="1"
            maxLength="300"
            placeholder="Avatar URL"
            onChange={onAvatarChange}
          />
        </label>
      </div>
      <button
      onClick={()=>onSignin()} 
      className="form__button-login">or Login</button>
    </ModalWithForm>
  );
};
export default RegisterModal;
