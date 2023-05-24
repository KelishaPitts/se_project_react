const ItemModal = ({ selectedCard, onClose }) => {
  return (
    <div className="modal">
      <div className="modal__container-item">
        <button
          className="modal__button-close"
          type="button"
          onClick={onClose}
        />
        <img className="modal__image" src={selectedCard.link} />
        <div className="modal__name">{selectedCard.name}</div>
        <div className="modal__weather">Weather: {selectedCard.weather}</div>
      </div>
    </div>
  );
};
export default ItemModal;
