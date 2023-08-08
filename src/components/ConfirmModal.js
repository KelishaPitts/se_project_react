import "../blocks/modal.css";

const ConfirmModal = ({onDelete, onClose, selectedCard}) => {
  
  return (
    <div className="modal__confirm">
      <div className="modal__confirm-item">
        <button
          type="button"
          className="modal__confirm-close"
          onClick={onClose}
          />

      <div>Are you sure you want to delete this item?</div>
      <div>This action is irreversible.</div>
        <button
        className="modal__confirm-delete"
        onClick={()=>onDelete(selectedCard._id)}>Yes, delete item</button>
        <button
        className="modal__button-cancel"
        onClick={()=>onClose()}>Cancel</button>
      </div>
      </div>
  );
}
export default ConfirmModal;