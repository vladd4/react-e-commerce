function removeLiked(e, likes, setLikes) {
  let id = e.target.closest(".item").id;
  console.log(id);
  document
    .getElementById(id)
    .querySelector(".like-btn")
    .classList.remove("liked");
  document.getElementById(id).querySelector(".like-btn").disabled = false;
  console.log(likes);
  setLikes((current) => current.filter((likes) => likes.id !== id));
}

const LikeItem = ({ likeItem, likes, setLikes }) => {
  return (
    <div className="col-lg-2 item" id={likeItem.id}>
      <button
        onClick={(e) => {
          removeLiked(e, likes, setLikes);
        }}
        disabled={false}
        className="like-btn liked"
      >
        &#9825;
      </button>
      <img className="item-img" src={likeItem.img} alt=""></img>
      <p className="item-p">{likeItem.title}</p>
      <div className="item-price">
        <div className="price-block">
          <p className="price-p">
            ЦІНА: <br></br> <strong id="str-p">{likeItem.price}</strong>
            <strong id="str-p-b">$</strong>
          </p>
        </div>
        <button disabled={true} className="add-btn">
          &#x2b;
        </button>
      </div>
    </div>
  );
};

export default LikeItem;
