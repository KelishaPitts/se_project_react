import { useState} from "react";
import ModalWithForm from "./ModalWithForm";

const ChangeProfileModal = ({onChangeProfile, onCloseModal, currentUser, isLoading}) => {
  // declare state for each input field

  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  

  // create onChange handlers corresponding to each state variable
  const onNameChange = (evt) => {
    setName(evt.target.value);
  };
  const onAvatarChange = (evt) => {
    setAvatar(evt.target.value);
  };

  function handleSubmit(evt) {
    // call onAddItem with appropriate arguments
    evt.preventDefault();
    onChangeProfile({ name, avatar });
  }
  return (
    <ModalWithForm
      buttonText={isLoading ? "Saving..." : "Save Changes"}
      title="Change profile data"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <div>
        <label className="form__label">
          *Name
          <input
            value={name}
            className="form__input"
            type="text"
            name="text"
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
    </ModalWithForm>
  );
};

export default ChangeProfileModal;
