import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
// import About from "../About/About";
import SavedNews from "../SavedNews/SavedNews";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { checkToken, signin, signup } from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";
import { getItems } from "../../utils/api";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [userToken, setUserToken] = useState("");

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  function handleSubmit(request) {
    setIsLoading(true);
    request()
      .then(handleModalClose)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }

  const handleSearchSubmit = () => {
    const makeRequest = () => {
      return getItems().then((res) => res.articles);
    };
  };

  const handleLogin = ({ email, password }) => {
    const makeRequest = () => {
      return signin({ email, password })
        .then((res) => {
          setToken(res);
          setUserToken(res.token);
          return res.token;
        })
        .then((token) => {
          return checkToken(token);
        })
        .then((user) => {
          setCurrentUser(user);
          setIsLoggedIn(true);
        });
    };
    handleSubmit(makeRequest);
  };

  const handleRegistration = ({ name, email, password }) => {
    const makeRequest = () => {
      return signup({ name, email, password }).then(() =>
        handleLogin({ email, password })
      );
    };
    handleSubmit(makeRequest);
  };

  useEffect(() => {
    function handleCloseMethods(evt) {
      if (evt.key === "Escape" || evt.key === "esc" || evt.keyCode === 27) {
        handleModalClose();
      }
      if (evt.type === "click" && evt.target.classList.contains("modal")) {
        handleModalClose();
      }
    }

    if (activeModal !== "") {
      document.addEventListener("keydown", handleCloseMethods);
      document.addEventListener("click", handleCloseMethods);
    }

    return () => {
      document.removeEventListener("keydown", handleCloseMethods);
      document.removeEventListener("click", handleCloseMethods);
    };
  }, [activeModal]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setUserToken(token);
          setIsLoggedIn(true);
        })
        .catch(console.error);
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__content">
          <Header
            isLoggedIn={isLoggedIn}
            handleRegisterClick={handleRegisterClick}
            handleLoginClick={handleLoginClick}
            currentUser={currentUser}
            handleSearchSubmit={handleSearchSubmit}
          />
          <Routes>
            <Route path="/" element={<Main isLoggedIn={isLoggedIn} />} />
            <Route
              path="/saved-news"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <SavedNews />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          {/* <About />                     */}
          <Footer />
        </div>
        <RegisterModal
          onClose={handleModalClose}
          handleRegistration={handleRegistration}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          isLoading={isLoading}
        />
        <LoginModal
          onClose={handleModalClose}
          handleLogin={handleLogin}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
          isLoading={isLoading}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
