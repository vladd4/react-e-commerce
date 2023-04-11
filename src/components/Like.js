import { Link } from "react-router-dom";
import LikeItem from "./LikeItem";
import Sad from "../imgs/image 9.png";

const Like = ({ likes, setLikes }) => {
  return (
    <div className="like-div container">
      <h1 className="list-h">Мої закладки</h1>
      {likes.length >= 1 ? (
        <div className="like-items row">
          {likes.map((likeItem) => {
            return (
              <LikeItem
                key={likeItem.id}
                likeItem={likeItem}
                likes={likes}
                setLikes={setLikes}
              ></LikeItem>
            );
          })}
        </div>
      ) : (
        <div className="empty-like">
          <img className="empty-like-img" src={Sad} alt=""></img>
          <h2 className="empty-like-h">Закладок немає!</h2>
          <h5 className="empty-like-h5">Ви ще нічого не додали.</h5>
          <Link to="/">
            <button className="like-remove-btn">Повернутись назад</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Like;
