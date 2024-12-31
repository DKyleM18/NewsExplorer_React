import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <div className="app-content">
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
        </div>
        <RegisterModal />
        <LoginModal />
      </div>
    </>
  );
}

export default App;
