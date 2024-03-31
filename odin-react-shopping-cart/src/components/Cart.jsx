import { useContext } from "react";
import { CartContext } from "./App";
import Quantity from "./Quantity";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  // console.log(cart);

  const incrementCount = (cartItem) => {
    const newCart = cart.map((item) => {
      if (item.product.id === cartItem.product.id)
        return { product: item.product, count: item.count + 1 };
      else return item;
    });
    setCart(newCart);
  };

  const decrementCount = (cartItem) => {
    const newCart = cart.map((item) => {
      if (item.product.id === cartItem.product.id)
        return { product: item.product, count: item.count - 1 };
      else return item;
    });
    setCart(newCart);
  };

  const removeItem = (cartItem) => {
    const newCart = cart.filter((item) => {
      if (item.product.id !== cartItem.product.id) return item;
    });
    setCart(newCart);
  };

  const checkout = () => {
    alert("You have successfully checked out. Thank you for trying this demo.");
    setCart([]);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-header">Cart </h1>
      {cart.length < 1 ? (
        <div className="cart-item">Your cart is empty</div>
      ) : (
        cart.map((item) => {
          const { product, count } = item;
          return (
            <div className="cart-item" key={product.id}>
              <div className="details">
                <img src={product.image} alt={product.title} />
                <h1>{product.title}</h1>
                <p className="price">${product.price.toFixed(2)}</p>
              </div>
              <div className="pricing">
                <Quantity
                  incrementCount={() => {
                    incrementCount(item);
                  }}
                  decrementCount={() => {
                    decrementCount(item);
                  }}
                  count={count}
                />
                <p className="item-total-price">
                  ${(product.price * count).toFixed(2)}
                </p>
                <button
                  className="remove-item"
                  onClick={() => {
                    removeItem(item);
                  }}
                >
                  ✖
                </button>
              </div>
            </div>
          );
        })
      )}
      {/* total and checkout div, just clears cart for now */}
      <div className="checkout">
        <p>Total</p>
        <p className="final-total">
          $
          {cart
            .reduce((total, item) => {
              const { product, count } = item;
              return (total += product.price * count);
            }, 0)
            .toFixed(2)}
        </p>
        <button
          className="checkout-button"
          disabled={cart.length < 1}
          onClick={checkout}
        >
          Check out
        </button>
      </div>
    </div>
  );
}
