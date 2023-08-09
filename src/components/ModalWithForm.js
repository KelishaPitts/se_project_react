import "../blocks/modal.css";
import "../blocks/form.css";

const ModalWithForm = ({
  children,
  buttonText,
  altText,
  title,
  onClose,
  name,
  onSubmit,
}) => {
  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__container-form">
        <button
          type="button"
          className="modal__button-close"
          onClick={onClose}
        />
        <h3 className="form__title">{title}</h3>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="form__button-container">
            <button className="modal__button-submit" type="submit">
              {buttonText}
            </button>
            <p className="modal__text-alt">{altText}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
