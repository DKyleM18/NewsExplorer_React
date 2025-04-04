import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import SavedNewsNavigation from "../SavedNewsNavigation/SavedNewsNavigation";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import MobileNavigation from "../MobileNavigation/MobileNavigation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedNewsArticlesContext } from "../../contexts/SavedNewsArticlesContext";
import { checkToken, signin, signup } from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";
import { getSavedCards } from "../../utils/api";
import { getNewsItems } from "../../utils/newsApi";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedCards, setSavedCards] = useState([]);
  const [newsCards, setNewsCards] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [noResults, setNoResults] = useState(false);
  const [userToken, setUserToken] = useState("");
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 595px)" });

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  function handleSubmit(request) {
    request().then(handleModalClose).catch(console.error);
  }

  const handleSearchSubmit = (keyword) => {
    setKeyword(keyword);
    setIsLoading(true);

    getNewsItems(keyword)
      .then((response) => {
        const articles = response.articles;
        if (!articles || articles.length === 0) setNoResults(true);
        setNewsCards(
          articles.map((article) => {
            return {
              ...article,
              keyword: keyword,
            };
          })
        );
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
    setNoResults(false);
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

  const handleLogout = () => {
    removeToken();
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const handleRegistration = ({ username, email, password }) => {
    const makeRequest = () => {
      return signup({ username, email, password }).then(() =>
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
    getSavedCards()
      .then((data) => {
        setSavedCards(data);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const token = getToken();
    if (token) {
      checkToken(token)
        .then((res) => {
          setCurrentUser(res);
          setUserToken(token);
          setIsLoggedIn(true);
        })
        .catch(console.error)
        .finally(() => setIsAuthChecked(true));
    } else {
      setIsAuthChecked(true);
    }
  }, []);

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedNewsArticlesContext.Provider value={savedCards}>
        <div className="app">
          <div className="app__content">
            <Routes>
              <Route
                path="/news"
                element={
                  <>
                    <Header
                      isLoggedIn={isLoggedIn}
                      handleLoginClick={handleLoginClick}
                      handleLogoutClick={handleLogout}
                      currentUser={currentUser}
                      handleSearchSubmit={handleSearchSubmit}
                      keyword={keyword}
                      setKeyword={setKeyword}
                      isMobile={isMobile}
                    />
                    <Main
                      isLoggedIn={isLoggedIn}
                      isLoading={isLoading}
                      newsCards={newsCards}
                      noResults={noResults}
                    />
                  </>
                }
              />
              <Route
                path="/news/saved-news"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    {isMobile ? (
                      <MobileNavigation
                        isLoggedIn={isLoggedIn}
                        currentUser={currentUser}
                        handleLogoutClick={handleLogout}
                        handleLoginClick={handleLoginClick}
                      />
                    ) : (
                      <SavedNewsNavigation
                        isLoggedIn={isLoggedIn}
                        currentUser={currentUser}
                        handleLogoutClick={handleLogout}
                      />
                    )}
                    <SavedNews isLoggedIn={isLoggedIn} />
                  </ProtectedRoute>
                }
              />
              <Route path="/news/*" element={<Navigate to="/news" replace />} />
            </Routes>
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
          <ConfirmModal
            onClose={handleModalClose}
            activeModal={activeModal}
            setActiveModal={setActiveModal}
          />
        </div>
      </SavedNewsArticlesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
