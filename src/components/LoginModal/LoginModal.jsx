import "./LoginModal.css";
import React, { useState, useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function LoginModal({
  onClose,
  handleLogin,
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
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    validateEmail(e.target.value);
    setEmail(e.target.value);
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
    } else {
      setPasswordError("");
    }
  };
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  const resetInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin({ email, password });
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
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
      buttonText={isLoading ? "Signing In..." : "Sign In"}
      title="Sign in"
      onClose={onClose}
      isOpen={activeModal === "login"}
      onSubmit={handleSubmit}
      altButtonClick={handleRegisterClick}
      altButtonText="Sign Up"
    >
      <label htmlFor="loginEmail" className="modal__label">
        Email{" "}
        <input
          id="loginEmail"
          type="email"
          className="modal__input"
          placeholder="Enter email"
          onChange={handleEmailChange}
          value={email || ""}
          required
        />
      </label>
      <span className="modal__error">{emailError}</span>
      <label htmlFor="loginPassword" className="modal__label">
        Password{" "}
        <input
          id="loginPassword"
          type="password"
          className="modal__input"
          placeholder="Enter password"
          onChange={handlePasswordChange}
          value={password || ""}
          required
        />
      </label>
      <span className="modal__error">{passwordError}</span>
    </ModalWithForm>
  );
}
