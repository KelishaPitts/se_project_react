import "../blocks/modal.css";
import "../blocks/form.css";

const ModalWithForm = ({
  children,
  buttonText = "Add garment",
  title,
  onClose,
  name,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-form">
        <button
          type="button"
          className="modal__button-close"
          onClick={onClose}
        ></button>
        <h3 className="form__title">{title}</h3>
        <form className="modal__form">{children}</form>
        <button className="modal__button-submit" type="submit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ModalWithForm;
