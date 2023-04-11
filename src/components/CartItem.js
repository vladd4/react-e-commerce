function removeCartItem(e, setCart, setTotalPrice, totalPrice) {
  let id_n = e.target.closest(".cart-item").id;
  let price_n = e.target
    .closest(".cart-item")
    .querySelector("#str-p").textContent;
  console.log(id_n, price_n);
  document
    .getElementById(id_n)
    .querySelector(".add-btn")
    .classList.remove("added");
  document.getElementById(id_n).querySelector(".add-btn").disabled = false;
  setCart((current) => current.filter((cart) => cart.id !== id_n));
  setTotalPrice(totalPrice - price_n);
}

const CartItem = ({ cartItem, setCart, setTotalPrice, totalPrice }) => {
  return (
    <div className="cart-item" id={cartItem.id}>
      <img className="cart-item-img" src={cartItem.img} alt=""></img>
      <div className="cart-p-div">
        <p className="item-p">{cartItem.title}</p>
        <div className="price-block">
          <p className="price-cart">
            <div>
              <strong id="str-p">{cartItem.price} </strong>
              <strong id="str-p-b">$</strong>
            </div>
            <button
              onClick={(e) => {
                removeCartItem(e, setCart, setTotalPrice, totalPrice);
              }}
              className="times-cart-btn"
            >
              &times;
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CartItem;
