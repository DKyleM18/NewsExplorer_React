import "./ConfirmModal.css";
import Modal from "../Modal/Modal";

export default function ConfirmModal({ onClose, activeModal, setActiveModal }) {
  const handleSigninClick = () => {
    setActiveModal("login");
  };
  return (
    <Modal
      activeModal={activeModal}
      title="Registration successfully completed!"
      onClose={onClose}
      altButtonText="Sign in"
      altButtonClick={handleSigninClick}
      isOpen={activeModal === "confirm"}
    />
  );
}
