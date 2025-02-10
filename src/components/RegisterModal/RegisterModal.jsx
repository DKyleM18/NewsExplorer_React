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
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
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
    setActiveModal("confirm");
    // handleRegistration({ email, password, username });
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
      email={email}
      password={password}
      emailError={emailError}
      passwordError={passwordError}
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
      <span className="modal__error">{emailError}</span>
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
      <span className="modal__error">{passwordError}</span>
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
