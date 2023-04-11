import CartItem from "./CartItem";
import Img8 from "../../src/imgs/image 8.png";

function hideCart() {
  document.querySelector(".cart-div").classList.remove("show");
  if (
    document
      .querySelector(".changed-components")
      .contains(document.querySelector(".swiper"))
  ) {
    document.querySelector(".list-menu").classList.remove("inactive");
    document.querySelector(".main-header").classList.remove("inactive");
    document.querySelector(".swiper").classList.remove("inactive");
  } else {
    document.querySelector(".like-div").classList.remove("inactive");
    document.querySelector(".main-header").classList.remove("inactive");
  }
}

async function postCart(url, data) {
  const response = await fetch(url, {
    method: "POST",
    body: data,
  });
  return await response.json();
}

function sendCart(setCart, setModalActive, cart) {
  postCart("https://jsonplaceholder.typicode.com/todos", JSON.stringify(cart));
  console.log("Cart was send!");
  setCart([]);
  document.querySelectorAll(".add-btn").forEach((item) => {
    item.classList.remove("added");
  });
  document
    .querySelectorAll(".add-btn")
    .forEach((item) => (item.disabled = false));
  setModalActive(true);
  hideCart();
  if (
    document
      .querySelector(".changed-components")
      .contains(document.querySelector(".swiper"))
  ) {
    document.querySelector(".list-menu").classList.add("inactive");
    document.querySelector(".main-header").classList.add("inactive");
    document.querySelector(".swiper").classList.add("inactive");
  } else {
    document.querySelector(".like-div").classList.add("inactive");
    document.querySelector(".main-header").classList.add("inactive");
  }
}

const Cart = ({ cart, setCart, setTotalPrice, totalPrice, setModalActive }) => {
  return (
    <div className="cart-div">
      {cart.length >= 1 ? (
        <div className="cart-scroll-block">
          {cart.map((cartItem) => {
            return (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                setCart={setCart}
                setTotalPrice={setTotalPrice}
                totalPrice={totalPrice}
              ></CartItem>
            );
          })}
        </div>
      ) : (
        <div className="empty-cart">
          <img className="empty-cart-img" src={Img8} alt=""></img>
          <p>Корзина порожня. Додайте хоча б один товар.</p>
        </div>
      )}
      {cart.length >= 1 ? (
        <button
          type="button"
          data-toggle="modal"
          onClick={() => {
            sendCart(setCart, setModalActive, cart);
          }}
          className="cart-remove-btn"
        >
          Оформити замовлення
        </button>
      ) : (
        <button onClick={hideCart} className="cart-remove-btn">
          Повернутись назад
        </button>
      )}
    </div>
  );
};

export default Cart;
