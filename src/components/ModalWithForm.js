import "../blocks/modal.css";
import "../blocks/form.css";

const ModalWithForm = ({ children, buttonText, title, onClose, name, onSubmit }) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-form">
        <button
          type="button"
          className="modal__button-close"
          onClick={onClose}
        />
        <h3 className="form__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">{children}
        <button className="modal__button-submit" type="submit">
          {buttonText}
        </button>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
