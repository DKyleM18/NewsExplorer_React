import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./RegisterModal.css";

export default function RegisterModal({
  onClose,
  handleRegistration,
  activeModal,
  setActiveModal,
  isLoading,
}) {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [username, setUsername] = useState("");
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const resetInputs = () => {
    setEmail("");
    setPassword("");
    setUsername("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegistration({ email, password, username });
  };

  const handleSigninClick = () => {
    setActiveModal("login");
  };

  useEffect(() => {
    if (activeModal) {
      resetInputs();
    }
  }, [activeModal]);

  return (
    <ModalWithForm
      activeModal={activeModal}
      buttonText={isLoading ? "Signing up..." : "Sign up"}
      title="Sign Up"
      altButtonText="Sign in"
      onClose={onClose}
      isOpen={activeModal === "register"}
      onSubmit={handleSubmit}
      altButtonClick={handleSigninClick}
    >
      <label htmlFor="registerEmail" className="modal__label">
        Email{" "}
        <input
          id="registerEmail"
          type="email"
          className="modal__input"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email || ""}
          required
        />
      </label>
      <label htmlFor="registerPassword" className="modal__label">
        Password{" "}
        <input
          id="registerPassword"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password || ""}
          required
        />
      </label>
      <label htmlFor="registerUsername" className="modal__label">
        Username{" "}
        <input
          id="registerUsername"
          type="text"
          className="modal__input"
          placeholder="Enter your username"
          onChange={handleUsernameChange}
          value={username || ""}
          required
        />
      </label>
    </ModalWithForm>
  );
}
