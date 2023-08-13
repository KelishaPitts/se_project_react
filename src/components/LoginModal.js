import { useState, useEffect } from "react";
import ModalWithForm from "./ModalWithForm";

const LoginModal = ({ isOpen, onSignin, onCloseModal, isLoading}) => {
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  useEffect(() => {
    if (isOpen === true) {
      setEmail("");
      setPassword("");
    }
  }, [isOpen]);

  // create onChange handlers corresponding to each state variable
  const onEmailChange = (evt) => {
    setEmail(evt.target.value);
  };
  const onPasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  function handleSubmit(evt) {
    // call onAddItem with appropriate arguments
    evt.preventDefault();
    onSignin({ email, password });
  }
  return (
    <ModalWithForm
      buttonText={isLoading ? "Saving..." : "Login"}
      altText="or Register"
      title="Log in"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
      link="signup"
    >
      <div>
        <label className="form__label">
          Email
          <input
            value={email}
            className="form__input"
            type="email"
            name="email"
            minLength="1"
            maxLength="300"
            placeholder="Email"
            onChange={onEmailChange}
          />
        </label>
      </div>
      <div>
        <label className="form__label">
          Password
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
    </ModalWithForm>
  );
};
export default LoginModal;
