const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
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
            className="modal__button-delete"
          >
            Delete item
          </button>
        </div>
      </div>
    </div>
  );
};
export default ItemModal;
