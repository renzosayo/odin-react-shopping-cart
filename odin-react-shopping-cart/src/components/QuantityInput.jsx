import PropTypes from "prop-types";

export default function QuantityInput({ countToBuy, setCountToBuy }) {
  const incrementCount = () => {
    setCountToBuy((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCountToBuy((prev) => prev - 1);
  };

  return (
    <div className="quantity">
      <span>Quantity</span>
      <span>
        <button
          className="minus"
          onClick={decrementCount}
          disabled={countToBuy < 2}
        >
          -
        </button>
      </span>
      <span>{countToBuy}</span>
      <span>
        <button className="add" onClick={incrementCount}>
          +
        </button>
      </span>
      <div>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
}

QuantityInput.propTypes = {
  countToBuy: PropTypes.number,
  setCountToBuy: PropTypes.func,
};
