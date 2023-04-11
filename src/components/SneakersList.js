import SneakersItem from "./SneakersItem";

const SneakersList = ({
  items,
  cart,
  setCart,
  totalPrice,
  setTotalPrice,
  likes,
  setLikes,
}) => {
  return (
    <div className="list-menu">
      <div className="list-header">
        <h4 className="list-h">Всі кросівки</h4>
      </div>
      <div className="container main-cont">
        <div className="row sneak-row">
          {items.map((item) => {
            return (
              <SneakersItem
                cart={cart}
                setCart={setCart}
                key={item.id}
                item={item}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                likes={likes}
                setLikes={setLikes}
              ></SneakersItem>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SneakersList;
