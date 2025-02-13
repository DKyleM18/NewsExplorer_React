import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import About from "../About/About";
import SavedNews from "../SavedNews/SavedNews";
import SavedNewsNavigation from "../SavedNewsNavigation/SavedNewsNavigation";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { SavedNewsArticlesContext } from "../../contexts/SavedNewsArticlesContext";
import { checkToken, authorize, signup } from "../../utils/auth";
import { setToken, getToken, removeToken } from "../../utils/token";
import { getItems } from "../../utils/api";
import { getNewsItems } from "../../utils/newsApi";
import "./App.css";
import MobileNavigation from "../MobileNavigation/MobileNavigation";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [
    // userToken,
    setUserToken,
  ] = useState("");
  const [savedCards, setSavedCards] = useState([]);
  const [newsCards, setNewsCards] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [
    savedKeywords,
    // setSavedKeywords
  ] = useState([]);
  const [noResults, setNoResults] = useState(false);

  const isMobile = useMediaQuery({ query: "(max-width: 595px)" });

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleModalClose = () => {
    setActiveModal("");
  };

  // function handleSubmit(request) {
  //   request().then(handleModalClose).catch(console.error);
  // }

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
    return authorize({ email, password })
      .then((res) => {
        setToken(res.token);
        setUserToken(res.token);
        return res.token;
      })
      .then((token) => {
        return checkToken(token);
      })
      .then((user) => {
        setCurrentUser(user.data);
        setIsLoggedIn(true);
        handleModalClose();
      });
  };

  const handleLogout = () => {
    removeToken();
    setCurrentUser({});
    setIsLoggedIn(false);
  };

  const handleRegistration = ({ name, email, password }) => {
    return signup({ name, email, password });
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

  useEffect(() => {
    getItems()
      .then((data) => {
        setSavedCards(data);
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SavedNewsArticlesContext.Provider value={savedCards}>
        <div className="app">
          <div className="app__content">
            <Routes>
              <Route
                path="/"
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
                    <About />
                  </>
                }
              />
              <Route
                path="/saved-news"
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
                    <SavedNews
                      savedKeywords={savedKeywords}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
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
