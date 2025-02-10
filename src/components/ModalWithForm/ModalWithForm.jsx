import "./ModalWithForm.css";

export default function ModalWithForm({
  children,
  title,
  buttonText,
  onClose,
  isOpen,
  onSubmit,
  altButtonClick,
  altButtonText,
  activeModal,
  email,
  password,
  emailError,
  passwordError,
}) {
  return (
    <div className={`modal ${isOpen && `modal__opened modal__${activeModal}`}`}>
      <div className="modal__content modal__content_type_form">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <form action="" onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__buttons">
            <button
              type="submit"
              className="modal__submit"
              disabled={!email || !password || emailError || passwordError}
            >
              {buttonText}
            </button>
            <div className="modal__alt-button-set">
              <button
                type="button"
                className="modal__alt-button"
                onClick={altButtonClick}
              >
                Or{" "}
                <span className="modal__alt-button-text">{altButtonText}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
