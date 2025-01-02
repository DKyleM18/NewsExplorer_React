import React from "react";
import { Link } from "react-router-dom";
// import SearchForm from "../SearchForm/SearchForm";
import header_background from "../../assets/main-background.jpg";
import "./Header.css";

export default function Header({ handleLoginClick }) {
  return (
    <header className="header">
      <div className="header_bar">
        <h1 className="header_bar-title">News Explorer</h1>
        <div className="header_bar-buttons">
          <button type="button" className="header_bar-button-home">
            Home
          </button>
          <button
            onClick={handleLoginClick}
            type="text"
            className="header_bar-button-register"
          >
            Sign In
          </button>
        </div>
      </div>
      {/* <SearchForm /> */}
    </header>
  );
}
