import Logo from "../imgs/image4.png";
import Cart from "../imgs/172551_bag_shopping_icon.png";
import Like from "../imgs/172492_like_icon.png";
import { Link } from "react-router-dom";

function showCart() {
  document.querySelector(".cart-div").classList.add("show");
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

const Header = ({ totalPrice, cart }) => {
  return (
    <header className="main-header">
      <div className="header-div">
        <div className="logo-div">
          <img className="logo" src={Logo} alt="React-sneakers"></img>
          <div>
            <Link to="/">
              <h4 className="react-sneak-h4">REACT SNEAKERS</h4>
            </Link>
            <h5 className="react-sneak-h5">Магазин кращих кросівок</h5>
          </div>
        </div>
        <div className="icons-div">
          <div className="cart-block">
            <img
              onClick={showCart}
              className="cart-btn"
              src={Cart}
              alt=""
            ></img>
            <span className="span-cart">{cart.length}</span>
          </div>
          <Link to="/likes">
            <img className="cart-btn" src={Like} alt=""></img>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
