import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function NewsCardList({ isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);
  return (
    <div>
      <div>
        <NewsCard />
      </div>
    </div>
  );
}
