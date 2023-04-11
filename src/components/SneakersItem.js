function addToCart(e, cart, setCart, totalPrice, setTotalPrice) {
  let id_n = e.target.closest(".item").id;
  let title_n = e.target.closest(".item").querySelector(".item-p").textContent;
  let img_n = e.target.closest(".item").querySelector(".item-img").src;
  let price_n = e.target
    .closest(".item-price")
    .querySelector("#str-p").textContent;

  setCart([...cart, { id: id_n, title: title_n, img: img_n, price: price_n }]);
  console.log(cart);

  e.target.classList.add("added");
  e.target.disabled = true;
  setTotalPrice(totalPrice + parseInt(price_n));
}
function addToLikes(e, likes, setLikes) {
  console.log(e.target.closest(".item").id);
  let id_n = e.target.closest(".item").id;
  let title_n = e.target.closest(".item").querySelector(".item-p").textContent;
  let img_n = e.target.closest(".item").querySelector(".item-img").src;
  let price_n = e.target.closest(".item").querySelector("#str-p").textContent;

  setLikes([
    ...likes,
    { id: id_n, title: title_n, img: img_n, price: price_n },
  ]);

  e.target.closest(".like-btn").classList.add("liked");
  e.target.closest(".like-btn").disabled = true;
  console.log(likes);
}

const SneakersItem = ({
  item,
  cart,
  setCart,
  totalPrice,
  setTotalPrice,
  likes,
  setLikes,
}) => {
  return (
    <div className="col-lg-2 item" id={"item-" + item.id}>
      <button
        disabled={false}
        onClick={(e) => {
          addToLikes(e, likes, setLikes);
        }}
        className="like-btn"
      >
        &#9825;
      </button>
      <img className="item-img" src={item.img} alt=""></img>
      <p className="item-p">{item.title}</p>
      <div className="item-price">
        <div className="price-block">
          <p className="price-p">
            ЦІНА: <br></br> <strong id="str-p">{item.price}</strong>
            <strong id="str-p-b">$</strong>
          </p>
        </div>
        <button
          disabled={false}
          onClick={(e) => {
            addToCart(e, cart, setCart, totalPrice, setTotalPrice);
          }}
          className="add-btn"
        >
          &#x2b;
        </button>
      </div>
    </div>
  );
};

export default SneakersItem;
