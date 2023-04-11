import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Slider from "./components/Slider";
import SneakersList from "./components/SneakersList";
import Img1 from "../src/imgs/image 5.jpg";
import Img2 from "../src/imgs/image 5 (1).jpg";
import Img3 from "../src/imgs/image 5 (2).jpg";
import Img4 from "../src/imgs/image 5 (3).jpg";
import Img5 from "../src/imgs/image 6.jpg";
import Img6 from "../src/imgs/image 6 (1).jpg";
import Img7 from "../src/imgs/image 6 (2).jpg";
import Img8 from "../src/imgs/image 6 (3).jpg";
import Img9 from "../src/imgs/image 6 (4).jpg";
import Img10 from "../src/imgs/image 6 (5).jpg";
import Cart from "./components/Cart";
import Like from "./components/Like";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import Totop from "./components/Totop";

function App() {
  let [items, setItems] = useState([
    {
      id: 1,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      img: Img1,
      price: 12999,
    },
    {
      id: 2,
      title: "Мужские Кроссовки Nike Air Max 270",
      img: Img2,
      price: 10999,
    },
    {
      id: 3,
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      img: Img3,
      price: 8599,
    },
    {
      id: 4,
      title: "Кроссовки Puma X Aka Boku Future Rider",
      img: Img4,
      price: 9550,
    },
    {
      id: 5,
      title: "Мужские Кроссовки Under Armour Curry 8",
      img: Img5,
      price: 15199,
    },
    {
      id: 6,
      title: "Мужские Кроссовки Nike Kyrie 7",
      img: Img6,
      price: 12229,
    },
    {
      id: 7,
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      img: Img7,
      price: 7599,
    },
    {
      id: 8,
      title: "Мужские Кроссовки Nike LeBron XVIII",
      img: Img8,
      price: 16599,
    },
    {
      id: 9,
      title: "Мужские Кроссовки Nike Lebron XVIII Low",
      img: Img9,
      price: 13599,
    },
    {
      id: 10,
      title: "Мужские Кроссовки Nike Kyrie Flytrap IV",
      img: Img10,
      price: 11499,
    },
  ]);
  let [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem("cart"))
  );

  useEffect(() => {
    const data = window.localStorage.getItem("cart");
    if (data !== null) setCart(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  let [likes, setLikes] = useState(
    JSON.parse(window.localStorage.getItem("likes"))
  );
  useEffect(() => {
    const data1 = window.localStorage.getItem("likes");
    if (data1 !== null) setLikes(JSON.parse(data1));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("likes", JSON.stringify(likes));
  }, [likes]);

  let [totalPrice, setTotalPrice] = useState(0);
  let [modalActive, setModalActive] = useState(false);

  return (
    <div className="App">
      <Header totalPrice={totalPrice} cart={cart}></Header>
      <div className="changed-components">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Modal
                  modalActive={modalActive}
                  setModalActive={setModalActive}
                ></Modal>
                <Slider></Slider>
                <SneakersList
                  cart={cart}
                  setCart={setCart}
                  items={items}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  setLikes={setLikes}
                  likes={likes}
                ></SneakersList>
                <Totop></Totop>
                <Footer></Footer>
              </>
            }
          ></Route>
          <Route
            path="/likes"
            element={<Like likes={likes} setLikes={setLikes}></Like>}
          ></Route>
        </Routes>
        <Cart
          cart={cart}
          setCart={setCart}
          setTotalPrice={setTotalPrice}
          totalPrice={totalPrice}
          setModalActive={setModalActive}
        ></Cart>
      </div>
    </div>
  );
}

export default App;
