import PropTypes from "prop-types";
import { useContext } from "react";
import { ContextProvider } from "./Shop";
import { CartContext } from "./App";
import Quantity from "./Quantity";

export default function AddToCart({ countToBuy, setCountToBuy }) {
  const { selected, setIsOpen } = useContext(ContextProvider);
  const { cart, setCart } = useContext(CartContext);
  const incrementCount = () => {
    setCountToBuy((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCountToBuy((prev) => prev - 1);
  };

  const addToCart = () => {
    setIsOpen(false);
    // setCart([...cart, { product: selected, count: countToBuy }]);

    let isInCart = false;
    const newCart = cart.map((item) => {
      if (item.product.id === selected.id) {
        isInCart = true;
        return { product: item.product, count: countToBuy + item.count };
      } else return item;
    });
    if (isInCart) setCart(newCart);
    else setCart([...cart, { product: selected, count: countToBuy }]);
  };

  return (
    <div className="quantity">
      <span>Quantity</span>
      <Quantity
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        count={countToBuy}
      />
      <div>
        <button className="add-to-cart" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

AddToCart.propTypes = {
  countToBuy: PropTypes.number,
  setCountToBuy: PropTypes.func,
};
