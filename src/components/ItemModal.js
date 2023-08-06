import { useContext } from "react";
import {CurrentUserContext} from "../contexts/CurrentUserContext";
import "../blocks/modal.css"




const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
  const currentUser = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner._id === currentUser?.data?._id;

  // Creating a variable which you'll then set in `className` for the delete button
  const itemDeleteButtonClassName = (
    `modal__delete-button ${isOwn ? 'modal__delete-button_visible' : 'modal__delete-button_hidden'}`
  );


  return (
    <div className="modal">
      <div className="modal__container-item">
        <button
          className="modal__button-close"
          type="button"
          onClick={onClose}
        />
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__description">
          <div>
            <div className="modal__name">{selectedCard.name}</div>
            <div className="modal__weather">
              Weather: {selectedCard.weather}
            </div>
          </div>

          <button
            type="text"
            onClick={() => onCardDelete(selectedCard)}
            className={itemDeleteButtonClassName}
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
