import "./Modal.css";

export default function Modal({
  title,
  isOpen,
  onClose,
  altButtonText,
  altButtonClick,
}) {
  return (
    <div className={`modal ${isOpen && "modal__opened"}`}>
      <div className="modal__content">
        <h2 className="confirm-modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close" />
        <button
          type="button"
          className="modal__alt-button"
          onClick={altButtonClick}
        >
          <span className="modal__alt-button-text">{altButtonText}</span>
        </button>
      </div>
    </div>
  );
}
