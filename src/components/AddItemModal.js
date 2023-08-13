import { useEffect, useState } from "react";
import ModalWithForm from "./ModalWithForm.js";

// onAddItem refers to handleAddItemSubmit, which is declared in App.js
const AddItemModal = ({ isOpen, onAddItem, onCloseModal, isLoading }) => {
  // declare state for each input field
  const [name, setName] = useState("");
  const [imageUrl, setURL] = useState("");
  const [weather, setWeather] = useState("");
 
  // use a useEffect hook to reset the input field state to empty strings when
  // the modal is opened

  useEffect(() => {
    if (isOpen === true) {
      setName("");
      setURL("");
    }
  }, [isOpen]);

  // create onChange handlers corresponding to each state variable
  const onNameChange = (evt) => {
    setName(evt.target.value);
  };
  const onUrlChange = (evt) => {
    setURL(evt.target.value);
  };
  const onWeatherChange = (evt) => {
    const target = evt.target;
    const id = target.id;
    setWeather(id);
  };

  function handleSubmit(evt) {
    // call onAddItem with appropriate arguments
    evt.preventDefault();
    onAddItem(name, weather, imageUrl);
  }

  return (
    
    <ModalWithForm
      buttonText={isLoading ? "Adding..." : "Add garment"}
      title="New Garment"
      onClose={onCloseModal}
      onSubmit={handleSubmit}
    >
      <div>
        <label className="form__label">
          Name
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
          Image
          <input
            value={imageUrl}
            className="form__input"
            type="url"
            name="link"
            minLength="1"
            maxLength="300"
            placeholder="Image URL"
            onChange={onUrlChange}
          />
        </label>
      </div>
      <p>Select the weather type:</p>
      <div>
        <div>
          <input
            onChange={onWeatherChange}
            className="form__input-radio"
            type="radio"
            id="hot"
            value="hot"
            name="weather-type"
          />
          <label className="form__label-radio">Hot</label>
        </div>
        <div>
          <input
            onChange={onWeatherChange}
            className="form__input-radio"
            type="radio"
            id="warm"
            value="warm"
            name="weather-type"
          />
          <label className="form__label-radio">Warm</label>
        </div>
        <div>
          <input
            onChange={onWeatherChange}
            className="form__input-radio"
            type="radio"
            id="cold"
            value="cold"
            name="weather-type"
          />
          <label className="form__label-radio">Cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
